import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import AddBook from '../../../../Containers/Drawer/AddBook';

export type AddBookStackParamList = {
  AddBook: undefined;
};

const AddBookStack = () => {
  const {Navigator, Screen} = createStackNavigator<AddBookStackParamList>();
  return (
    <View style={styles.screen}>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="AddBook">
        <Screen name="AddBook" component={AddBook} />
      </Navigator>
    </View>
  );
};

export default AddBookStack;

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
