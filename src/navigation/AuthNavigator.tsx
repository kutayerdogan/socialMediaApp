import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RouteNames } from './RouteNames'
import LoginScreen from '../screens/Login/LoginScreen'
import WelcomeScreen from '../screens/Welcome/WelcomeScreen'
const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator 
        screenOptions={{
            headerShown: false
        }}
    > 
      <Stack.Screen name={RouteNames.LOGIN} component={LoginScreen} />
      <Stack.Screen name={RouteNames.WELCOME} component={WelcomeScreen} />

      
    </Stack.Navigator>
  )
}

export default AuthNavigator

const styles = StyleSheet.create({})