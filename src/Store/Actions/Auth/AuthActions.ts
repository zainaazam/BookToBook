import {
  ACCOUNT_LOGIN,
  CREATE_ACCOUNT,
  FORGET_PASSWORD,
  RESET_PASSWORD,
  UPDATE_ACCOUNT,
  VERIFY_CODE,
} from './Auth.graphql';
import {FinishLoading, StartLoading} from '../Configs/ConfigsActions';
import {AppDispatch, store} from '../..';
import {Alert} from 'react-native';
import {client} from '../../../App';
import {SingUpScreenNavigationProp} from '../../../Containers/Auth/SignUp';
import {LoginScreenNavigationProp} from '../../../Containers/Auth/Login';
import {
  ForgetPasswordInputs,
  ResetPasswordInputs,
  UpdateAccountInputs,
  UserLoginInputs,
  UserSignUpInputs,
  VerifyCodeInputs,
} from '../../Types/Auth/Auth.action-types';
import {LOG_OUT, SET_ACCOUNT} from '../ActionTypes';
import {User} from '../../../Types';
import {ActionTypes} from '../../Types';
import {VerificationScreenNavigationProp} from '../../../Containers/Auth/Verification';
import {OTPScreenNavigationProp} from '../../../Containers/Auth/OTP';

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

export const ForgetPasswordAction =
  (
    inputs: ForgetPasswordInputs,
    navigation: VerificationScreenNavigationProp,
  ) =>
  (dispatch: AppDispatch) => {
    dispatch(StartLoading());
    client
      .mutate({
        mutation: FORGET_PASSWORD,
        variables: inputs,
      })
      .then(({data}) => {
        if (data?.forgotPassword) {
          navigation.navigate('OTP', {email: inputs.phoneEmailOrUsername});
        } else {
          Alert.alert('Please Enter A Valid Email');
        }
      })
      .catch(error => {
        Alert.alert(error.message);
      })
      .finally(() => dispatch(FinishLoading()));
  };

export const VerifyCodeAction =
  (inputs: VerifyCodeInputs, navigation: OTPScreenNavigationProp) =>
  (dispatch: AppDispatch) => {
    dispatch(StartLoading());
    client
      .mutate({
        mutation: VERIFY_CODE,
        variables: inputs,
      })
      .then(({data}) => {
        navigation.navigate('ResetPassword', {account_id: data.verifyCode});
      })
      .catch(error => {
        Alert.alert(error.message);
      })
      .finally(() => dispatch(FinishLoading()));
  };

export const ResetPasswordAction =
  (inputs: ResetPasswordInputs, toggleModal: (state: boolean) => void) =>
  (dispatch: AppDispatch) => {
    dispatch(StartLoading());
    client
      .mutate({
        mutation: RESET_PASSWORD,
        variables: inputs,
      })
      .then(() => {
        toggleModal(true);
      })
      .catch(error => {
        Alert.alert(error.message);
      })
      .finally(() => dispatch(FinishLoading()));
  }; //TODO maybe when making book to book make it navigate to login using login action with the data i get from .then

export const UpdateAccountAction =
  (inputs: UpdateAccountInputs, toggleModal: (state: boolean) => void) =>
  (dispatch: AppDispatch) => {
    dispatch(StartLoading());
    client
      .mutate({
        mutation: UPDATE_ACCOUNT,
        variables: inputs,
      })
      .then(result => {
        const {data} = result;
        console.log(data.updateAccount);
        dispatch(
          SetAccount({
            ...store.getState().AuthReducer.account,
            ...inputs,
          }),
        );
        toggleModal(true);
      })
      .catch(error => {
        Alert.alert(error.message);
      })
      .finally(() => dispatch(FinishLoading()));
  };
