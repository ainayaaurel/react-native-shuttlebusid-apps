import React, { Component } from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Button, View } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5'
import IconPass from 'react-native-vector-icons/Feather'
import IconEye from 'react-native-vector-icons/Feather'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const { width: WIDTH } = Dimensions.get('window')

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.changeScreen = () => {
      this.props.navigation.navigate('Register')
    }
  }
  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.logoContainer}>
          <Icon name='user-circle' size={100} color='#fff' style={styles.logoicon} />
          <Text style={styles.logotext}>SHUTTLEBUS-ID</Text>
        </View>
        <View style={styles.inputContainer}>
          <IconPass name='user' size={28} color='rgba(255,255,255, 0.7)'
            style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder='Username'
            placeholderTextColor='rgba(255,255,255, 0.7)'
            underlineColorAndroid='transparent'
          />
        </View>
        <View style={styles.inputContainer}>
          <IconPass name='lock' size={28} color='rgba(255,255,255, 0.7)' style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder='Password'
            // secureTextEntry='true'
            placeholderTextColor='rgba(255,255,255, 0.7)'
            underlineColorAndroid='transparent'
          />
          {/* <TouchableOpacity style={styles.btnEye}>
            <IconEye name='eye-off' size={20} color='rgba(255,255,255, 0.7)' />
          </TouchableOpacity> */}
        </View>
        <View style={styles.forgot}>
          <TouchableOpacity>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.textLogin}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.createacc}>
          <TouchableOpacity onPress={this.changeScreen}>
            <Text style={styles.textCreate}>Don't have account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#15B105',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,

  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255, 255, 255, 0.7)'
  },
  inputContainer: {
    position: 'relative',
    marginTop: 10,
  },
  inputIcon: {
    position: 'absolute',
    top: 7,
    left: 11
  },
  logoinput: {
    position: 'absolute',
    top: 9,
    left: 37
  },
  logoicon: {
    alignItems: 'center',
    height: 100,
    textAlign: 'center',
    // marginBottom: 20

  },
  logotext: {
    color: 'white',
    fontSize: 20,
    marginTop: 15,
  },
  btnEye: {
    // position: 'absolute',
    // top: 9,
    // right: 37
    marginLeft: 250,
    // marginTop: -50,
    // zIndex: 99
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginTop: 30
  },
  textLogin: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  createacc: {
    marginTop: 20
  },
  textCreate: {
    fontSize: 13,
    textDecorationLine: 'underline'
  },
  forgot: {
    marginTop: 10,
    marginLeft: '45%'
  }

})