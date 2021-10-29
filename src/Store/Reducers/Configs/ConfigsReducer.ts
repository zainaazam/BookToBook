import {FINISH_LOADING, START_LOADING} from '../../Actions/ActionTypes';
import {ActionTypes} from '../../Types';
import {ConfigsReducer} from './Configs.interface';

const initialState = {
  isLoading: false,
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
    default:
      return state;
  }
};
