import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import IconBus from 'react-native-vector-icons/MaterialCommunityIcons'

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#15B105',
    justifyContent: 'center',
    paddingLeft: 25,
    height: 50,
  }
})
export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.header}>
        <IconBus name='bus-side' size={50} color='#fff' />
      </View>
    )
  }
}
