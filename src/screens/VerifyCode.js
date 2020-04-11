import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native'
import IconLock from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler'


const { width: WIDTH } = Dimensions.get('window')
export default class VerifyCode extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.logoContainer}>
          <Text style={styles.textForgot}>Verification Account</Text>
          <Text style={styles.textDesc}>Check your email to verification account and enter the code below</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder='Code'
            placeholderTextColor='rgba(255,255,255, 0.7)'
            underlineColorAndroid='transparent'
          />
        </View>
        <View style={styles.btnReset}>
          <TouchableOpacity onPress={() => alert('Verification Succes')}>
            <Text style={styles.textReset}>SEND CODE</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  logoContainer: {
    alignItems: 'center',
  },
  textForgot: {
    fontSize: 20,
    color: 'black'
  },
  textDesc: {
    fontSize: 15,
    color: '#515560',
    textAlign: 'center',
    paddingLeft: 15,
    paddingRight: 15
  },
  textInput: {
    width: WIDTH - 55,
    height: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255, 255, 255, 0.7)'
  },
  inputContainer: {
    position: 'relative',
    marginTop: 20,
  },
  inputIcon: {
    position: 'absolute',
    top: 7,
    left: 11
  },
  btnReset: {
    width: WIDTH - 55,
    height: 45,
    backgroundColor: '#58D43E',
    justifyContent: 'center',
    marginTop: 20
  },
  textReset: {
    textAlign: 'center',
    color: '#fff'
  },

})
