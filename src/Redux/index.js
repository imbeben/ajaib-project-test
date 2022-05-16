import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { seamlessImmutableReconciler } from 'redux-persist-seamless-immutable'
import rootSaga from './sagas'
import rootReducer from './reducer'
const sagaMiddleware = createSagaMiddleware()
const persistConfig = {
  key: 'ruparupa-3.0-003',
  storage: require('redux-persist/lib/storage').default,
  stateReconciler: seamlessImmutableReconciler
}
let store = ''
store = createStore(persistReducer(persistConfig, rootReducer), composeWithDevTools(
  applyMiddleware(sagaMiddleware)))

store.__PERSISTOR = persistStore(store)
store.sagaTask = sagaMiddleware.run(rootSaga)

export default store
