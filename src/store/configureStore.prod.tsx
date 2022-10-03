import { applyMiddleware, createStore } from 'redux'

import createRootReducer from '../reducers'

const enhancer = applyMiddleware()

const configureStore = (initialState: { drawer?: { open: boolean; position: string; noOverlay: boolean; } | undefined } | undefined) =>
  createStore(createRootReducer, initialState, enhancer)

export default { configureStore }
