import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native"
import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'

import colors from "../constants/colors"
import fonts from '../constants/fonts'
import { updateArs } from "../store/actions/ars.actions"
import { updateBtc } from "../store/actions/btc.actions"
import { updateCotizacion } from "../store/actions/cotizacion.actions"
import { updateMonto } from "../store/actions/monto.actions"

const ModalComponent = ({modalVisible, handleConfirm, handleCancel, operacion, text}) => {

    const btcPrice = useSelector(state => state.btcPrice.price);
    const btcSaldo = useSelector(state => state.btcPrice.saldo);
    const arsSaldo = useSelector(state => state.arsSaldo.saldo);

    const [monto, setMonto] = useState('')
    const [cotizacion, setCotizacion] = useState('')

    const dispatch = useDispatch();

    
    const handleMontoValue = text => {
        setMonto(text)
        if (operacion === "COMPRA") {
            if (text > arsSaldo) {
                setMonto(monto)
            }
        } else {
            if (text > btcSaldo) {
                setMonto(monto)
            }
        }
    }


    const handleCotizacionValue = text => {
        setCotizacion(text)
    }


    const confirm = () => {
        
        if (operacion === 'COMPRA') {
            dispatch(updateArs(monto))
        }
        if (operacion === 'VENTA') {
            dispatch(updateBtc(monto))
        }

        dispatch(updateMonto(monto))
        dispatch(updateCotizacion(cotizacion))

        setMonto('')
        setCotizacion('')

        handleConfirm()
    }


    const cancel = () => {
        handleCancel()
        setMonto('')
        setCotizacion('')
    }

    return(
        <Modal animationType="slide" visible={modalVisible} transparent>
            <View style={styles.modalContainer}>
                <View style={[styles.modalContent, styles.shadow]}>
                    <Text style={styles.title}> {text} </Text>
                    <Text style={styles.modalCotizacion}> cotización actual ${btcPrice} </Text>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.title} > monto $ </Text>
                        <TextInput 
                            style={styles.input}
                            keyboardType="numeric"
                            value={monto}
                            onChangeText={handleMontoValue}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.title} > cotización $ </Text>
                        <TextInput 
                            style={styles.input}
                            keyboardType="numeric"
                            value={cotizacion}
                            onChangeText={handleCotizacionValue}
                        />
                    </View>
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
        fontSize: 18,
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