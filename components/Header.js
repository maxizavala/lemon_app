import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Icon } from 'react-native-elements'

const Header = ({buy, sell}) => {

    return (
        <View style={styles.header}>
            <View style={styles.text}>
                <Text style={styles.textTitle}>Saldo disponible</Text>
                <Text style={styles.textSaldo}>$5.000,00</Text>
            </View>
            <View style={styles.iconContainer}>
                <Icon name='add-circle' color='white' style={styles.iconR} onPress={buy}/>
                <Icon name='remove-circle' color='white' style={styles.iconL} onPress={sell}/>
            </View>
            <View style={styles.iconContainer}>
                <Text style={styles.textButtonR}> Comprar </Text>
                <Text style={styles.textButtonL}> Vender </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'cornflowerblue', 
        height: '17%', 
        width: '100%', 
    },
    text: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    textTitle: {
        marginTop: 50,
        fontFamily: 'Arial',
        fontSize: 15,
        color: 'white'
    },
    textSaldo: {
        marginTop: 10,
        fontFamily: 'Arial',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    iconContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    iconL: {
        marginLeft: 85
    },
    textButtonL: {
        fontFamily: 'Arial',
        fontSize: 15,
        color: 'white',
        marginLeft: 75
    },
    iconR: {
        marginRight: 85
    },
    textButtonR: {
        fontFamily: 'Arial',
        fontSize: 15,
        color: 'white',
        marginRight: 75
    }
})

export default Header;