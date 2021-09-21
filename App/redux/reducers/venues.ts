import { } from '../constants'
import { UPDATE_VENUES_LIST } from '../constants'
import { item } from '../../@types'

const initialState: item[] = []

export default function venuesReducer(
  state = initialState,
  action: { type: string, payload: item[] }
) {
  switch (action.type) {
    case UPDATE_VENUES_LIST:
      return [...action.payload]
    default:
      return state;
  }
}

