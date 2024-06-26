import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../../screens/Login';



const AuthStack = () => {
    const Stack = createNativeStackNavigator();
  return (
   <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name='Login' component={LoginScreen}></Stack.Screen>
   </Stack.Navigator>
  )
}

export default AuthStack