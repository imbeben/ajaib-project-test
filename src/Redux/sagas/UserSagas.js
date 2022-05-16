import { take, call, put, fork } from 'redux-saga/effects'
import { END } from 'redux-saga'
import UserActions, { UserTypes } from '../reducer/UserRedux'

// action taker
export const getUser = function * (api) {
  let action = yield take(UserTypes.USER_REQUEST)
  while (action !== END) {
    yield fork(getUserAPI, api, action)
    action = yield take(UserTypes.USER_REQUEST)
  }
}

// attempts to fetch product
export function * getUserAPI (api, { data }) {
  try {
    // get lower and upper price bound
    const response = yield call(api.getUser, data)
    if (response.ok) {
      yield put(UserActions.userSuccess(response.data.results))
    } else {
      yield put(UserActions.userFailure('Terjadi kesalahan. Silahkan ulangi beberapa saat lagi'))
    }
  } catch (e) {
    yield put(UserActions.userFailure('Terjadi kesalahan. Silahkan ulangi beberapa saat lagi'))
  }
}
