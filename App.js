import AppLoading from 'expo-app-loading'
import MainNavigator from "./Navigation/MainNavigator"
import { Provider } from 'react-redux';
import React from "react"
import { StatusBar } from 'expo-status-bar';
import { init } from './db'
import store from './store';
import { useFonts } from 'expo-font'

init()
	.then(() => console.log('Database Initialized'))
	.catch((err) => {
		console.log('Database fail connect')
		console.log(err.message)
	})

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
