import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import AddGame from '../../../../Containers/Drawer/AddGame';

export type AddGameStackParamList = {
  AddGame: undefined;
};

const AddGameStack = () => {
  const {Navigator, Screen} = createStackNavigator<AddGameStackParamList>();
  return (
    <View style={styles.screen}>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="AddGame">
        <Screen name="AddGame" component={AddGame} />
      </Navigator>
    </View>
  );
};

export default AddGameStack;

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
