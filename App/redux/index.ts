import {
  createStore, combineReducers, applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import venuesReducer from './reducers/venues';

export default createStore(
  combineReducers({ venuesList: venuesReducer }),
  applyMiddleware(thunk)
);