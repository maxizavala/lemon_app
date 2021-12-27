import * as ImagePicker from 'expo-image-picker'

import { Alert, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from "react"

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import colors from '../constants/colors'

const ImageSelector = props => {
    const [pickedUri, setPickedUri] = useState(null)

    
    const getAvatar = async () => {
        try {
            const avatar = await AsyncStorage.getItem('@avatar')
            if(avatar !== null) {
                setPickedUri(avatar)
            }
        } catch(e) {
            console.log(e)
        }
    }
    getAvatar()

    
    const verifyPermissions = async () => {
        const status = ImagePicker.requestMediaLibraryPermissionsAsync()

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

    
    const storeAvatar = async (value) => {
        try {
            await AsyncStorage.setItem('@avatar', value)
        } catch (e) {
            console.log(e)
        }
    }


    const handleTakeImage = async () => {
        const isCameraOk = await verifyPermissions()
        if (!isCameraOk)  return 

        const image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            aspect: [4, 3],
            quality: 1,
        })

        setPickedUri(image.uri)
        storeAvatar(image.uri)
    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUri
                    ? <Image style={styles.image} source={require('../assets/img/user.jpeg')} resizeMode="cover" />
                    : <Image style={styles.image} source={{uri: pickedUri}} />
                }
                <TouchableOpacity style={styles.button} onPress={handleTakeImage}>
                    <View style={styles.circle}>
                        <Feather name="camera" size={36} color="white" />
                    </View> 
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