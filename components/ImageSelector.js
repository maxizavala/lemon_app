import * as ImagePicker from 'expo-image-picker'

import { Alert, Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from "react"

import { Feather } from '@expo/vector-icons';
import colors from '../constants/colors'
import { useSelector } from 'react-redux';

const ImageSelector = props => {
    
    const setAlias = useSelector(state => state.info.alias);
    const avatar = useSelector(state => state.info.avatar);
    const [pickedUri, setPickedUri] = useState()
    const [alias, onChangeAlias] = useState(setAlias);

    const verifyPermissions = async () => {
        const status = ImagePicker.requestCameraPermissionsAsync()

        
        if (status.granted === false) {
            Alert.alert(
                'Permisos insuficientes',
                'Necesitas dar permisos de la camara para usar la aplicación.',
                [{ text: 'OK' }],
            )
                return false
            }

            return true
    }
        

    const handleTakeImage = async () => {
        const isCameraOk = await verifyPermissions()
        if (!isCameraOk)  return 

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: false,
            aspect: [16,9],
            quality: 0.8,
        })

        setPickedUri(image.uri)
        props.onImage(image.uri)
    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUri
                    ? <Image style={styles.image} source={require('../assets/img/user.png')} resizeMode="cover" />
                    : <Image style={styles.image} source={{uri: pickedUri}} />
                }
                <TouchableOpacity style={styles.button} onPress={handleTakeImage}>
                    <View style={styles.circle}>
                        <Feather name="camera" size={36} color="white" />
                    </View> 
                </TouchableOpacity>
            </View>
            <TextInput 
                style={styles.alias}
                onChangeText={onChangeAlias}
                value={alias}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: 'center',
    },
    preview: {
        width: 200,
        height: 200,
        borderRadius: 200/2,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.secundary,
        borderWidth: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 200/2,
        flex: 1,
    },
    button: {
        position: "absolute",
        bottom: 0,
        right: 5,
    },
    circle: {
        width: 45,
        height: 45,
        borderRadius: 45/2,
        backgroundColor: colors.secundary,
        alignItems: 'center',
        justifyContent: 'center',
     },
     alias: {
        fontSize: 32,
     }
})

export default ImageSelector