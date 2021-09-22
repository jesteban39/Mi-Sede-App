import { } from '../constants'
import { UPDATE_ASPIRANT } from '../constants'
import { aspirant } from '../../@types'

const initialState: aspirant = {
  id: '',
  cc: '',
  name:  'User',
  email:  '',
  score: 0.0
}

export default function aspirantReducer(
  state = initialState,
  action: { type: string, payload: aspirant }
) {
  switch (action.type) {
    case UPDATE_ASPIRANT:
      return {...action.payload}
    default:
      return state;
  }
}

