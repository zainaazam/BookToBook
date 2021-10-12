import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import Profile from '../../../../Containers/Drawer/Profile';

export type ProfileStackParamList = {
  Profile: undefined;
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
