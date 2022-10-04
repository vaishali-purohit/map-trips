import { applyMiddleware, compose, createStore } from 'redux'

import { createLogger } from 'redux-logger'
import createRootReducer from '../reducers'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const configureStore = (initialState: any) => {
  const middleware = []
  const enhancers = []

  const logger = createLogger({
    level: 'info',
    diff: true,
    collapsed: true,
  })

  if (process.env.NODE_ENV !== 'test') {
    middleware.push(logger)
  }

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  enhancers.push(applyMiddleware(...middleware))
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const enhancer: any = composeEnhancers(...enhancers)

  const store = createStore(createRootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      store.replaceReducer(require('../reducers').default),
    )
  }

  return store
}

export default { configureStore }
