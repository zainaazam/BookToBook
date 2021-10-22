import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import Button from '../../../Components/Button';
import CustomHeader from '../../../Components/CustomHeader';
import TextField from '../../../Components/TextField';
import {AuthStackParamList} from '../../../Navigation/StackNavigators/AuthStack';
import {MainContainer, EnterEmailText} from './styles';
import * as Yup from 'yup';
import {useFormik} from 'formik';

export type VerificationScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'Verification'
>;

interface VerificationProps {
  navigation: VerificationScreenNavigationProp;
}

const Verification = ({navigation}: VerificationProps) => {
  const {navigate} = navigation;

  const navigateToOTP = () => {
    navigate('OTP');
  };

  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email!').required('Email is required!'),
  });

  const {errors, values, touched, handleBlur, handleChange, handleSubmit} =
    useFormik({
      initialValues: {
        email: '',
      },

      onSubmit: () => {
        navigateToOTP();
      },
      validationSchema: ValidationSchema,
    });

  return (
    <MainContainer>
      <CustomHeader backButton title={'Verification'} />
      <EnterEmailText>Please Enter your Email:</EnterEmailText>
      <TextField
        value={values.email}
        error={touched.email && errors.email}
        onChange={handleChange('email') as (text: string) => void}
        onBlur={() => handleBlur('email')}
      />
      <Button
        title={'Next'}
        marginTop={60}
        onPress={handleSubmit}
      />
    </MainContainer>
  );
};

export default Verification;
