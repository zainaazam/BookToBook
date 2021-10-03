import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import Home from '../../Containers/AppStack/Home';

export type AppStackParamList = {
  Home: undefined;
};

const AppStack = () => {
  const {Navigator, Screen} = createStackNavigator<AppStackParamList>();
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
