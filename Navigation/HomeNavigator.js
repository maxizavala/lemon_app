import Agenda from "../screens/Agenda"
import Home from "../screens/Home"
import React from "react"
import Retiros from "../screens/Retiros"
import colors from "../constants/colors"
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

            <Stack.Screen 
                name="Retiros" 
                component={Retiros} 
                options={{
                    title: 'Retiros',
                    headerStyle: {
                        backgroundColor: colors.secundary,
                    },
                    headerTintColor: colors.primary,
                    headerShown: true,
                    animation: 'default'
                }}
            />

            <Stack.Screen 
                name="Agenda" 
                component={Agenda} 
                options={{
                    title: 'Agenda',
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

export default HomeNavigator