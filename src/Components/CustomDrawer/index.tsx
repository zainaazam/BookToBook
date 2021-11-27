import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  DrawerContainer,
  Text,
  Footer,
  DrawerItemWrapper,
  Chevron,
  ChevronWrapper,
} from './styles';
import {SafeAreaView} from 'react-native';
import Button from '../Button';
import {store} from '../../Store';
import {LogOut} from '../../Store/Actions';

interface CustomItemProps {
  title: string;
}
const CustomItem = ({title}: CustomItemProps) => (
  <DrawerItemWrapper>
    <Text>{title}</Text>
    <ChevronWrapper>
      <Chevron name="chevron-right" size={17} />
    </ChevronWrapper>
  </DrawerItemWrapper>
);

const CustomDrawer = (props: DrawerContentComponentProps) => {
  // const handleUrl = async (url: string) => {
  //   const supported = await Linking.canOpenURL('https://www.google.com');

  //   if (supported) {
  //     await Linking.openURL(url);
  //   } else {
  //     Alert.alert(`Don't know how to open this URL: ${url}`);
  //   }
  // };
  const {
    navigation: {reset},
  } = props;

  const handleLogOut = () => {
    store.dispatch(LogOut());
    reset({
      index: 1,
      routes: [{name: 'AuthStack'}],
    });
  };
  return (
    <DrawerContainer>
      <SafeAreaView />
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label={() => <CustomItem title="Home" />}
          onPress={() => reset({index: 0, routes: [{name: 'HomeStack'}]})}
        />
        <DrawerItem
          label={() => <CustomItem title="Profile" />}
          onPress={() =>
            reset({
              index: 1,
              routes: [
                {name: 'HomeStack'},
                {name: 'ProfileStack', params: {asOthers: false}},
              ],
            })
          }
        />
        <DrawerItem
          label={() => <CustomItem title="Notification" />}
          onPress={() =>
            reset({
              index: 1,
              routes: [{name: 'HomeStack'}, {name: 'NotificationsStack'}],
            })
          }
        />
        <DrawerItem
          label={() => <CustomItem title="Change Password" />}
          onPress={() =>
            reset({
              index: 1,
              routes: [{name: 'HomeStack'}, {name: 'ChangePasswordStack'}],
            })
          }
        />
        <DrawerItem
          label={() => <CustomItem title="Add a Book" />}
          onPress={() =>
            reset({
              index: 1,
              routes: [{name: 'HomeStack'}, {name: 'AddBookStack'}],
            })
          }
        />
        <DrawerItem
          label={() => <CustomItem title="About" />}
          onPress={() =>
            reset({
              index: 1,
              routes: [{name: 'HomeStack'}, {name: 'AboutStack'}],
            })
          }
        />
        <DrawerItem
          label={() => <CustomItem title="Help & Feedback" />}
          onPress={() =>
            reset({
              index: 1,
              routes: [{name: 'HomeStack'}, {name: 'HelpAndFeedbackStack'}],
            })
          }
        />
      </DrawerContentScrollView>
      <Footer>
        <Button title={'Log out'} mediumButton onPress={handleLogOut} />
      </Footer>
    </DrawerContainer>
  );
};

export default CustomDrawer;
