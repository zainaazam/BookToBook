import React, {useState} from 'react';
import Button from '../../../Components/Button';
import TextField from '../../../Components/TextField';
import {styles} from '../Welcome/styles';
import {
  ForgetPassword,
  HaveAccount,
  HeyText,
  HopToNewBooksText,
  MainContainer,
  ResetPassword,
  SignUp,
  WomanImage,
  DoNotHaveAccount,
  SignUpText,
  ForgetPasswordText,
} from './styles';
import {Visitor, VisitorText} from '../Welcome/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const WomanWithBook = require('../../../../Assets/Images/sitting-lady.png');

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <MainContainer>
      <WomanImage source={WomanWithBook} style={styles.image} />
      <HeyText>Hey,</HeyText>
      <HopToNewBooksText>Hop to a New Book Now</HopToNewBooksText>
      <DoNotHaveAccount>
        <HaveAccount>Don't Have an Account?</HaveAccount>
        <SignUp>
          <SignUpText>Sign Up</SignUpText>
        </SignUp>
      </DoNotHaveAccount>
      <TextField marginTop={20} placeHolder="UserName" width={320} />
      <TextField
        marginTop={20}
        placeHolder="Password"
        onPress={() => setShowPassword(!showPassword)}
        eyeIcon
        password={!showPassword}
        width={320}
      />
      <ForgetPassword>
        <ForgetPasswordText>Forget Password ?</ForgetPasswordText>
        <TouchableOpacity>
          <ResetPassword>Reset</ResetPassword>
        </TouchableOpacity>
      </ForgetPassword>
      <Button title={'Login'} marginTop={20} />
      <Visitor>
        <VisitorText>View as Visitor</VisitorText>
      </Visitor>
    </MainContainer>
  );
};

export default Login;
