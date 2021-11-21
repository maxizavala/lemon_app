import Exchange from '../screens/Exchange'
import Historial from '../screens/Historial'
import Home from '../screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import Operations from '../screens/Operations'
import React from 'react';
import colors from '../constants/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const LemonNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='Home'
                screenOptions={{
                    headerShown: false,
                    animation: 'none'
                }}
            >
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Exchange' component={Exchange} />
                <Stack.Screen name='Historial' component={Historial} />
                <Stack.Screen 
                    name='Operations' 
                    component={Operations} 
                    options={{
                        title: 'Operations',
                        headerStyle: {
                            backgroundColor: colors.secundary,
                        },
                        headerTintColor: colors.primary,
                        headerShown: true,
                        animation: 'default'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )  

}

export default LemonNavigator