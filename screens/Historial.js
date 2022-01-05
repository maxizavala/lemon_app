import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import React from "react"
import colors from "../constants/colors"
import fonts from "../constants/fonts"
import { useSelector } from 'react-redux';

const Historial = ({ navigation }) => {

    const historial = useSelector(state => state.historial);

    const handleSelectOperation = (item) => {
        navigation.navigate('Operations', {
            fecha: item.fecha,
            hora: item.hora,
            operacion: item.operacion,
            monto: item.debito_monto,
        })
    }

    return (
        <View style={{flex: 1}}> 
            <View style={styles.header}>
                <Text style={styles.title}>Historial</Text>
            </View> 
            
            <FlatList 
                data={historial}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.itemList}>
                            <View style={styles.item}>
                                <TouchableOpacity onPress={() => handleSelectOperation(item)}>
                                    <Text>{item.fecha} - {item.operacion} - {item.debito_monto}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }}
            /> 
            
        </View>
    )

}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.secundary, 
        height: '10%', 
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    title: {
        fontFamily: fonts.title,
        color: colors.primary,
        fontSize: 20,
        marginTop: 30,
    },
    itemList: {
        justifyContent:'center',
        alignItems:'center',
    },
    item: {
        width: '90%',
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
    },
})

export default Historial