import Historial from "../screens/Historial"
import Operations from "../screens/Operations"
import React from "react"
import colors from "../constants/colors"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const HistorialNavigator = () => {
	return (
		<Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'none'
            }}
        >
			<Stack.Screen name="Historial" component={Historial} />
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
	)
}

export default HistorialNavigator