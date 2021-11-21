import AppLoading from 'expo-app-loading'
import LemonNavigator from "./Navigation/LemonNavigator"
import React from "react"
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font'

const App = () => {

    const [loaded] = useFonts({
        Bebas: require('./assets/fonts/Bebas.ttf'),
        Roboto: require('./assets/fonts/Roboto.ttf')
    })
	
	if (!loaded) { return <AppLoading/> }

    return(
        <>
            <LemonNavigator/>
            <StatusBar style="auto" />
        </>
    );
}

export default App
