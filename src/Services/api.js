/* eslint-disable import/no-anonymous-default-export */
import apisauce from 'apisauce'
import config from '../config'

const apiURL = config.apiURL

const create = (baseURL = apiURL) => {
  const apiWrapper = apisauce.create({
    baseURL: apiURL,
    timeout: 60000
  })

  const getUser = (data) => {
    const gender = data.gender
    return apiWrapper.get(`/api?results=500&gender=${gender}`)
  }

  return {
    getUser
  }
}

export default {
  create
}
