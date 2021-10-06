import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import Home from '../../../../Containers/DrawerStack/Home';

export type HomeStackParamList = {
  Home: undefined;
};

const AppStack = () => {
  const {Navigator, Screen} = createStackNavigator<HomeStackParamList>();
  return (
    <View style={styles.icon}>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Screen name="Home" component={Home} />
      </Navigator>
    </View>
  );
};

export default AppStack;

export const styles = StyleSheet.create({
  icon: {
    flex: 1,
  },
});
