import { Button, StyleSheet, View } from "react-native";

import React from "react";
import colors from '../constants/colors'

const Footer = ({ home, exchange }) => {
    return (
        <View style={styles.footer}>
            <Button title="HOME" color={colors.primary} onPress={home} />
            <Button title="EXCHANGE" color={colors.primary} onPress={exchange} />
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: colors.secundary, 
        height: '6%', 
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    }
})

export default Footer