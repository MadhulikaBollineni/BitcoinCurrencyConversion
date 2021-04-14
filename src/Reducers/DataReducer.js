
import { Data } from './Constants'

const initialState = {
  post:[]
}

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case Data.fetchData:
      return state
    case Data.fetchDataSuccess:
      return {
        ...state,
        posts: action.payload
      }
    default:
      return initialState
  }
}