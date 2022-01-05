import { StyleSheet, Text, View } from "react-native"

import React from "react"
import colors from "../constants/colors"
import fonts from "../constants/fonts"

const Operations = ({ route }) => {

    return(
        <View style={{flex: 1}}> 
            <View style={styles.container}>
                <Text> FECHA: {route.params.fecha} </Text>
                <Text> HORA: {route.params.hora} </Text>
                <Text> OPERACION: {route.params.operacion} </Text>
                <Text> MONTO: {route.params.monto} </Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        paddingTop: '25%',
    },
})

export default Operations