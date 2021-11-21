import { Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import { HISTORIAL } from "../data/historial"
import React from "react"
import colors from "../constants/colors"
import fonts from "../constants/fonts"

const Historial = ({ navigation }) => {

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
                data={HISTORIAL}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleSelectOperation(item)}>
                        <Text>{item.fecha} - {item.operacion} - {item.debito_monto}</Text>
                    </TouchableOpacity>
                )}
            /> 
            
            
            <View style={styles.footer}>
                <Button title="HOME" color={colors.primary} onPress={ () => navigation.push('Home') } />
                <Button title="ORDERS" color={colors.primary} onPress={ () => navigation.push('Exchange') } />
                <Button title="HISTORIAL" color={colors.primary} onPress={ () => navigation.push('Historial') } />
            </View>
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
    footer: {
        backgroundColor: colors.secundary, 
        height: '6%', 
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    }
})

export default Historial