import {Game} from '../../../Types';
import {ActionTypes} from '../../Types';
import {ADD_GAME, FINISH_LOADING, START_LOADING} from '../ActionTypes';

export const StartLoading = (): ActionTypes => ({
  type: START_LOADING,
});

export const FinishLoading = (): ActionTypes => ({
  type: FINISH_LOADING,
});

export const AddNewGame = (game: Game): ActionTypes => ({
  type: ADD_GAME,
  payload: game,
});
