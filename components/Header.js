import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import { useSelector } from 'react-redux';

const Header = ({buy, sell}) => {

    const arsSaldo = useSelector(state => state.arsSaldo.saldo);
    const btcMount = useSelector(state => state.btcPrice.saldo)

    return (
        <View style={styles.header}>
            <View style={styles.text}>
                <Text style={styles.textTitle}>Saldo disponible</Text>
                <Text style={styles.textSaldo}>${arsSaldo.toFixed(2)}</Text>
                <Text style={styles.textSaldo}> {btcMount.toFixed(8)} btc </Text>
            </View>
            <View style={styles.iconContainer}>
                <Button title="COMPRAR" color={colors.primary} style={styles.iconR} onPress={buy}/>
                <Button title="VENDER" color={colors.primary} style={styles.iconL} onPress={sell}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.secundary, 
        height: '20%', 
        width: '100%', 
    },
    text: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    textTitle: {
        marginTop: 50,
        fontFamily: fonts.title,
        fontSize: 15,
        color: colors.primary,
    },
    textSaldo: {
        marginTop: 10,
        fontFamily: fonts.text,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
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
        fontFamily: fonts.text,
        fontSize: 15,
        color: colors.primary,
        marginLeft: 75
    },
    iconR: {
        marginRight: 85
    },
    textButtonR: {
        fontFamily: fonts.text,
        fontSize: 15,
        color: colors.primary,
        marginRight: 75
    }
})

export default Header;