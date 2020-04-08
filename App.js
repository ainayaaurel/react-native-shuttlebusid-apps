import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../ticketapps/src/screens/LoginScreen'
import Register from '../ticketapps/src/screens/RegisterScreen'

// const styles = StyleSheet.create({
//   parent: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   title: {
//     fontSize: 30,
//   }
// })
const Stack = createStackNavigator()

// class MainScreen extends Component {
//   render() {
//     return (
//       <Stack.Navigator>
//         {/* <Stack.Screen component={MainScreen} name='Home' /> */}
//         <Stack.Screen name='Login' component={Login} />
//       </Stack.Navigator>
//     )
//   }
// }

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} options={{
            headerShown: false
          }} />
          <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

