import Home from "../screens/Home"
import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const HomeNavigator = () => {
	return (
		<Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'none'
            }}
        >
			<Stack.Screen name="Home" component={Home} />
		</Stack.Navigator>
	)
}

export default HomeNavigator