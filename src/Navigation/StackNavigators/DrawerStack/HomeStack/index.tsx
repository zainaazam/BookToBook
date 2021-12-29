import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import Home from '../../../../Containers/Drawer/Home';
import Exchange from '../../../../Containers/Drawer/Home/Exchange';
import GameDetails from '../../../../Containers/Drawer/Home/GameDetails';

export type HomeStackParamList = {
  Home: undefined;
  GameDetails: {withoutRequesting: boolean; gameId?: number} | undefined;
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
        <Screen name="GameDetails" component={GameDetails} />
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
