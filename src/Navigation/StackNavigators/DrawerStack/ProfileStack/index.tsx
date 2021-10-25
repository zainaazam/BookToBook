import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import Profile from '../../../../Containers/Drawer/Profile';
import EditProfile from '../../../../Containers/Drawer/Profile/EditProfile';
import ChangeUsername from '../../../../Containers/Drawer/Profile/EditProfile/ChangeUsername';
import ChangeEmail from '../../../../Containers/Drawer/Profile/EditProfile/ChangeEmail';
import ChangePhone from '../../../../Containers/Drawer/Profile/EditProfile/ChangePhone';
import BookDetails from '../../../../Containers/Drawer/Home/BookDetails';

export type ProfileStackParamList = {
  Profile: {asOthers?: boolean; backButtonType?: string} | undefined;
  EditProfile: undefined;
  ChangeUsername: undefined;
  ChangeEmail: undefined;
  ChangePhone: undefined;
  BookDetails: {withoutRequesting: boolean} | undefined;
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
        <Screen
          name="Profile"
          component={Profile}
          initialParams={({asOthers: false}, {backButtonType: 'backButton'})}
        />
        <Screen name="EditProfile" component={EditProfile} />
        <Screen name="ChangeUsername" component={ChangeUsername} />
        <Screen name="ChangeEmail" component={ChangeEmail} />
        <Screen name="ChangePhone" component={ChangePhone} />
        <Screen name="BookDetails" component={BookDetails} />
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
