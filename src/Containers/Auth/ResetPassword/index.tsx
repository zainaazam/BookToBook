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

export type ResetPasswordScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'ResetPassword'
>;

interface ResetPasswordProps {
  navigation: ResetPasswordScreenNavigationProp;
}

const ResetPassword = ({navigation}: ResetPasswordProps) => {
  const {navigate} = navigation;

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
      <CustomHeader title={'Reset Password'} backButton />
      <TextField
        marginTop={50}
        placeHolder={'Old Password'}
        value={values.oldPassword}
        error={touched.oldPassword && errors.oldPassword}
        onChange={handleChange('oldPassword') as (text: string) => void}
        onBlur={() => handleBlur('oldPassword')}
      />
      <TextField
        marginTop={25}
        placeHolder={'New Password'}
        value={values.newPassword}
        error={touched.newPassword && errors.newPassword}
        onChange={handleChange('newPassword') as (text: string) => void}
        onBlur={() => handleBlur('newPassword')}
      />
      <TextField
        marginTop={25}
        placeHolder={'Confirm Password'}
        value={values.confirmPassword}
        error={touched.confirmPassword && errors.confirmPassword}
        onChange={handleChange('confirmPassword') as (text: string) => void}
        onBlur={() => handleBlur('confirmPassword')}
      />
      <Button
        title={'Save'}
        marginTop={60}
        onPress={(toggleModal, handleSubmit)}
      />
      <CustomModal
        showModal={showModal}
        hideModal={toggleModal}
        onOkPress={() => navigate('Login')}
        message={'Your Password Has Been Successfully Changed!'}
      />
    </MainContainer>
  );
};

export default ResetPassword;
