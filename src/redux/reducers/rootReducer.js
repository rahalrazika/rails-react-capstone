import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import favourites from '../actions/favourite';

export default combineReducers({ authReducer, projectReducer, favourites });
