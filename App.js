import { StyleSheet, View } from 'react-native';

import AppLoading from 'expo-app-loading'
import Exchange from "./screens/exchange";
import React from "react";
import { useFonts } from 'expo-font'

const App = () => {

    const [loaded] = useFonts({
        Bebas: require('./assets/fonts/Bebas.ttf'),
        Roboto: require('./assets/fonts/Roboto.ttf')
    })
	
	if (!loaded) { return <AppLoading/> }


    
    return (
        <View style={styles.container}>
            <Exchange/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})

export default App
