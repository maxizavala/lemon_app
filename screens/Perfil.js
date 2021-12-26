import React, { useState } from "react"
import { StyleSheet, View } from "react-native"

import ImageSelector from "../components/ImageSelector"

const Perfil = () => {

    return(
        <View style={{flex: 1}}>  
            <View>
                <ImageSelector/>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({

})

export default Perfil