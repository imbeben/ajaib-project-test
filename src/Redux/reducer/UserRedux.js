// @flow
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  userRequest: ['data'],
  userSuccess: ['data'],
  userFailure: ['err']
})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  data: null,
  success: false,
  err: null
})

/* ------------- Reducers ------------- */
export const userRequest = (state) =>
  state.merge({ fetching: true })

export const userSuccess = (state, { data }) =>
  state.merge({
    fetching: false,
    data,
    err: null
  })

// we've had a problem fetch data
export const userFailure = (state, { err }) =>
  state.merge({
    fetching: false,
    data: null,
    err
  })

/* ------------- Hookup Reducers To Types ------------- */
export const reducer =
  createReducer(INITIAL_STATE, {
    [Types.USER_REQUEST]: userRequest,
    [Types.USER_SUCCESS]: userSuccess,
    [Types.USER_FAILURE]: userFailure

  })
