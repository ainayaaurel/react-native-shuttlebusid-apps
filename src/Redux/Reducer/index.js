import { combineReducers } from 'redux'
import Login from './AuthLogin/ReducerLogin'
import Routes from './ReducerRoutes'

export default combineReducers({
  login: Login,
  routes: Routes

})