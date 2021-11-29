import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import Button from '../../../Components/Button';
import CustomHeader from '../../../Components/CustomHeader';
import CustomModal from '../../../Components/CustomModal';
import TextField from '../../../Components/TextField';
import {AuthStackParamList} from '../../../Navigation/StackNavigators/AuthStack';
import {MainContainer} from './styles';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../Store';
import {ConfigsReducer} from '../../../Store/Reducers/Configs/Configs.interface';
import {
  FinishLoading,
  StartLoading,
} from '../../../Store/Actions/Configs/ConfigsActions';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import {RouteProp} from '@react-navigation/native';

export type ResetPasswordScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'ResetPassword'
>;

type ResetPasswordRouteProp = RouteProp<AuthStackParamList, 'ResetPassword'>;

interface ResetPasswordProps {
  navigation: ResetPasswordScreenNavigationProp;
  route: ResetPasswordRouteProp;
}

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const ResetPassword = ({navigation, route}: ResetPasswordProps) => {
  const {navigate} = navigation;
  const dispatch = useDispatch();
  const {account_id} = route.params;
  const {isLoading} = useSelector<RootState>(
    state => state.ConfigsReducer,
  ) as ConfigsReducer;

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const ValidationSchema = Yup.object().shape({
    oldPassword: Yup.string()
      .trim()
      .required('Please enter your old password!'),
    newPassword: Yup.string()
      .trim()
      .min(8, 'Password is too short!')
      .required('Please enter your new password!'),
    confirmPassword: Yup.string().equals(
      [Yup.ref('newPassword'), null],
      'Password does not match!',
    ),
  });

  const {errors, values, touched, handleBlur, handleChange, handleSubmit} =
    useFormik({
      initialValues: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      },
      // onSubmit: async submittedValues => {
      onSubmit: () => {
        Keyboard.dismiss();
        dispatch(StartLoading());
        setTimeout(() => {
          toggleModal();
          dispatch(FinishLoading());
        }, 500);
      },
      validationSchema: ValidationSchema,
    });

  return (
    <DismissKeyboard>
      <MainContainer>
        <CustomHeader title={'Reset Password'} rightSide="backButton" />
        <TextField
          value={values.oldPassword}
          error={touched.oldPassword && errors.oldPassword}
          onChange={handleChange('oldPassword') as (text: string) => void}
          onBlur={() => handleBlur('oldPassword')}
          marginTop={50}
          placeHolder={'Old Password'}
          eyeIcon
          password
        />
        <TextField
          value={values.newPassword}
          error={touched.newPassword && errors.newPassword}
          onChange={handleChange('newPassword') as (text: string) => void}
          onBlur={() => handleBlur('newPassword')}
          marginTop={25}
          placeHolder={'New Password'}
          eyeIcon
          password
        />
        <TextField
          value={values.confirmPassword}
          error={touched.confirmPassword && errors.confirmPassword}
          onChange={handleChange('confirmPassword') as (text: string) => void}
          onBlur={() => handleBlur('confirmPassword')}
          marginTop={25}
          placeHolder={'Confirm Password'}
          eyeIcon
          password
        />
        <Button
          title={'Save'}
          marginTop={60}
          onPress={handleSubmit}
          loading={isLoading}
        />
        <CustomModal
          showModal={showModal}
          hideModal={toggleModal}
          onOkPress={() => navigate('Login')}
          message={'Your Password Has Been Successfully Changed!'}
        />
      </MainContainer>
    </DismissKeyboard>
  );
};

export default ResetPassword;
