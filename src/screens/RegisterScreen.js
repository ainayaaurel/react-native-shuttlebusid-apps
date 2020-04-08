import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const { width: WIDTH } = Dimensions.get('window')
export default class RegisterScreen extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <View>
          <Text style={styles.title}>Create your account</Text>
        </View>
        <View>
          <TextInput
            style={styles.input} placeholder='Your name'
          />
        </View>
        <View>
          <TextInput
            style={styles.input} placeholder='Your gender'
          />
        </View>
        <View>
          <TextInput
            style={styles.input} placeholder='Your address'
          />
        </View>
        <View>
          <TextInput
            style={styles.input} placeholder='Your phone'
          />
        </View>
        <View>
          <TextInput
            style={styles.input} placeholder='Your email'
          />
        </View>
        <TouchableOpacity style={styles.btnSignUp}>
          <Text style={styles.textSignUp}>Sign Up</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={styles.login}>
            <Text style={styles.textLogIn}>Already have an account yet? Log In</Text>
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
    color: '#fff'
  },
  title: {
    fontSize: 20,
    color: 'black',
    marginBottom: 20
  },
  input: {
    width: WIDTH - 65,
    height: 45,
    fontSize: 16,
    // backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'black',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    marginBottom: 15
  },
  btnSignUp: {
    width: WIDTH - 200,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#15B105',
    justifyContent: 'center',
    paddingBottom: 5
  },
  textSignUp: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textLogIn: {
    fontSize: 12,
    textDecorationLine: 'underline'
  },
  login: {
    marginTop: 20
  }
})
