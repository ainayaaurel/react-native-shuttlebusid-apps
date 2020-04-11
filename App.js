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
import MainHome from './src/MainHome'
import { connect } from 'react-redux'
const Stack = createStackNavigator()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainHome />
        </PersistGate>
      </Provider>
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

//         <AppContainer />

//   );
// }

