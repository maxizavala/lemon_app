import React, { useState } from "react"

import LoginNavigator from "./LoginNavigator"
import { NavigationContainer } from "@react-navigation/native"
import TabNavigator from "./TabNavigator"
import { useSelector } from "react-redux"

const MainNavigator = () => {
    
    const user = useSelector(state => null) 

	return (
		<NavigationContainer>
            { user ? <TabNavigator/> : <LoginNavigator/> }
		</NavigationContainer>
	)
}

export default MainNavigator