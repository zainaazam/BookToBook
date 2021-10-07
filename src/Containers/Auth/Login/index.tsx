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
  Wrapper,
} from './styles';
import {Visitor, VisitorText} from '../Welcome/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {KeyboardAvoidingView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamList} from '../../../Navigation/StackNavigators/AuthStack';
import {CompositeNavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../Navigation/RootNavigation';

const WomanWithBook = require('../../../../Assets/Images/sitting-lady.png');

export type LoginScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'DrawerStack'>,
  StackNavigationProp<AuthStackParamList, 'Login'>
>;

interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

const Login = ({navigation}: LoginProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const {navigate} = navigation;

  const navigateToVerification = () => {
    navigate('Verification');
  };

  const navigateToSignUp = () => {
    navigate('SignUp');
  };

  const navigateToHome = () => {
    navigation.navigate('DrawerStack');
  };

  return (
    <MainContainer>
      <KeyboardAvoidingView behavior="position">
        <Wrapper>
          <WomanImage source={WomanWithBook} style={styles.image} />
          <HeyText>Hey,</HeyText>
          <HopToNewBooksText>Hop to a New Book Now</HopToNewBooksText>
          <DoNotHaveAccount>
            <HaveAccount>Don't Have an Account?</HaveAccount>
            <SignUp onPress={navigateToSignUp}>
              <SignUpText>Sign Up</SignUpText>
            </SignUp>
          </DoNotHaveAccount>
          <TextField marginTop={20} placeHolder="UserName" />
          <TextField
            marginTop={20}
            placeHolder="Password"
            onPress={() => setShowPassword(!showPassword)}
            eyeIcon
            password={!showPassword}
          />
          <ForgetPassword>
            <ForgetPasswordText>Forget Password ?</ForgetPasswordText>
            <TouchableOpacity onPress={navigateToVerification}>
              <ResetPassword>Reset</ResetPassword>
            </TouchableOpacity>
          </ForgetPassword>
          <Button title={'Login'} marginTop={20} onPress={navigateToHome} />
          <Visitor onPress={navigateToHome}>
            <VisitorText>View as Visitor</VisitorText>
          </Visitor>
        </Wrapper>
      </KeyboardAvoidingView>
    </MainContainer>
  );
};

export default Login;
