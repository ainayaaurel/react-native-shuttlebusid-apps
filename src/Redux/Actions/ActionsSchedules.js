import config from '../../utils/config'
import axios from 'axios'

export const getSchedules = (departure_at) => async dispatch => {
  try {
    query = `schedules?search[value]=${departure_at}`
    console.log('ini query', query)
    const res = await axios.get(config.APP_BACKEND.concat(query))
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