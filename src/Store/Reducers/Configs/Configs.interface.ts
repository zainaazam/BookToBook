import {Game} from '../../../Types';

export interface ConfigsReducer {
  isLoading: boolean;
  isLoggedIn: boolean;
  games: Game[];
  id: number;
}
