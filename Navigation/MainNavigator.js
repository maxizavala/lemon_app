import LoginNavigator from "./LoginNavigator"
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import TabNavigator from "./TabNavigator"
import { useSelector } from "react-redux"

const MainNavigator = () => {
    
    const user = useSelector(state => state.auth.userId) 

	return (
		<NavigationContainer>
            { user ? <TabNavigator/> : <LoginNavigator/> }
		</NavigationContainer>
	)
}

export default MainNavigator