import configureStoreDev from './configureStore.dev'
import configureStoreProd from './configureStore.prod'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectedConfigureStore: any =
  process.env.NODE_ENV === 'development'
    ? configureStoreDev
    : configureStoreProd

export const { configureStore } = selectedConfigureStore

export const { history } = selectedConfigureStore
