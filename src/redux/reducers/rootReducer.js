import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import favouriteReducer from './favouriteReducer';

export default combineReducers({ authReducer, projectReducer, favouriteReducer });
