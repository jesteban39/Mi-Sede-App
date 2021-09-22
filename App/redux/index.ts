import {
  createStore, combineReducers, applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import venuesReducer from './reducers/venues';
import aspirantReducer from './reducers/aspirant';

export default createStore(
  combineReducers({
     venuesList: venuesReducer,
     aspirant: aspirantReducer
    }),
  applyMiddleware(thunk)
);