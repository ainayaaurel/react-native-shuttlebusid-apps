import config from '../../utils/config'
import axios from 'axios'

export const getSchedules = () => async dispatch => {
  try {
    const res = await axios.get(config.APP_BACKEND.concat('schedules'))
    console.log('ini schedules', res)
    if (res.data.data) {
      dispatch({
        type: 'GET_SCHEDULES',
        payload: res.data.data
      })
    } else {
      console.log('Data tidak tersedia')
    }
  } catch (err) {
    console.log(error)
  }
}