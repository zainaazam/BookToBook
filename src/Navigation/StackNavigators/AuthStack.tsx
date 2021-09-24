import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../../Containers/Main';
// import LogIn from '../../Containers/Auth/LogIn';
// import SignUp from '../../Containers/Auth/SignUp';
// import ResetPassword from '../../Containers/Auth/ResetPassword';
// import Main from '../../Containers/Auth/Main';
// import ForgetPassword from '../../Containers/Auth/ForgetPassword';
// import Verification from '../../Containers/Auth/Verification';
// import VerificationOptions from '../../Containers/Auth/ForgetPassword/VerificationOptions';
import {View} from 'react-native';

export type AuthStackParamList = {
  Main: undefined;
  //   LogIn: undefined;
  //   SignUp: undefined;
  //   ResetPassword: undefined;
  //   ForgetPassword: undefined;
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
        <Screen name="Main" component={Main} />
        {/* <Screen name="LogIn" component={LogIn} /> */}
        {/* <Screen name="SignUp" component={SignUp} /> */}
        {/* <Screen name="ResetPassword" component={ResetPassword} /> */}
        {/* <Screen name="ForgetPassword" component={ForgetPassword} /> */}
        {/* <Screen name="Verification" component={Verification} /> */}
        {/* <Screen name="VerificationOptions" component={VerificationOptions} /> */}
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
