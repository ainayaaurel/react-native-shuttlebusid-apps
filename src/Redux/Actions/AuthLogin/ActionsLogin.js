import config from '../../../utils/config'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'


export const Login = (data) => async dispatch => {
  try {
    const login = await axios.post(config.APP_BACKEND.concat('auth/login'), data)
    if (login.data.token === true) {
      AsyncStorage.setItem('token_user', login.data.token === true)
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