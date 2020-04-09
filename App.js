import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../ticketapps/src/screens/LoginScreen'
import Register from '../ticketapps/src/screens/RegisterScreen'
import ForgotPassword from '../ticketapps/src/screens/ForgotPassword'
import BottomStack from '../ticketapps/src/screens/BottomStack'
import Home from '../ticketapps/src/screens/HomeScreen'
import SelectBus from '../ticketapps/src/screens/SelectBus'
import Calendar from '../ticketapps/src/screens/Calender'

const Stack = createStackNavigator()

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} options={{
            headerShown: false
          }} />
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='ForgotPassword' component={ForgotPassword}
            options={{ headerShown: false }} />
          <Stack.Screen name='Home' component={BottomStack} options={{ headerShown: false }} />
          <Stack.Screen name='Select Bus' component={SelectBus} options={{ headerShown: false }} />
          <Stack.Screen name='Calendar' component={Calendar} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
