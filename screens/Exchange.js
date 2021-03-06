import React, { useEffect, useState } from "react";
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

import Header from '../components/Header'
import Lista from '../components/Lista'
import Modal from '../components/Modal'
import { getOrders } from "../store/actions/orders.actions";

const Exchange = () => {

    const dispatch = useDispatch();
    const orders = useSelector(state => state.ordenes.list);
    const monto = useSelector(state => state.monto.monto);
    const cotizacion = useSelector(state => state.cotizacion.cotizacion);
    
    useEffect(() => {
        dispatch(getOrders())
    }, []);

    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = useState('');
    const [operacion, setOperacion] = useState('');


    const obtenerFecha = () => {
        const f = new Date()

        let day = f.getDate()
        let month = f.getMonth() + 1
        let year = f.getFullYear()
        let date = day + "/" + month + "/" + year

        let hour = f.getHours() < 9 ? "0" + f.getHours() : f.getHours()
        let minutes = f.getMinutes() < 9 ? "0" + f.getMinutes() : f.getMinutes()
        let seconds = f.getSeconds() < 9 ? "0" + f.getSeconds() : f.getSeconds()
        let time = hour + ":" + minutes + ":" + seconds

        return date + " " + time
    }


    const buy = () => {
        setText('Orden de compra')
        setModalVisible(true);
        setOperacion('COMPRA')
    }

    
    const sell = () => {
        setText('Orden de venta')
        setModalVisible(true);
        setOperacion('VENTA')
    }
    

    const handleConfirm = () => {
        setModalVisible(false)

        setTimeout(
            function(){                          
                dispatch(getOrders())  
        }, 2500);
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
                operacion={operacion}
                text={text}
                fecha={obtenerFecha()}
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