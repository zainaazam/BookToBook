import {DrawerNavigationProp} from '@react-navigation/drawer';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import Button from '../../../Components/Button';
import CustomHeader from '../../../Components/CustomHeader';
import CustomModal from '../../../Components/CustomModal';
import TextField from '../../../Components/TextField';
import {goBack} from '../../../Navigation/RootNavigation';
import {ChangePasswordStackParamList} from '../../../Navigation/StackNavigators/DrawerStack/ChangePasswordStack';
import {DrawerStackParamList} from '../../../Navigation/StackNavigators/DrawerStack/DrawerStack';
import {MainContainer} from './styles';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../Store';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import {ConfigsReducer} from '../../../Store/Reducers/Configs/Configs.interface';
import {
  FinishLoading,
  StartLoading,
} from '../../../Store/Actions/Configs/ConfigsActions';
import {AuthReducer} from '../../../Store/Reducers/Auth/AuthReducer.interfaces';
import {UpdateAccountInputs} from '../../../Store/Types/Auth/Auth.action-types';
import {UpdateAccountAction} from '../../../Store/Actions';

type ChangePasswordScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerStackParamList, 'HomeStack'>,
  StackNavigationProp<ChangePasswordStackParamList, 'ChangePassword'>
>;

interface ChangePasswordProps {
  navigation: ChangePasswordScreenNavigationProp;
}

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const ChangePassword = ({navigation}: ChangePasswordProps) => {
  const {toggleDrawer} = navigation;
  const dispatch = useDispatch();
  const {isLoading} = useSelector<RootState>(
    state => state.ConfigsReducer,
  ) as ConfigsReducer;

  const {account} = useSelector<RootState>(
    state => state.AuthReducer,
  ) as AuthReducer;

  // console.log(compare(account.password, '12345678'));

  const handleChangePassword = (inputs: UpdateAccountInputs) => {
    dispatch(UpdateAccountAction(inputs, toggleModal));
  };

  const [showModal, setShowModal] = useState(false);

  const toggleModal = (state: boolean) => {
    setShowModal(state);
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
      onSubmit: async submittedValues => {
        // onSubmit: () => {
        const variables: UpdateAccountInputs = {
          id: account?.id,
          deleted: false,
        };
        if (submittedValues.newPassword) {
          variables.password = submittedValues.newPassword;
        }

        handleChangePassword(variables);
        Keyboard.dismiss();
        // dispatch(StartLoading());
        // setTimeout(() => {
        //   toggleModal();
        //   dispatch(FinishLoading());
        // }, 500);
      },
      validationSchema: ValidationSchema,
    });

  return (
    <DismissKeyboard>
      <MainContainer>
        <CustomHeader
          menu
          title={'Change Password'}
          rightSide="backButton"
          toggleDrawer={toggleDrawer}
        />
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
          hideModal={() => toggleModal(false)}
          onOkPress={goBack}
          message={'Your Password Has Been Successfully Changed!'}
        />
      </MainContainer>
    </DismissKeyboard>
  );
};

export default ChangePassword;
