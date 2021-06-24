import { combineReducers } from 'redux';
import reducer from './reducer/reducer';

const rootReducer = combineReducers({ users: reducer });

export default rootReducer;
