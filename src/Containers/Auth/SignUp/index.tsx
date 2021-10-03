import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import Button from '../../../Components/Button';
import TextField from '../../../Components/TextField';
import {AuthStackParamList} from '../../../Navigation/StackNavigators/AuthStack';
import {MainContainer, Visitor, VisitorText} from '../Welcome/styles';
import {
  AlreadyHaveAccount,
  DiscoverWorldText,
  SignUpText,
  SignIn,
  SignInText,
  AlreadyHaveAccountText,
} from './styles';

export type WelcomeScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'SignUp'
>;

interface SignUpProps {
  navigation: WelcomeScreenNavigationProp;
}

const SignUp = ({navigation}: SignUpProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const {navigate} = navigation;

  const navigateToLogin = () => {
    navigate('Login');
  };

  // const navigateToSignUp = () => {
  //   navigate('SignUp');
  // };

  return (
    <MainContainer>
      <SignUpText>Sign up,</SignUpText>
      <DiscoverWorldText>Discover a New World With Us</DiscoverWorldText>
      <TextField marginTop={20} placeHolder="UserName" />
      <TextField marginTop={20} placeHolder="Email" />
      <TextField marginTop={20} placeHolder="Phone Number" number />
      <TextField
        marginTop={20}
        placeHolder="Password"
        onPress={() => setShowPassword(!showPassword)}
        eyeIcon
        password={!showPassword}
      />
      <TextField
        marginTop={20}
        placeHolder="Confirm Password"
        onPress={() => setShowPassword(!showPassword)}
        eyeIcon
        password={!showPassword}
      />
      <AlreadyHaveAccount>
        <AlreadyHaveAccountText>
          Already Have an Account?
        </AlreadyHaveAccountText>
        <SignIn onPress={navigateToLogin}>
          <SignInText>Login</SignInText>
        </SignIn>
      </AlreadyHaveAccount>
      <Button title={'Sign Up'} marginTop={20} />
      <Visitor>
        <VisitorText>View as Visitor</VisitorText>
      </Visitor>
    </MainContainer>
  );
};

export default SignUp;
