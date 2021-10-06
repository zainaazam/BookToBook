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
import {Alert, Linking, SafeAreaView} from 'react-native';
import Button from '../Button';

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
  const handleUrl = async (url: string) => {
    const supported = await Linking.canOpenURL('https://www.google.com');

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };
  const {
    navigation: {reset},
  } = props;

  const handleLogOut = () => {
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
          onPress={() => handleUrl('')}
          //   onPress={() =>
          //     reset({
          //       index: 1,
          //       routes: [{name: 'Home'}, {name: 'ManageFamilyStack'}],
          //     })
          //   }
        />
        <DrawerItem
          label={() => <CustomItem title="Notification" />}
          onPress={() => handleUrl('')}
        />
        <DrawerItem
          label={() => <CustomItem title="Change Password" />}
          onPress={() => handleUrl('')}
          //   onPress={() =>
          //     reset({
          //       index: 1,
          //       routes: [{name: 'Home'}, {name: 'Curriculum'}],
          //     })
          //   }
        />
        <DrawerItem
          label={() => <CustomItem title="Add a Book" />}
          onPress={() => handleUrl('')}
        />
        <DrawerItem
          label={() => <CustomItem title="About" />}
          onPress={() => handleUrl('')}
        />
        <DrawerItem
          label={() => <CustomItem title="Help & Feedback" />}
          onPress={() => handleUrl('')}
        />
      </DrawerContentScrollView>
      <Footer>
        <Button title={'Log out'} mediumButton onPress={handleLogOut} />
      </Footer>
    </DrawerContainer>
  );
};

export default CustomDrawer;
