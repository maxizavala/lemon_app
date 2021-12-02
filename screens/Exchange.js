import React, { useState } from "react";
import { StyleSheet, View } from 'react-native';

import Header from '../components/Header'
import Lista from '../components/Lista'
import Modal from '../components/Modal'
import { addOrder } from "../store/actions/orders.actions";
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';

const Exchange = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = useState('');
    const [itemList, setItemList] = useState([]);
    const [operacion, setOperacion] = useState('');

    const dispatch = useDispatch();
    const orders = useSelector(state => state.ordenes.list);

    const obtenerFecha = () => {
        const f = new Date()

        let day = f.getDate()
        let month = f.getMonth()
        let year = f.getFullYear()
        let date = day + "/" + month + "/" + year

        let hour = f.getHours() < 9 ? "0" + f.getHours() : f.getHours()
        let minutes = f.getMinutes() < 9 ? "0" + f.getMinutes() : f.getMinutes()
        let seconds = f.getSeconds() < 9 ? "0" + f.getSeconds() : f.getSeconds()
        let time = hour + ":" + minutes + ":" + seconds

        return date + " " + time

    }


    const buy = () => {
        setText('Comprar btc')
        setModalVisible(true);
        setOperacion('Compra de btc')
    }

    const sell = () => {
        setText('Vender btc')
        setModalVisible(true);
        setOperacion('Venta de btc')
    }

    const addItem = (op) => {
        dispatch(addOrder({
            id: Math.random().toString(),
            value: obtenerFecha() + " - " + op
        })) 

    }

    const handleConfirm = () => {
        setModalVisible(false)
        addItem(operacion)
    }

    const handleCancel = () => {
        setModalVisible(false);
    }
    
    return (
        <View style={styles.container}>
            <Header
                buy={buy}
                sell={sell}
            />

            <Lista lista={orders}/> 

            <View style={styles.footer}>

            </View>

            <Modal
                modalVisible={modalVisible}
                handleConfirm={handleConfirm}
                handleCancel={handleCancel}
                text={text}
            /> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    footer: {
        height: '16%', 
        width: '100%', 
    },
})

export default Exchange