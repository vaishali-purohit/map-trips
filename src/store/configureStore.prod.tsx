import { applyMiddleware, createStore } from 'redux'

import createRootReducer from '../reducers'

const enhancer = applyMiddleware()

const configureStore = (initialState: { drawer?: { tripList: { travelFromDate: number; travelToDate: number; source: string; destination: string; tripType: string; latitude: number; longitude: number; description: string; imageURL: string }[]; type: string } | undefined } | undefined) =>
  createStore(createRootReducer, initialState, enhancer)

export default { configureStore }
