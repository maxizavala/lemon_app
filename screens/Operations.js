import { Button, ScrollView, StyleSheet, Text, View } from "react-native"

import React from "react"
import colors from "../constants/colors"
import fonts from "../constants/fonts"

const Operations = ({ navigation, route }) => {

    return(
        <View style={{flex: 1}}> 

            <ScrollView>
                <Text> FECHA: {route.params.fecha} </Text>
                <Text> HORA: {route.params.hora} </Text>
                <Text> OPERACION: {route.params.operacion} </Text>
                <Text> MONTO: {route.params.monto} </Text>
            </ScrollView>
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
})

export default Operations