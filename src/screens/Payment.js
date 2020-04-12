import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { ListItem, Overlay } from 'react-native-elements'

export default class SelectaChair extends Component {
  constructor(props) {
    super(props)
    this.state
  }
  render() {
    return (
      <View>
        <View>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon }}
                bottomDivider
                chevron
              />
            ))
          }
        </View>
      </View>
    )
  }
}
