// import { SearchBar } from 'react-native-elements';

// export default class App extends React.Component {
//   state = {
//     search: '',
//   };

//   updateSearch = search => {
//     this.setState({ search });
//   };

//   render() {
//     const { search } = this.state;

//     return (
//       <SearchBar
//         placeholder="Type Here..."
//         onChangeText={this.updateSearch}
//         value={search}
//       />
//     );
//   }
// }

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, Button, Header, Avatar, ListItem } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import icon from 'react-native-vector-icons/MaterialIcons'
import { isLogout } from '../Redux/Actions/Auth/AuthLogin'
import { connect } from 'react-redux'

const list = [
  {
    title: 'Top-Up',
    icon: 'payment'
  },
]

class Account extends Component {
  constructor(props) {
    super(props)
    // this.props.isLogout()
    this.changeScreenToLogin = () => {
      this.props.navigation.navigate('Login')
    }
    this.changeScreenEditProfile = () => {
      this.props.navigation.navigate('Edit Profile')
    }
    this.changeScreenTopUp = () => {
      this.props.navigation.navigate('Top Up')
    }
  }
  render() {
    console.log(this.props.logout)
    return (
      <View>
        <View>
          <Header
            containerStyle={{ backgroundColor: '#15B105', marginTop: -30 }}
            centerComponent={{ text: 'MY ACCOUNT', style: { color: '#fff' } }}
            rightComponent={{ icon: 'menu', color: '#fff' }}
          />
          <Card style={{ height: 80 }}
          >
            <Avatar
              size='large'
              rounded
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
              showEditButton
            />
            <Text style={{ position: 'absolute', marginTop: 15, paddingLeft: 100 }}>
              Dinda Ayu
          </Text>
            <Text style={{ position: 'absolute', marginTop: 35, paddingLeft: 100 }}>
              Balance : Rp
          </Text>
            <TouchableOpacity style={styles.touchedit} onPress={this.changeScreenEditProfile} >
              <Text style={styles.textEdit}>
                EDIT PROFILE
            </Text>
            </TouchableOpacity>
            {/* <Button
              // icon={<Icon name='code' color='#ffffff' />}
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 20 }}
              title='Edit Profile' /> */}
          </Card>
          <View>
            <Card>
              <TouchableOpacity onPress={this.changeScreenTopUp}>
                {
                  list.map((item, i) => (
                    <ListItem
                      containerStyle={{ backgroundColor: '#529B77' }}
                      key={i}
                      title={item.title}
                      leftIcon={{ name: item.icon }}

                      chevron
                    />
                  ))
                }
              </TouchableOpacity>
            </Card>
            <TouchableOpacity onPress={() => this.props.isLogout({})}>
              <Text>LogOut</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  touchedit: {
    marginTop: 20
  },
  textEdit: {
    color: '#569248',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

const mapStateToProps = (state) => ({
  logout: state.login.sudahLogin
})

export default connect(mapStateToProps, { isLogout })(Account)