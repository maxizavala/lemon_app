import React, {useState} from "react"
import { StyleSheet, View } from 'react-native'

import AppLoading from 'expo-app-loading'
import Exchange from "./screens/Exchange"
import Footer from './components/Footer'
import Home from "./screens/Home"
import { useFonts } from 'expo-font'

const App = () => {

    const [screen, setScreen] = useState('home')

    const home = () => setScreen('home')
    const exchange = () => setScreen('exchange')

    const [loaded] = useFonts({
        Bebas: require('./assets/fonts/Bebas.ttf'),
        Roboto: require('./assets/fonts/Roboto.ttf')
    })
	
	if (!loaded) { return <AppLoading/> }

    const pantalla = screen === 'home'
    ? <Home/>
    : <Exchange/>
    
    return (
        <View style={styles.container}>
            { pantalla }
            <Footer home={home} exchange={exchange}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})

export default App
