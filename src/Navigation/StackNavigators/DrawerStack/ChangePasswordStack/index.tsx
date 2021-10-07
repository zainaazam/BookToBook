import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import ChangePassword from '../../../../Containers/DrawerStack/ChangePassword';

export type ChangePasswordStackParamList = {
  ChangePassword: undefined;
};

const ChangePasswordStack = () => {
  const {Navigator, Screen} =
    createStackNavigator<ChangePasswordStackParamList>();
  return (
    <View style={styles.screen}>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="ChangePassword">
        <Screen name="ChangePassword" component={ChangePassword} />
      </Navigator>
    </View>
  );
};

export default ChangePasswordStack;

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
