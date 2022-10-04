import { applyMiddleware, createStore } from 'redux'

import createRootReducer from '../reducers'

const enhancer = applyMiddleware()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const configureStore = (initialState: any) =>
  createStore(createRootReducer, initialState, enhancer)

export default { configureStore }
