import { combineReducers } from 'redux'
import Login from './AuthLogin/ReducerLogin'
import Routes from './ReducerRoutes'
import LogOut from './AuthLogin/ReducerLogOut'

export default combineReducers({
  login: Login,
  logout: LogOut,
  routes: Routes

})