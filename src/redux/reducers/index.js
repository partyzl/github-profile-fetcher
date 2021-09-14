import { combineReducers } from 'redux';
import reposReducer from './reposReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers(reposReducer, userReducer);

export default rootReducer;
