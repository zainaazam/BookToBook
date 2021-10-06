import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import Home from '../../Containers/AppStack/Home';
import About from '../../Containers/AppStack/About';

export type AppStackParamList = {
  Home: undefined;
  About: undefined;
};

const AppStack = () => {
  const {Navigator, Screen} = createStackNavigator<AppStackParamList>();
  return (
    <View style={styles.screen}>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Screen name="Home" component={Home} />
        <Screen name="About" component={About} />
      </Navigator>
    </View>
  );
};

export default AppStack;

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
