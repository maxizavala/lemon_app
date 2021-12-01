import AppLoading from 'expo-app-loading'
import MainNavigator from "./Navigation/MainNavigator"
import { Provider } from 'react-redux';
import React from "react"
import { StatusBar } from 'expo-status-bar';
import store from './store';
import { useFonts } from 'expo-font'

const App = () => {

    const [loaded] = useFonts({
        Bebas: require('./assets/fonts/Bebas.ttf'),
        Roboto: require('./assets/fonts/Roboto.ttf')
    })
	
	if (!loaded) { return <AppLoading/> }

    return(
        <Provider store={store}>
            <MainNavigator/>
            <StatusBar style="light" />
        </Provider>
    );
}

export default App
