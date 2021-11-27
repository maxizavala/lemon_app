import { StyleSheet, Text, View } from 'react-native'

import ExchangeNavigator from "./ExchangeNavigator"
import { Foundation } from '@expo/vector-icons'
import HistorialNavigator from "./HistorialNavigator"
import HomeNavigator from "./HomeNavigator"
import React from "react"
import colors from '../constants/colors'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const BottomTabs = createBottomTabNavigator()

const TabNavigator = () => {
	return (
		<BottomTabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBar,
                tabBarShowLabel: false,
        }}
        >
		    <BottomTabs.Screen
                name="HomeNav"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.item}>
                            <Foundation name="home" size={24} color={focused ? colors.primary : 'white'} />
                            <Text style={ focused ? {color: colors.primary} : {color: 'white'} } >Home</Text>
                        </View>
                    )
                }}
            />

            <BottomTabs.Screen
                name="ExchangeNav"
                component={ExchangeNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.item}>
                            <Foundation name="bitcoin-circle" size={24} color={focused ? colors.primary : 'white'} />
                            <Text style={ focused ? {color: colors.primary} : {color: 'white'} } >Exchange</Text>
                        </View>
                    )
                }}
            />

            <BottomTabs.Screen
                name="HistorialNav"
                component={HistorialNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.item}>
                            <Foundation name="list" size={24} color={focused ? colors.primary : 'white'} />
                            <Text style={ focused ? {color: colors.primary} : {color: 'white'} } >Historial</Text>
                        </View>
                    )
                }}
            />

		</BottomTabs.Navigator>
	)
}

const styles = StyleSheet.create({
    tabBar: { 
        backgroundColor: colors.secundary,
		position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
        shadowColor: '#7f5df0',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
	},
	item: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default TabNavigator
