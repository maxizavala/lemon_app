import { StyleSheet, Text, View } from "react-native"

import CardComponent from "../components/CardComponent"
import React from "react"
import colors from "../constants/colors"
import fonts from "../constants/fonts"

const Home = () => {

    return(
        <View style={{flex: 1}}> 
            <View style={styles.header}>
                <Text style={styles.title}>HOME</Text>
            </View> 
            <View style={styles.container}>
                <View style={styles.card}>
                    <CardComponent title="Perfil"/>
                </View>
                <View style={styles.card}>
                    <CardComponent title="Depositos"/>
                </View>
                <View style={styles.card}>
                    <CardComponent title="Retiros"/>
                </View>
                <View style={styles.card}>
                    <CardComponent title="Agenda"/>
                </View>
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
    container: {
        alignItems: 'center',
        marginTop: 10,
    },
    card: {
        margin: 10,
    }
    
})

export default Home