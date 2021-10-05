import React from 'react';
import Button from '../../../Components/Button';
import CustomHeader from '../../../Components/CustomHeader';
import TextField from '../../../Components/TextField';
import {MainContainer, EnterEmailText} from './styles';

const Verification = () => {
  return (
    <MainContainer>
      <CustomHeader backButton title={'Verification'} />
      <EnterEmailText>Please Enter your Email:</EnterEmailText>
      <TextField />
      <Button title={'Next'} marginTop={60} />
    </MainContainer>
  );
};

export default Verification;
