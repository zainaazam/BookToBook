import {FINISH_LOADING, START_LOADING} from '../../Actions/ActionTypes';

interface StartLoading {
  type: typeof START_LOADING;
}

interface FinishLoading {
  type: typeof FINISH_LOADING;
}

export type ConfigsActionTypes = StartLoading | FinishLoading;
