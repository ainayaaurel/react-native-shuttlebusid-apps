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
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/Redux/store'
import EditProfile from './src/screens/EditProfile'
import ChooseChair from './src/screens/SelectaChair'
import TopUp from './src/screens/TopUp'
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
          <Stack.Screen name='Select Bus' component={SelectBus} options={{ headerShown: true }} />
          <Stack.Screen name='Back' component={ChooseChair} options={{ headerShown: true }} />
          <Stack.Screen name='Calendar' component={Calendar} options={{ headerShown: false }} />
          <Stack.Screen name='Edit Profile' component={EditProfile} options={{ headerShown: true }} />
          <Stack.Screen name='Top Up' component={TopUp}
            options={{ headerShown: true }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

// const AppNavigator = createSwitchNavigator({
//   AuthLoading: AuthLoadingScreen,
//   App: TabNavigator,
//   Auth: AuthStack,
// });

// const AppContainer = createAppContainer(AppNavigator);

// function App() {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <AppContainer />
//       </PersistGate>
//     </Provider>
//   );
// }

