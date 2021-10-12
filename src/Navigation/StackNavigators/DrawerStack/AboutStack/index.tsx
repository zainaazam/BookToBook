import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import About from '../../../../Containers/Drawer/About';

export type AboutStackParamList = {
  About: undefined;
};

const AboutStack = () => {
  const {Navigator, Screen} = createStackNavigator<AboutStackParamList>();
  return (
    <View style={styles.screen}>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="About">
        <Screen name="About" component={About} />
      </Navigator>
    </View>
  );
};

export default AboutStack;

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
