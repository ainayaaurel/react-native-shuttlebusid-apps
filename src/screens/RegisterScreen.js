import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class RegisterScreen extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <Text style={styles.title}>Create your account</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    color: '#fff'
  },
  title: {
    fontSize: 20,
    color: 'black'

  }
})
