import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../src/screens/LoginScreen'
import Register from '../src/screens/RegisterScreen'
import ForgotPassword from '../src/screens/ForgotPassword'
import BottomStack from '../src/screens/BottomStack'
import SelectBus from '../src/screens/SelectBus'
import Calendar from '../src/screens/Calender'
import EditProfile from '../src/screens/EditProfile'
import ChooseChair from '../src/screens/SelectaChair'
import TopUp from '../src/screens/TopUp'
const Stack = createStackNavigator()
import { connect } from 'react-redux'


class MainHome extends Component {
  componentDidMount() {
    console.log('HELL', this.props.login)
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {this.props.login ?
            <Stack.Screen name='Home' component={BottomStack} options={{ headerShown: false }} />
            : <Stack.Screen name='Login' component={Login} options={{
              headerShown: false
            }} />}

          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='ForgotPassword' component={ForgotPassword}
            options={{ headerShown: false }} />

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

const mapStateToProps = (state) => {
  return {
    login: state.login.sudahLogin
  }
}

export default connect(mapStateToProps, null)(MainHome)




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

