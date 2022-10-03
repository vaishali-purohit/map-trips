import { combineReducers } from 'redux'
import drawer from './drawer.reducer'

const appReducer = combineReducers({
  drawer,
})

export default appReducer
