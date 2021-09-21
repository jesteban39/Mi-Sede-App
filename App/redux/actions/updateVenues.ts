import axios from 'axios'
import config from '../../../config.json'
//import { API_BASE, API_PORT } from '@env';
import { UPDATE_VENUES_LIST } from '../constants'

export default function updateVenues(jobCode: number){
  return async (dispatch: Function) => {
    //const data = await axios.get(`${API_BASE}:${API_PORT}/${jobCode}`)
    //console.log(config.API_BASE, API_PORT)
    return dispatch({
      type: UPDATE_VENUES_LIST,
      payload: [
        {
          id: '28ba',
          town: 'Heliconia',
          office: 2,
          appellation: 'civil Municipal',
          vacancies: 2,
          topScore: 45.3
        },
        {
          id: '29bc',
          town: 'Dnvigado',
          office: 5,
          appellation: 'Pomiscuo municipal',
          vacancies: 2,
          topScore: 49.3
        }
      ]
    })
  }

}