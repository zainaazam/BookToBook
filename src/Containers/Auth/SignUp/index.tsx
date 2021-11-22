import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import Button from '../../../Components/Button';
import TextField from '../../../Components/TextField';
import {RootStackParamList} from '../../../Navigation/RootNavigation';
import {AuthStackParamList} from '../../../Navigation/StackNavigators/AuthStack';
import {Visitor, VisitorText} from '../Welcome/styles';
import {MainContainer, Wrapper} from '../Login/styles';
import {
  AlreadyHaveAccount,
  DiscoverWorldText,
  SignUpText,
  SignIn,
  SignInText,
  AlreadyHaveAccountText,
} from './styles';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {Alert, KeyboardAvoidingView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../Store';
import {ConfigsReducer} from '../../../Store/Reducers/Configs/Configs.interface';
import {
  FinishLoading,
  StartLoading,
} from '../../../Store/Actions/Configs/ConfigsActions';
import {User} from '../../../Types';
import {SignUpAction} from '../../../Store/Actions/Auth/AuthActions';

export type SingUpScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'DrawerStack'>,
  StackNavigationProp<AuthStackParamList, 'SignUp'>
>;

interface SignUpProps {
  navigation: SingUpScreenNavigationProp;
}

const SignUp = ({navigation}: SignUpProps) => {
  const {navigate} = navigation;
  const dispatch = useDispatch();
  const {isLoading} = useSelector<RootState>(
    state => state.ConfigsReducer,
  ) as ConfigsReducer;

  const navigateToLogin = () => {
    dispatch(FinishLoading());
    navigate('Login');
  };

  const navigateToHome = () => {
    navigation.navigate('DrawerStack');
  };

  const handleSignUp = (inputs: User) => {
    dispatch(SignUpAction(inputs, navigation));
  };

  const ValidationSchema = Yup.object().shape({
    username: Yup.string()
      .trim()
      .min(3, 'Invalid name!')
      .required('Username is Required!'),
    email: Yup.string().email('Invalid email!').required('Email is required!'),
    phone: Yup.string().trim().required('Phone is required!'),
    password: Yup.string()
      .trim()
      .min(8, 'Password is too short!')
      .required('Password is required!'),
    confirmPassword: Yup.string().equals(
      [Yup.ref('password'), null],
      'Password does not match!',
    ),
  });

  const {errors, values, touched, handleBlur, handleChange, handleSubmit} =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        confirmPassword: '',
      },
      onSubmit: async submittedValues => {
        if (submittedValues.password !== submittedValues.confirmPassword) {
          return Alert.alert('Passwords does not match');
        } else {
          handleSignUp({
            name: submittedValues.username && submittedValues.username,
            email: submittedValues.email && submittedValues.email,
            phone: submittedValues.phone && submittedValues.phone,
            password: submittedValues.password,
          });
        }
        // onSubmit: () => {
        // dispatch(StartLoading());
        // setTimeout(() => {
        //   navigateToHome();
        //   dispatch(FinishLoading());
        // }, 500);
      },
      validationSchema: ValidationSchema,
    });

  return (
    <MainContainer>
      <KeyboardAvoidingView behavior="position">
        <SignUpText>Sign up,</SignUpText>
        <DiscoverWorldText>Discover a New World With Us</DiscoverWorldText>
        <Wrapper>
          <TextField
            value={values.username}
            error={touched.username && errors.username}
            onChange={handleChange('username') as (text: string) => void}
            onBlur={() => handleBlur('username')}
            marginTop={20}
            placeHolder="Username"
          />
          <TextField
            value={values.email}
            error={touched.email && errors.email}
            onChange={handleChange('email') as (text: string) => void}
            onBlur={() => handleBlur('email')}
            marginTop={20}
            placeHolder="Email"
          />
          <TextField
            value={values.phone}
            error={touched.phone && errors.phone}
            onChange={handleChange('phone') as (text: string) => void}
            onBlur={() => handleBlur('phone')}
            marginTop={20}
            placeHolder="Phone Number"
            number
          />
          <TextField
            value={values.password}
            error={touched.password && errors.password}
            onChange={handleChange('password') as (text: string) => void}
            onBlur={() => handleBlur('password')}
            marginTop={20}
            placeHolder="Password"
            eyeIcon
            password
          />
          <TextField
            value={values.confirmPassword}
            error={touched.confirmPassword && errors.confirmPassword}
            onChange={handleChange('confirmPassword') as (text: string) => void}
            onBlur={() => handleBlur('confirmPassword')}
            marginTop={20}
            placeHolder="Confirm Password"
            eyeIcon
            password
          />
          <AlreadyHaveAccount>
            <AlreadyHaveAccountText>
              Already Have an Account?
            </AlreadyHaveAccountText>
            <SignIn onPress={navigateToLogin}>
              <SignInText>Login</SignInText>
            </SignIn>
          </AlreadyHaveAccount>
        </Wrapper>
      </KeyboardAvoidingView>
      <Wrapper>
        <Button
          title={'Sign Up'}
          marginTop={20}
          onPress={handleSubmit}
          loading={isLoading}
        />
        <Visitor onPress={navigateToHome}>
          <VisitorText>View as Visitor</VisitorText>
        </Visitor>
      </Wrapper>
    </MainContainer>
  );
};

export default SignUp;
