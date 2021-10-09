import React from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {MainContainer} from './styles';
import {SafeAreaView} from 'react-native';
import CustomHeader from '../../../Components/CustomHeader';
import NotificationCard from '../../../Components/NotificationCard';
import {StackNavigationProp} from '@react-navigation/stack';
import {NotificationsStackParamList} from '../../../Navigation/StackNavigators/DrawerStack/NotificationsStack';

const BookImage1 = require('../../../../Assets/Images/first-book.png');
const BookImage2 = require('../../../../Assets/Images/second-book.png');
const BookImage3 = require('../../../../Assets/Images/third-book.png');

export type NotificationsScreenNavigationProp = StackNavigationProp<
  NotificationsStackParamList,
  'Notifications'
>;

interface NotificationsProps {
  navigation: NotificationsScreenNavigationProp;
}

const Notifications = ({navigation}: NotificationsProps) => {
  const {navigate} = navigation;

  const navigateToChooseToExchange = () => {
    navigate('ChooseToExchange');
  };
  const renderItem = ({item}) => {
    return (
      <NotificationCard
        name={item.name}
        image={item.image}
        isRead={item.isRead}
        nameOfBook={item.nameOfBook}
        type={item.type}
        onRequestPress={navigateToChooseToExchange}
      />
    );
  };
  const data = [
    {
      id: '0',
      name: 'Zaina',
      nameOfBook: 'Sing to it',
      image: BookImage2,
      type: 'requesting',
      isRead: false,
    },
    {
      id: '1',
      nameOfBook: 'Muscle',
      image: BookImage1,
      type: 'sent',
      isRead: true,
    },
    {
      id: '2',
      nameOfBook: 'Sugar run',
      image: BookImage3,
      type: 'rejected',
      isRead: true,
    },
    {
      id: '3',
      nameOfBook: 'Sugar run',
      image: BookImage3,
      type: 'approved',
      isRead: false,
    },
  ];
  return (
    <MainContainer>
      <SafeAreaView />
      <CustomHeader title={'Notifications'} menu />
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
