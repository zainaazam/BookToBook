import React from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../Store';
import {ConfigsReducer} from '../../../Store/Reducers/Configs/Configs.interface';
import {LoginAction} from '../../../Store/Actions/Auth/AuthActions';
import {UserLoginInputs} from '../../../Store/Types/Auth/Auth.action-types';

const WomanWithBook = require('../../../../Assets/Images/sitting-lady.png');

export type LoginScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'DrawerStack'>,
  StackNavigationProp<AuthStackParamList, 'Login'>
>;

interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

const Login = ({navigation}: LoginProps) => {
  const {navigate} = navigation;
  const dispatch = useDispatch();
  const {isLoading} = useSelector<RootState>(
    state => state.ConfigsReducer,
  ) as ConfigsReducer;

  const navigateToVerification = () => {
    navigate('Verification');
  };

  const navigateToSignUp = () => {
    navigate('SignUp');
  };

  const navigateToHome = () => {
    navigation.navigate('DrawerStack');
  };

  const handleLogin = (inputs: UserLoginInputs) => {
    dispatch(LoginAction(inputs, navigation));
  };

  const ValidationSchema = Yup.object().shape({
    emailOrPhone: Yup.string()
      .trim()
      .required('Please enter your Email or Phone Number!'),
    password: Yup.string().trim().required('Please enter your password!'),
  });

  const {errors, values, touched, handleBlur, handleChange, handleSubmit} =
    useFormik({
      initialValues: {
        emailOrPhone: '',
        password: '',
      },
      onSubmit: async submittedValues => {
        handleLogin({
          emailOrPhone: submittedValues.emailOrPhone.trim(),
          password: submittedValues.password.trim(),
        });
        // onSubmit: () => {
        //   dispatch(StartLoading());
        //   setTimeout(() => {
        //     navigateToHome();
        //     dispatch(FinishLoading());
        //   }, 500);
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
            value={values.emailOrPhone}
            error={touched.emailOrPhone && errors.emailOrPhone}
            onChange={handleChange('emailOrPhone') as (text: string) => void}
            onBlur={() => handleBlur('emailOrPhone')}
            marginTop={15}
            placeHolder="Email or Phone Number"
          />
          <TextField
            value={values.password}
            error={touched.password && errors.password}
            onChange={handleChange('password') as (text: string) => void}
            onBlur={() => handleBlur('password')}
            marginTop={15}
            placeHolder="Password"
            eyeIcon
            password
          />
          <ForgetPassword>
            <ForgetPasswordText>Forget Password?</ForgetPasswordText>
            <TouchableOpacity onPress={navigateToVerification}>
              <ResetPassword>Reset</ResetPassword>
            </TouchableOpacity>
          </ForgetPassword>
          <Button
            title={'Login'}
            marginTop={20}
            onPress={handleSubmit}
            loading={isLoading}
          />
          <Visitor onPress={navigateToHome}>
            <VisitorText>View as Visitor</VisitorText>
          </Visitor>
        </Wrapper>
      </KeyboardAvoidingView>
    </MainContainer>
  );
};

export default Login;
