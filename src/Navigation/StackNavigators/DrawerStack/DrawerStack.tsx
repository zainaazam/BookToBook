import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigatorScreenParams} from '@react-navigation/native';
import CustomDrawer from '../../../Components/CustomDrawer';
import HomeStack, {HomeStackParamList} from './HomeStack';
import About from '../../../Containers/DrawerStack/About';

export type DrawerStackParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  About: undefined;
  // ManageFamilyStack: undefined;
  // Password: undefined;
  // Curriculum: undefined;
  // SwitchAccountStack: SwitchAccountStackParamList;
};

const {Navigator, Screen} = createDrawerNavigator<DrawerStackParamList>();
const DrawerStack = () => {
  return (
    <Navigator
      screenOptions={{
        drawerContentContainerStyle: {
          borderWidth: 1,
          backgroundColor: '#F2F2F2',
        },
        headerShown: false,
        drawerLabelStyle: {
          color: 'white',
        },
        drawerPosition: 'left',
      }}
      drawerContent={CustomDrawer}
      initialRouteName="HomeStack">
      <Screen name="HomeStack" component={HomeStack} />
      <Screen name="About" component={About} />
      {/* <Screen name="ManageFamilyStack" component={ManageFamilyStack} />
      <Screen name="Curriculum" component={CurriculumStack} />
      <Screen name="SwitchAccountStack" component={SwitchAccountStack} /> */}
    </Navigator>
  );
};

export default DrawerStack;
