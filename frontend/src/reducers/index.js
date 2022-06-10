import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import listingsReducer from './listingsReducer';
import reservationsReducer from './reservationsReducer';


export default combineReducers({
  usersReducer: usersReducer,
  listingsReducer: listingsReducer,
  reservationsReducer: reservationsReducer
})
