import Exchange from "../screens/Exchange"
import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const ExchangeNavigator = () => {
	return (
		<Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'none'
            }}
        >
			<Stack.Screen name="Exchange" component={Exchange} />
		</Stack.Navigator>
	)
}

export default ExchangeNavigator