import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconHistory from 'react-native-vector-icons/FontAwesome5'
import Home from './HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Account from './Account'
import MyOrder from './History'

const BottomTab = createBottomTabNavigator()
export default class HomeScreen extends Component {
  render() {
    return (
      <BottomTab.Navigator>
        <BottomTab.Screen
          component={Home}
          name='HomeScreen'
          color='#569248'
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name='home' color='#569248' size={size} />
            )
          }} />
        <BottomTab.Screen
          component={MyOrder}
          name='My Order: '
          options={{
            tabBarLabel: 'My Order',
            tabBarIcon: ({ color, size }) => (
              <IconHistory name='clipboard-list' color={color} size={size} />
            )
          }}
        />
        <BottomTab.Screen
          component={Account}
          name='Account'
          options={{
            tabBarLabel: 'My Account',
            tabBarIcon: ({ color, size }) => (
              <Icon name='account' color={color} size={size} />
            )
          }}
        />
      </BottomTab.Navigator>

    )
  }
}
