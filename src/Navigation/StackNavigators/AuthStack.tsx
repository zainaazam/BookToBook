import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import Welcome from '../../Containers/Auth/Welcome';
import Login from '../../Containers/Auth/Login';
import SignUp from '../../Containers/Auth/SignUp';
import Verification from '../../Containers/Auth/Verification';
import OTP from '../../Containers/Auth/OTP';
import ResetPassword from '../../Containers/Auth/ResetPassword';

export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  Verification: undefined;
  OTP: undefined;
  ResetPassword: undefined;
  //   Verification: {
  //     phoneNumber?: string;
  //     email?: string;
  //     forgetPassword?: boolean;
  //     changePhone?: boolean;
  //     isEmail?: boolean;
  //   };
  //   VerificationOptions: {
  //     email: string;
  //     phone: string;
  //     avatar_name: string;
  //     name: string;
  //   };
};

const AuthStack = () => {
  const {Navigator, Screen} = createStackNavigator<AuthStackParamList>();
  return (
    <View style={styles.icon}>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: 'white'},
        }}>
        <Screen name="Welcome" component={Welcome} />
        <Screen name="Login" component={Login} />
        <Screen name="SignUp" component={SignUp} />
        <Screen name="ResetPassword" component={ResetPassword} />
        <Screen name="Verification" component={Verification} />
        <Screen name="OTP" component={OTP} />
      </Navigator>
    </View>
  );
};

export default AuthStack;

export const styles = StyleSheet.create({
  icon: {
    flex: 1,
  },
});
