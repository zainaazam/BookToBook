import React from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {MainContainer} from './styles';
import {SafeAreaView} from 'react-native';
import CustomHeader from '../../../Components/CustomHeader';
import NotificationCard from '../../../Components/NotificationCard';
import {StackNavigationProp} from '@react-navigation/stack';
import {NotificationsStackParamList} from '../../../Navigation/StackNavigators/DrawerStack/NotificationsStack';
import {CompositeNavigationProp} from '@react-navigation/native';
import {DrawerStackParamList} from '../../../Navigation/StackNavigators/DrawerStack/DrawerStack';
import {DrawerNavigationProp} from '@react-navigation/drawer';

const GameImage1 = require('../../../../Assets/Images/first-game.jpg');
const GameImage2 = require('../../../../Assets/Images/second-game.jpg');
const GameImage3 = require('../../../../Assets/Images/third-game.jpg');
const GameImage4 = require('../../../../Assets/Images/forth-game.jpg');

type NotificationsScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerStackParamList, 'HomeStack'>,
  StackNavigationProp<NotificationsStackParamList, 'Notifications'>
>;

interface NotificationsProps {
  navigation: NotificationsScreenNavigationProp;
}

const Notifications = ({navigation}: NotificationsProps) => {
  const {navigate} = navigation;
  const {toggleDrawer} = navigation;

  const navigateToChooseToExchange = () => {
    navigate('ChooseToExchange');
  };

  const renderItem = ({item}) => {
    return (
      <NotificationCard
        name={item.name}
        image={item.image}
        isRead={item.isRead}
        nameOfGame={item.nameOfGame}
        type={item.type}
        onRequestPress={navigateToChooseToExchange}
        onApprovedPress={() => navigate('Profile', {asOthers: true})}
      />
    );
  };
  const data = [
    {
      id: '0',
      name: 'Zaina',
      nameOfGame: 'Battlefield',
      image: GameImage1,
      type: 'requesting',
      isRead: false,
    },
    {
      id: '1',
      nameOfGame: 'Grand Theft Auto V',
      image: GameImage2,
      type: 'sent',
      isRead: true,
    },
    {
      id: '2',
      nameOfGame: 'FIFA 22',
      image: GameImage3,
      type: 'rejected',
      isRead: true,
    },
    {
      id: '3',
      nameOfGame: 'Valorant',
      image: GameImage4,
      type: 'approved',
      isRead: false,
    },
  ];
  return (
    <MainContainer>
      <SafeAreaView />
      <CustomHeader
        title={'Notifications'}
        menu
        toggleDrawer={toggleDrawer}
        navigation={() => navigate('Profile', {asOthers: false})}
      />
      <ScrollView>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </MainContainer>
  );
};

export default Notifications;
