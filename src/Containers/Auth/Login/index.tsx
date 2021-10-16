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
import * as Yup from 'yup';
import {useFormik} from 'formik';

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

  const ValidationSchema = Yup.object().shape({
    username: Yup.string().required('Please enter your username!'),
    password: Yup.string().required('Please enter your password!'),
  });

  const {errors, values, touched, handleBlur, handleChange, handleSubmit} =
    useFormik({
      initialValues: {
        username: '',
        password: '',
      },
      // onSubmit: async submittedValues => {
      onSubmit: () => {
        navigateToHome();
      },
      validationSchema: ValidationSchema,
    });

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
          <TextField
            value={values.username}
            error={touched.username && errors.username}
            onChange={handleChange('username') as (text: string) => void}
            onBlur={() => handleBlur('username')}
            marginTop={15}
            placeHolder="Username"
          />
          <TextField
            value={values.password}
            error={touched.password && errors.password}
            onChange={handleChange('password') as (text: string) => void}
            onBlur={() => handleBlur('password')}
            marginTop={15}
            placeHolder="Password"
            onPress={() => setShowPassword(!showPassword)}
            eyeIcon
            password={!showPassword}
          />
          <ForgetPassword>
            <ForgetPasswordText>Forget Password?</ForgetPasswordText>
            <TouchableOpacity onPress={navigateToVerification}>
              <ResetPassword>Reset</ResetPassword>
            </TouchableOpacity>
          </ForgetPassword>
          <Button title={'Login'} marginTop={20} onPress={handleSubmit} />
          <Visitor onPress={navigateToHome}>
            <VisitorText>View as Visitor</VisitorText>
          </Visitor>
        </Wrapper>
      </KeyboardAvoidingView>
    </MainContainer>
  );
};

export default Login;
