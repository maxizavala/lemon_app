import LoginScreen from "../screens/LoginScreen";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

const LoginNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
    )    
}

export default LoginNavigator