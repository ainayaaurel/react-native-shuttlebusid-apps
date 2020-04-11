import config from '../../utils/config'
import axios from 'axios'

export const getRoutes = () => async dispatch => {
  try {
    const res = await axios.get(config.APP_BACKEND.concat('routes'))

    console.log('ini data baruuuu', routeData)
    if (res.data.data) {
      dispatch({
        type: 'GET_ROUTES',
        payload: res.data.data
      })
    } else {
      console.log('data tidak ada')
    }
  } catch (err) {
    console.log(err)
  }
}