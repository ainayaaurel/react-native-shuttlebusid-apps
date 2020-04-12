import React, { Component } from 'react'
import { Header } from 'react-native-elements'
import { View, Text, StyleSheet } from 'react-native'
import IconBarcode from 'react-native-vector-icons/FontAwesome'

export default class MyOrder extends Component {
  render() {
    return (
      <View>
        <Header
          containerStyle={localStyle.headerContainer}
          rightComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY BOOKING', style: { color: '#fff' } }}
        />
        <View style={localStyle.headersecond}>
          <View style={localStyle.box1}>
            <Text style={localStyle.input}> CODE BOOKING : IH45ZQ </Text>
            <IconBarcode name="barcode" size={70} color="black" />
          </View>
        </View>
      </View>
    )
  }
}

const localStyle = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#15B105',
    justifyContent: 'space-around',
    marginTop: -20,
    height: 80,
  },
  headersecond: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 25,
    height: 100,
    marginTop: 10,
  },
  input: {
    top: 8,
    fontSize: 13,
    fontWeight: 'bold',
    color: 'grey',
    marginBottom: 5,
  },
  box1: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 90,
  },
});

{/* export default class History extends Component {
  render() {
    return (
      <View>
        {/* <Header
          containerStyle={{ backgroundColor: '#15B105', marginTop: -30 }}
          centerComponent={{ text: 'MY ORDER', fontWeight: 'bold', style: { color: '#fff' } }}
          leftComponent={<IconBus name='bus' color='#fff' size={30} />}
          rightComponent={<Icondots name='dots-vertical' color='#fff' size={30} />}
        /> */}


//       </View >
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     position: 'relative',
//     flex: 1,
//     // height: 80,
//     backgroundColor: 'grey'
//   }
// }) * /}

{/* <View style={{ flex: 1 }}>
          <Text>Departure data</Text>
          <Text>Departure : </Text>
          <Text>Arrival : </Text>
          <Text>Tanggal : </Text>
          <Text>Harga Tiket</Text>
          <Text>Harga :</Text>
          <Text>Total :</Text>
        </View>

        <View style={{ flex: 1, backgroundColor: 'green' }}>
          <Text>Test</Text>
        </View> */}
