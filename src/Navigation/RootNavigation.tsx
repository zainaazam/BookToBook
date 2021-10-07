import React from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {useTheme} from 'styled-components/native';
import AuthStack, {AuthStackParamList} from './StackNavigators/AuthStack';
import {DrawerStackParamList} from './StackNavigators/DrawerStack/DrawerStack';
import DrawerStack from './StackNavigators/DrawerStack/DrawerStack';

export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamList> | undefined;
  DrawerStack: NavigatorScreenParams<DrawerStackParamList> | undefined;
};

// export const navigationRef = React.createRef<NavigationContainerRef>();
const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

export const goBack = () => {
  navigationRef.current?.goBack();
};

const RootStackNavigation = () => {
  const {Navigator, Screen} = createStackNavigator<RootStackParamList>();
  //   const {colors} = useTheme();

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="AuthStack">
        <Screen name="AuthStack" component={AuthStack} />
        <Screen name="DrawerStack" component={DrawerStack} />
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
