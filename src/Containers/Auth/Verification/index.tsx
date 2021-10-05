import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import Button from '../../../Components/Button';
import CustomHeader from '../../../Components/CustomHeader';
import TextField from '../../../Components/TextField';
import {AuthStackParamList} from '../../../Navigation/StackNavigators/AuthStack';
import {MainContainer, EnterEmailText} from './styles';

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

  return (
    <MainContainer>
      <CustomHeader backButton title={'Verification'} />
      <EnterEmailText>Please Enter your Email:</EnterEmailText>
      <TextField />
      <Button title={'Next'} marginTop={60} onPress={navigateToOTP} />
    </MainContainer>
  );
};

export default Verification;
