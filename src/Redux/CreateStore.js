import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import { routerMiddleware } from 'connected-react-router'
import Immutable from 'seamless-immutable'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// mount it on the Store
export default (rootReducer, rootSaga, initialState) => {
  const middlewares = [sagaMiddleware]
  const store = createStore(combineReducers(rootReducer), Immutable(initialState), applyMiddleware(...middlewares))

  sagaMiddleware.run(rootSaga)

  return store
}
