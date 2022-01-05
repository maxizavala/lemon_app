import { StyleSheet, Text, View } from "react-native";

import React from "react";
import colors from "../constants/colors";
import fonts from "../constants/fonts";

const Depositos = () => {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>CBU</Text>
                <Text style={styles.text}>xxxx-xxxx-xxxx</Text>
                <Text style={styles.title}>WALLET BTC</Text>
                <Text style={styles.text}>xxxx-xxxx-xxxx-xxxx-xxxx</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        height: 400,
        width: 300,
        backgroundColor: colors.secundary,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    text: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 20,
        color: 'white'
    },
    title: {
        fontFamily: fonts.title,
        fontSize: 25,
        color: colors.secundary,
        color: colors.primary
    },
})

export default Depositos