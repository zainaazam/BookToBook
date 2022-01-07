import {Upload, User} from '../../../Types';
import {LOG_OUT, SET_ACCOUNT} from '../../Actions/ActionTypes';

interface SetAccount {
  type: typeof SET_ACCOUNT;
  payload: User;
}

interface LogOut {
  type: typeof LOG_OUT;
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

export interface ForgetPasswordInputs {
  phoneEmailOrUsername: string;
}

export interface VerifyCodeInputs {
  phoneEmailOrUsername: string;
  code: string;
}

export interface ResetPasswordInputs {
  password: string;
  account_id: string;
}

export interface UpdateAccountInputs {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  photo?: string | Upload | null;
  id: string;
  deleted: boolean;
}

export type AuthActionTypes = SetAccount | LogOut;
