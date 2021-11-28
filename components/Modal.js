import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import colors from "../constants/colors";
import fonts from '../constants/fonts';

const ModalComponent = ({modalVisible, handleConfirm, handleCancel, text}) => {

    const [btc, setBtc] = useState(0)
    const [enteredValue, setEnteredValue] = useState('')

    const handleInputValue = text => {
        setEnteredValue(text.replace(/[^0-9]/g, ''))
        if (text <= 5000) {
            let btc = calcularBtc(text)
            setBtc(btc)
        } else {
            setEnteredValue(enteredValue)
        }
        
    }

    const calcularBtc = (monto) => {
        const btc = 61856.40
        return (monto/btc).toFixed(8)
    }

    const confirm = () => {
        if (btc > 0) {
            handleConfirm()
        }
        setEnteredValue('')
        setBtc(0)
    }


    const cancel = () => {
        handleCancel()
        setEnteredValue('')
        setBtc(0)
    }

    return(
        <Modal animationType="slide" visible={modalVisible} transparent>
            <View style={styles.modalContainer}>
                <View style={[styles.modalContent, styles.shadow]}>
                    <Text style={styles.title}> {text} </Text>
                    <Text style={styles.modalCotizacion}> 1 btc = $61.856,40 </Text>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.title} > $ </Text>
                        <TextInput 
                            style={styles.input}
                            keyboardType="numeric"
                            value={enteredValue}
                            onChangeText={handleInputValue}
                        />
                    </View>
                    <Text style={styles.modalMessage}> {btc} btc </Text>
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={confirm}
                            title="CONFIRMAR"
                            color={colors.primary}
                        />
                        <Button
                            onPress={cancel}
                            title="CANCELAR"
                            color={colors.primary}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
    
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      modalContent: {
        padding: 30,
        backgroundColor: colors.secundary,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        overflow: 'hidden',
      },
      modalMessage: {
        fontSize: 18,
        color: 'white'
      },
      modalCotizacion: {
        fontSize: 25,
        marginTop: 10,
        marginBottom: 20,
        color: 'white'
      },
      shadow: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      input: {
        height: 30,
        width: 120,
        borderBottomColor: colors.primary,
        color: 'white',
        textAlign: 'center',
        borderBottomWidth: 1
    },
    title: {
        fontFamily: fonts.title,
        fontSize: 25,
        color: colors.secundary,
        color: colors.primary
    },
    buttonContainer: {
        flexDirection: 'row',
        margin: 10
    },
})

export default ModalComponent