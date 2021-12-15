import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"

import ImageSelector from '../components/ImageSelector'
import colors from "../constants/colors"
import fonts from "../constants/fonts"

const Home = ({ navigation }) => {

    const [image, setImage] = useState()
    const [alias, setAlias] = useState()

    const handlePickImage = (image) => {
        setImage(image)
    }

    const handleSave = () => {
        dispatch(updateInfo(image, alias))
    }

    return(
        <View style={{flex: 1}}> 
            <View style={styles.header}>
                <Text style={styles.title}>Mi Perfil</Text>
            </View> 
            <View>
                <ImageSelector onImage={handlePickImage}/>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.secundary, 
        height: '10%', 
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    title: {
        fontFamily: fonts.title,
        color: colors.primary,
        fontSize: 20,
        marginTop: 30,
    },
})

export default Home