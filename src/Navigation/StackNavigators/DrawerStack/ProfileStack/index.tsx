import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import Profile from '../../../../Containers/Drawer/Profile';
import EditProfile from '../../../../Containers/Drawer/Profile/EditProfile';
import ChangeInfo from '../../../../Containers/Drawer/Profile/ChangeInfo';

export type ProfileStackParamList = {
  Profile: undefined;
  EditProfile: undefined;
  ChangeInfo: {type?: string} | undefined;
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
        <Screen name="ChangeInfo" component={ChangeInfo} />
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
