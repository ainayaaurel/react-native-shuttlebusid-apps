import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, PricingCard, CheckBox } from 'react-native-elements'
import IconBus from 'react-native-vector-icons/MaterialCommunityIcons'
import IconSort from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Button, Header } from 'native-base'
import { connect } from 'react-redux'
import { getSchedules } from '../Redux/Actions/ActionsSchedules'

class SelectBus extends Component {
  constructor(props) {
    super(props)
    this.props.getSchedules()


    this.changeScreenToHome = () => {
      this.props.navigation.navigate('Home')
    }
    this.onChangeScreenChooseChair = () => {
      this.props.navigation.navigate('Back')
    }
  }

  componentDidMount() {
    console.log('ini data sche', this.props.schedules)
  }
  render() {
    return (

      <View>
        <View style={styles.header}>
          <IconBus name='bus-side' size={50} color='#fff' />
        </View>
        <View style={styles.headersecond}>
          <View style={styles.logoContainer}>
            <IconSort name='sort-amount-down' size={18} color='#000' style={styles.inputIcon} />
            <Text style={styles.input} > 5 Busses Found </Text>
          </View>
        </View>
        <Card
          title='Baraya Jaya'
          style={{ marginTop: 50 }}>
          <Text style={{ marginBottom: 20 }}>
            Identitas tiket, ada jam, rating, dan harga
      </Text>
          <TouchableOpacity onPress={() => this.props.getSchedules({})}>
            <CheckBox
              containerStyle={{ backgroundColor: '#fff' }}
              center
              checkedColor='green'
              title='Click Here'
              checked={this.onChangeScreenChooseChair}
            />

          </TouchableOpacity>
        </Card>
        <View>
          {this.props.schedules && this.props.schedules.map((v, i) => {
            return (
              <>
                <Text>{v.departure_at}</Text>
                <Text>{v.arrival_at}</Text>
                <Text>{v.name_agents}</Text>
                <Text>{v.time}</Text>
                <Text>{v.name}</Text>
                <Text>{v.class}</Text>
                <Text>{v.sheets}</Text>
                <Text>{v.price}</Text>
              </>
            )
          })}
        </View>
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
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  inputIcon: {
    position: 'absolute',
    top: 9,
    right: 30,
  },
  input: {
    top: 8
  },
})

const mapStateToProps = (state) => ({
  schedules: state.schedules.schedules
})

export default connect(mapStateToProps, { getSchedules })(SelectBus)