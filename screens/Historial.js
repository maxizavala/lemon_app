import { ScrollView, StyleSheet, Text, View } from "react-native"

import Footer from "../components/Footer"
import React from "react"
import colors from "../constants/colors"
import fonts from "../constants/fonts"

const Home = () => {

    return (
        <View style={{flex: 1}}> 
            <View style={styles.header}>
                <Text style={styles.title}>Historial</Text>
            </View> 
            <ScrollView>

            </ScrollView>
            <Footer/>
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
    }
})

export default Home