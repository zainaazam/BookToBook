import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import HelpAndFeedback from '../../../../Containers/Drawer/HelpAndFeedback';

export type HelpAndFeedbackStackParamList = {
  HelpAndFeedback: undefined;
};

const HelpAndFeedbackStack = () => {
  const {Navigator, Screen} =
    createStackNavigator<HelpAndFeedbackStackParamList>();
  return (
    <View style={styles.screen}>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="HelpAndFeedback">
        <Screen name="HelpAndFeedback" component={HelpAndFeedback} />
      </Navigator>
    </View>
  );
};

export default HelpAndFeedbackStack;

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
