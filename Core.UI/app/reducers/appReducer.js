import { combineReducers } from 'redux';
import { registrationReducer } from './pageReducers/registrationReducer';
import { loginReducer } from './pageReducers/loginReducer';

export default combineReducers({
	registrationReducer,
	counter
});