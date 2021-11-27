import {
  FINISH_LOADING,
  LOG_OUT,
  SET_ACCOUNT,
  START_LOADING,
} from '../../Actions/ActionTypes';
import {ActionTypes} from '../../Types';
import {ConfigsReducer} from './Configs.interface';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
};

export default (state = initialState, action: ActionTypes): ConfigsReducer => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FINISH_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case SET_ACCOUNT:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
