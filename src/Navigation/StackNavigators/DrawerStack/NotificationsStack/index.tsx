import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import Notifications from '../../../../Containers/DrawerStack/Notifications';

export type NotificationsStackParamList = {
  Notifications: undefined;
};

const NotificationsStack = () => {
  const {Navigator, Screen} =
    createStackNavigator<NotificationsStackParamList>();
  return (
    <View style={styles.screen}>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Notifications">
        <Screen name="Notifications" component={Notifications} />
      </Navigator>
    </View>
  );
};

export default NotificationsStack;

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
