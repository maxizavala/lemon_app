import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import React, { useState } from "react"

import { addAddress } from '../store/actions/address.actions';
import colors from "../constants/colors"
import fonts from "../constants/fonts"
import { useDispatch } from "react-redux";

const Retiros = () => {

    const [direccion, setDireccion] = useState('')
    const [nombre, setNombre] = useState('')

    const dispatch = useDispatch()

    const handleSave = () => {
        dispatch(addAddress(nombre, direccion))
        setDireccion('')
        setNombre('')
        Alert.alert(
            'Perfecto!',
            'Tu retiro fue procesado con exito y se ejecutara en breve.',
            [{text: 'Aceptar'}]
        )
    }

    return(
        <View style={{flex: 1, marginTop: '50%'}}>
            
            <View style={{alignItems: 'center'}}>
                <Text style={styles.text}>Ingresa un CVU, un Alias o una dirección bitcoin</Text>
            </View>

            <View style={{alignItems: 'center'}}>
                <TextInput 
                    style={styles.input}
                    value={direccion}
                    onChangeText={setDireccion}
                />
            </View>

            <View style={{alignItems: 'center'}}>
                <Text style={styles.text}>Ingresa un nombre para agendarlo</Text>
            </View>

            <View style={{alignItems: 'center'}}>
                <TextInput 
                    style={styles.input}
                    value={nombre}
                    onChangeText={setNombre}
                />
            </View>

            <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={styles.boton} onPress={handleSave}>
                    <Text style={styles.textButton}>ENVIAR</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        marginHorizontal: 20,
    },
    input: {
        marginTop: 10,
        borderWidth: 1,
        height: 30,
        width: 250,
        borderRadius: 10,
        textAlign: 'center',
    },
    boton: {
        marginTop: 20,
        height: 30,
        width: 100,
        backgroundColor: colors.secundary,
        borderRadius: 10,
    },
    textButton: {
        color: colors.primary, 
        fontFamily: fonts.title, 
        fontSize: 25, 
        textAlign: 'center'
    },
})

export default Retiros