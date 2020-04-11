import React, { Component } from 'react'
import { View, Text, ImageBackground } from 'react-native'
import IconHistory from 'react-native-vector-icons/FontAwesome5'

export default class History extends Component {
  render() {
    return (
      <View>
        <View>
          <IconHistory name='history' size={50} color='black' />
          <Text> </Text>
        </View>
      </View>
    )
  }
}