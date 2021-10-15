import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import Home from '../../../../Containers/Drawer/Home';
import Exchange from '../../../../Containers/Drawer/Home/Exchange';
import BookDetails from '../../../../Containers/Drawer/Home/BookDetails';

export type HomeStackParamList = {
  Home: undefined;
  BookDetails: undefined;
  Exchange: undefined;
};

const HomeStack = () => {
  const {Navigator, Screen} = createStackNavigator<HomeStackParamList>();
  return (
    <View style={styles.screen}>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Screen name="Home" component={Home} />
        <Screen name="Exchange" component={Exchange} />
        <Screen name="BookDetails" component={BookDetails} />
      </Navigator>
    </View>
  );
};

export default HomeStack;

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
