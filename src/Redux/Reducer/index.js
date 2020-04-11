import { combineReducers } from 'redux'
import Login from './Auth/AuthLogin'
import Routes from './ReducerRoutes'
import Schedules from './ReducerSchedules'


export default combineReducers({
  login: Login,
  routes: Routes,
  schedules: Schedules

})