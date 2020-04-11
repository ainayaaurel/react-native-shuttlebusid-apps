import config from '../../../utils/config'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import { ToastAndroid } from 'react-native'


export const isLogin = (data) => async dispatch => {
  try {
    const login = await axios.post(config.APP_BACKEND.concat('auth/login'), data)
    console.log('ini login', login.data.token)
    if (login.data.token) {
      AsyncStorage.setItem('token_user', login.data.token)
      dispatch({
        type: 'IS_LOGIN',
        payload: login.data
      })
    } else {
      ToastAndroid.show('Wrong Username or Password', ToastAndroid.SHORT)
    }
  } catch (error) {
    console.log(error)
  }
}


export const isLogout = (payload) => ({
  type: 'IS_LOGOUT'
})
