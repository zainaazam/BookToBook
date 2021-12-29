import {Game} from '../../../Types';
import {
  ADD_GAME,
  FINISH_LOADING,
  START_LOADING,
} from '../../Actions/ActionTypes';

interface StartLoading {
  type: typeof START_LOADING;
}

interface FinishLoading {
  type: typeof FINISH_LOADING;
}

interface AddGame {
  type: typeof ADD_GAME;
  payload: Game;
}

export type ConfigsActionTypes = StartLoading | FinishLoading | AddGame;
