import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'
import IconBus from 'react-native-vector-icons/MaterialCommunityIcons'

export default class SelectBus extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <IconBus name='bus-side' size={50} color='#fff' />
        </View>
        <View style={styles.headersecond}>
          <Text> 5 Busses Found </Text>
        </View>
        <Card
          title='HELLO WORLD'
          style={{ marginTop: 50 }}>
          <Text style={{ marginBottom: 20 }}>
            The idea with React Native Elements is more about component structure than actual design.
      </Text>
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#15B105',
    justifyContent: 'center',
    paddingLeft: 25,
    height: 50
  },
  headersecond: {
    backgroundColor: '#DCDCDC',
    justifyContent: 'center',
    paddingLeft: 25,
    height: 40,
    borderBottomWidth: 0.3,

  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  }
})