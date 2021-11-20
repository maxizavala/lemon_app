import Exchange from '../screens/Exchange'
import Home from '../screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const LemonNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Exchange' component={Exchange} />
            </Stack.Navigator>
        </NavigationContainer>
    )  

}

export default LemonNavigator