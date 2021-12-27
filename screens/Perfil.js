import React, { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

import AsyncStorage from '@react-native-async-storage/async-storage';
import ImageSelector from "../components/ImageSelector"
import colors from "../constants/colors"
import fonts from "../constants/fonts"

const Perfil = () => {

    const [alias, setAlias] = useState('')


    const getAlias = async () => {
        try {
            const aliasStorage = await AsyncStorage.getItem('@alias')
            if(aliasStorage !== null) {
                setAlias(aliasStorage)
            }
        } catch(e) {
            console.log(e)
        }
    }
    getAlias()


    const aliasSave = async (value) => {
        try {
            await AsyncStorage.setItem('@alias', value)
        } catch (e) {
            console.log(e)
        }
    }

    return(
        <View style={{flex: 1}}>  
            <View>
                <ImageSelector/>
            </View>
            <View style={styles.container}>
                <Text>Tu Alias:</Text>
                <TextInput
                    style={styles.alias}
                    onChangeText={setAlias}
                    value={alias}
                />
            </View>
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={styles.boton} onPress={() => aliasSave(alias)}>
                    <Text style={styles.textButton}>GUARDAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: 'center',
    },
    alias: {
        fontSize: 32,
        borderWidth: 1,
        textAlign: 'center',
        width: 150,
        borderRadius: 15,
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

export default Perfil