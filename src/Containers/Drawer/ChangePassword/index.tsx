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

type ChangePasswordScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerStackParamList, 'HomeStack'>,
  StackNavigationProp<ChangePasswordStackParamList, 'ChangePassword'>
>;

interface ChangePasswordProps {
  navigation: ChangePasswordScreenNavigationProp;
}

const ChangePassword = ({navigation}: ChangePasswordProps) => {
  const {toggleDrawer} = navigation;

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
        toggleModal();
      },
      validationSchema: ValidationSchema,
    });

  return (
    <MainContainer>
      <CustomHeader
        menu
        title={'Change Password'}
        backButton
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
      />
      <TextField
        value={values.newPassword}
        error={touched.newPassword && errors.newPassword}
        onChange={handleChange('newPassword') as (text: string) => void}
        onBlur={() => handleBlur('newPassword')}
        marginTop={25}
        placeHolder={'New Password'}
        eyeIcon
      />
      <TextField
        value={values.confirmPassword}
        error={touched.confirmPassword && errors.confirmPassword}
        onChange={handleChange('confirmPassword') as (text: string) => void}
        onBlur={() => handleBlur('confirmPassword')}
        marginTop={25}
        placeHolder={'Confirm Password'}
        eyeIcon
      />
      <Button title={'Save'} marginTop={60} onPress={handleSubmit} />
      <CustomModal
        showModal={showModal}
        hideModal={toggleModal}
        onOkPress={goBack}
        message={'Your Password Has Been Successfully Changed!'}
      />
    </MainContainer>
  );
};

export default ChangePassword;
