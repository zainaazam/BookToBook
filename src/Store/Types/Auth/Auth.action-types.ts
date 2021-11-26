import {User} from '../../../Types';
import {SET_ACCOUNT} from '../../Actions/ActionTypes';

interface SetAccount {
  type: typeof SET_ACCOUNT;
  payload: User;
}

export interface UserSignUpInputs {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface UserLoginInputs {
  emailOrPhone: string;
  password: string;
}

export type AuthActionTypes = SetAccount;
