import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigatorScreenParams} from '@react-navigation/native';
import CustomDrawer from '../../../Components/CustomDrawer';
import HomeStack, {HomeStackParamList} from './HomeStack';
import AboutStack, {AboutStackParamList} from './AboutStack';
import NotificationsStack, {
  NotificationsStackParamList,
} from './NotificationsStack';
import ChangePasswordStack, {
  ChangePasswordStackParamList,
} from './ChangePasswordStack';
import AddGameStack, {AddGameStackParamList} from './AddGameStack';
import ProfileStack, {ProfileStackParamList} from './ProfileStack';
import HelpAndFeedbackStack, {
  HelpAndFeedbackStackParamList,
} from './HelpAndFeedbackStack';

export type DrawerStackParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  AboutStack: NavigatorScreenParams<AboutStackParamList>;
  NotificationsStack: NavigatorScreenParams<NotificationsStackParamList>;
  ProfileStack: NavigatorScreenParams<ProfileStackParamList>;
  ChangePasswordStack: NavigatorScreenParams<ChangePasswordStackParamList>;
  AddGameStack: NavigatorScreenParams<AddGameStackParamList>;
  HelpAndFeedbackStack: NavigatorScreenParams<HelpAndFeedbackStackParamList>;
};

const {Navigator, Screen} = createDrawerNavigator<DrawerStackParamList>();
const DrawerStack = () => {
  return (
    <Navigator
      screenOptions={{
        drawerContentContainerStyle: {
          borderWidth: 1,
          backgroundColor: '#ffffff',
        },
        headerShown: false,
        drawerLabelStyle: {
          color: 'white',
        },
        drawerPosition: 'left',
      }}
      drawerContent={CustomDrawer}
      initialRouteName="HomeStack">
      <Screen name="HomeStack" component={HomeStack} />
      <Screen name="ProfileStack" component={ProfileStack} />
      <Screen name="NotificationsStack" component={NotificationsStack} />
      <Screen name="ChangePasswordStack" component={ChangePasswordStack} />
      <Screen name="AddGameStack" component={AddGameStack} />
      <Screen name="AboutStack" component={AboutStack} />
      <Screen name="HelpAndFeedbackStack" component={HelpAndFeedbackStack} />
    </Navigator>
  );
};

export default DrawerStack;
