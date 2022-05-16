import { fork, all } from 'redux-saga/effects'
import { getUser } from './UserSagas'
import API from '../../Services/api'

const api = API.create()

function * userSagas () {
  yield all([
    fork(getUser, api)
  ])
}

export default function * root () {
  yield all([
    fork(userSagas)
  ])
}
