import {combineReducers} from 'redux';
import AuthReducer from './Auth/AuthReducer';
import ConfigsReducer from './Configs/ConfigsReducer';

export default combineReducers({
  AuthReducer,
  ConfigsReducer,
});
