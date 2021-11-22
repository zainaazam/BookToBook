import {CREATE_ACCOUNT} from './Auth.graphql';
import {FinishLoading, StartLoading} from '../Configs/ConfigsActions';
import {AppDispatch} from '../..';
import {User} from '../../../Types';
import {Alert} from 'react-native';
import {client} from '../../../App';
import {SingUpScreenNavigationProp} from '../../../Containers/Auth/SignUp';

export const SignUpAction =
  (inputs: User, navigation: SingUpScreenNavigationProp) =>
  (dispatch: AppDispatch) => {
    dispatch(StartLoading());
    client
      .mutate({
        mutation: CREATE_ACCOUNT,
        variables: inputs,
      })
      .then(result => {
        const {data} = result;
        navigation.replace('DrawerStack');
        dispatch(FinishLoading());
      })
      .catch(error => {
        Alert.alert(error.message);
      })
      .finally(() => dispatch(FinishLoading()));
  };
