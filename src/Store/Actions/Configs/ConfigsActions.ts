import {ActionTypes} from '../../Types';
import {FINISH_LOADING, START_LOADING} from '../ActionTypes';

export const StartLoading = (): ActionTypes => ({
  type: START_LOADING,
});

export const FinishLoading = (): ActionTypes => ({
  type: FINISH_LOADING,
});
