import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import Profile from '../../../../Containers/Drawer/Profile';
import EditProfile from '../../../../Containers/Drawer/Profile/EditProfile';
import ChangeUsername from '../../../../Containers/Drawer/Profile/ChangeUsername';
import ChangeEmail from '../../../../Containers/Drawer/Profile/ChangeEmail';
import ChangePhone from '../../../../Containers/Drawer/Profile/ChangePhone';

export type ProfileStackParamList = {
  Profile: undefined;
  EditProfile: undefined;
  ChangeUsername: undefined;
  ChangeEmail: undefined;
  ChangePhone: undefined;
};

const ProfileStack = () => {
  const {Navigator, Screen} = createStackNavigator<ProfileStackParamList>();
  return (
    <View style={styles.screen}>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Profile">
        <Screen name="Profile" component={Profile} />
        <Screen name="EditProfile" component={EditProfile} />
        <Screen name="ChangeUsername" component={ChangeUsername} />
        <Screen name="ChangeEmail" component={ChangeEmail} />
        <Screen name="ChangePhone" component={ChangePhone} />
      </Navigator>
    </View>
  );
};

export default ProfileStack;

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
