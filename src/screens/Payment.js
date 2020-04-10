import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { ListItem, Overlay } from 'react-native-elements'

const list = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
]



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

        <Overlay
          isVisible={this.state.isVisible}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          overlayBackgroundColor="red"
          width="auto"
          height="auto"
        >
          <Text>Hello from Overlay!</Text>
        </Overlay>;

        <Overlay
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}
        >
          <Text>Hello from Overlay!</Text>
        </Overlay>;
      </View>
    )
  }
}
