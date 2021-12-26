import { StyleSheet, Text, View } from "react-native";

import React from "react";
import colors from "../constants/colors";
import fonts from "../constants/fonts";

const CardComponent = ({title}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
    
}

const styles = new StyleSheet.create({
    container: {
        width: 300,
        height: 80,
        borderRadius: 20,
        backgroundColor: colors.secundary,
        justifyContent: 'center',
    },
    text: {
        color: colors.primary,
        fontSize: 32,
        fontFamily: fonts.title,
        textAlign: 'center',
    }
})

export default CardComponent