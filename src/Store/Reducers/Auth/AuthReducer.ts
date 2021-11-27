import {User} from '../../../Types';
import {LOG_OUT, SET_ACCOUNT} from '../../Actions/ActionTypes';
import {ActionTypes} from '../../Types';
import {AuthReducer} from './AuthReducer.interfaces';

const initialState = {
  account: {} as User,
};

export default (state = initialState, action: ActionTypes): AuthReducer => {
  switch (action.type) {
    case SET_ACCOUNT:
      return {
        ...state,
        account: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};
