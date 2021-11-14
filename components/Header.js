import { StyleSheet, Text, View } from "react-native";

import { Icon } from 'react-native-elements'
import React from "react";
import colors from '../constants/colors';
import fonts from '../constants/fonts';

const Header = ({buy, sell}) => {

    return (
        <View style={styles.header}>
            <View style={styles.text}>
                <Text style={styles.textTitle}>Saldo disponible</Text>
                <Text style={styles.textSaldo}>$5.000,00</Text>
            </View>
            <View style={styles.iconContainer}>
                <Icon name='add-circle' color={colors.primary} style={styles.iconR} onPress={buy}/>
                <Icon name='remove-circle' color={colors.primary} style={styles.iconL} onPress={sell}/>
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
        backgroundColor: colors.secundary, 
        height: '17%', 
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
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary,
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