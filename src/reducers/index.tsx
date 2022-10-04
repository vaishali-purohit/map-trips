import { combineReducers } from 'redux'
import detail from './detail.reducer'
import drawer from './drawer.reducer'

const appReducer = combineReducers({
  drawer,
  detail,
})

export default appReducer
