import { combineReducers } from 'redux';
import { registrationReducer } from './pageReducers/registrationReducer';
import { loginReducer } from './pageReducers/loginReducer';
import { homeReducer } from './pageReducers/homeReducer';

export default combineReducers({
	registrationReducer,
	loginReducer,
	homeReducer
});