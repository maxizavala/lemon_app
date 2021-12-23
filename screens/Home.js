import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

import CardComponent from "../components/CardComponent"
import React from "react"
import colors from "../constants/colors"
import fonts from "../constants/fonts"

const Home = ({navigation}) => {

    return(
        <View style={{flex: 1}}> 
            <View style={styles.header}>
                <Text style={styles.title}>HOME</Text>
            </View> 
            <View style={styles.container}>
                <TouchableOpacity style={styles.card}>
                    <CardComponent title="Perfil"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <CardComponent title="Depositos"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Retiros')}>
                    <CardComponent title="Retiros"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Agenda')}>
                    <CardComponent title="Agenda"/>
                </TouchableOpacity>
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
        marginVertical: '25%',
        justifyContent: 'center',
    },
    card: {
        margin: 10,
    }
    
})

export default Home