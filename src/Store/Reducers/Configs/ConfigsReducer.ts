import {Game} from '../../../Types';
import {
  ADD_GAME,
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
  games: [{}] as Game[],
  id: 0,
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
        // games: [],
        // id: 0,
      };
    case ADD_GAME:
      return {
        ...state,
        id: state.id + 1,
        games: state.games.concat(action.payload),
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
