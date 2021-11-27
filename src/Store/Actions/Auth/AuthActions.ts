import {ACCOUNT_LOGIN, CREATE_ACCOUNT} from './Auth.graphql';
import {FinishLoading, StartLoading} from '../Configs/ConfigsActions';
import {AppDispatch} from '../..';
import {Alert} from 'react-native';
import {client} from '../../../App';
import {SingUpScreenNavigationProp} from '../../../Containers/Auth/SignUp';
import {LoginScreenNavigationProp} from '../../../Containers/Auth/Login';
import {
  UserLoginInputs,
  UserSignUpInputs,
} from '../../Types/Auth/Auth.action-types';
import {LOG_OUT, SET_ACCOUNT} from '../ActionTypes';
import {User} from '../../../Types';
import {ActionTypes} from '../../Types';

export const SetAccount = (account: User): ActionTypes => ({
  type: SET_ACCOUNT,
  payload: account,
});

export const LogOut = (): ActionTypes => ({
  type: LOG_OUT,
});

export const SignUpAction =
  (inputs: UserSignUpInputs, navigation: SingUpScreenNavigationProp) =>
  (dispatch: AppDispatch) => {
    dispatch(StartLoading());
    client
      .mutate({
        mutation: CREATE_ACCOUNT,
        variables: inputs,
      })
      .then(result => {
        const {data} = result;
        dispatch(SetAccount(data.createAccount));
        navigation.replace('DrawerStack');
      })
      .catch(error => {
        Alert.alert(error.message);
      })
      .finally(() => dispatch(FinishLoading()));
  };

export const LoginAction =
  (inputs: UserLoginInputs, navigation: LoginScreenNavigationProp) =>
  (dispatch: AppDispatch) => {
    dispatch(StartLoading());
    client
      .mutate({
        mutation: ACCOUNT_LOGIN,
        variables: inputs,
      })
      .then(result => {
        const {data} = result;
        dispatch(SetAccount(data.accountLogin));
        navigation.replace('DrawerStack');
      })
      .catch(error => {
        Alert.alert(error.message);
      })
      .finally(() => dispatch(FinishLoading()));
  };
