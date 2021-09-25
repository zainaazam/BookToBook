import React from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {useTheme} from 'styled-components/native';
// import AppStack, {AppStackParamList} from './StackNavigators/AppStack';
import AuthStack, {AuthStackParamList} from './StackNavigators/AuthStack';

export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamList> | undefined;
};

const RootStackNavigation = () => {
  const {Navigator, Screen} = createStackNavigator<RootStackParamList>();
  //   const {colors} = useTheme();

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="AuthStack">
        <Screen name="AuthStack" component={AuthStack} />
        {/* <Screen name="ProviderStack" component={ProviderStack} /> */}
        {/* <Screen
          name="AppStack"
          component={
            account?.base_type === BaseType.provider
              ? AppStack
              : CompanyHomeStack
          }
        /> */}
        {/* <Screen name="UserProfile" component={UserProfile} /> */}
        {/* <Screen
          name="ProviderNotifications"
          component={ProviderNotifications}
        /> */}
        {/* <Screen name="Search" component={Search} /> */}
      </Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigation;
