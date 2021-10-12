import React, {useState} from 'react';
import {FlatList} from 'react-native';
import CustomHeader from '../../../../Components/CustomHeader';
import {MainContainer, ChooseText} from './styles';
import ChoosingCard from '../../../../Components/ChoosingCard';
import Button from '../../../../Components/Button';
import {CompositeNavigationProp} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerStackParamList} from '../../../../Navigation/StackNavigators/DrawerStack/DrawerStack';
import {StackNavigationProp} from '@react-navigation/stack';
import {NotificationsStackParamList} from '../../../../Navigation/StackNavigators/DrawerStack/NotificationsStack';
import {goBack, navigateToProfile} from '../../../../Navigation/RootNavigation';

const BookImage1 = require('../../../../../Assets/Images/first-book.png');
const BookImage2 = require('../../../../../Assets/Images/second-book.png');
const BookImage3 = require('../../../../../Assets/Images/third-book.png');

type ChooseToExchangeScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerStackParamList, 'HomeStack'>,
  StackNavigationProp<NotificationsStackParamList, 'ChooseToExchange'>
>;

interface ChooseToExchangeProps {
  navigation: ChooseToExchangeScreenNavigationProp;
}

const ChooseToExchange = ({navigation}: ChooseToExchangeProps) => {
  const {toggleDrawer} = navigation;

  const [selectedBook, setSelectedBook] = useState<string>('');
  const renderItem = ({item}) => {
    return (
      <ChoosingCard
        bookName={item.bookName}
        author={item.author}
        description={item.description}
        image={item.image}
        id={item.id}
        selectedBook={selectedBook}
        setSelectedBook={setSelectedBook}
      />
    );
  };

  const data = [
    {
      id: '0',
      bookName: 'Muscle',
      author: 'Alan Trotter',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et mi vel purus vive',
      image: BookImage1,
    },
    {
      id: '1',
      bookName: 'Sing to it',
      author: 'Amy Hempel',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et mi vel purus vive',
      image: BookImage2,
    },
    {
      id: '2',
      bookName: 'Sugar Run',
      author: 'Mesha Maren',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et mi vel purus vive',
      image: BookImage3,
    },
  ];

  return (
    <MainContainer>
      <CustomHeader
        backButton
        title={'Choose to Exchange'}
        menu
        toggleDrawer={toggleDrawer}
      />
      <ChooseText>Please choose one book to exchange:</ChooseText>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
      />
      <Button
        title={'Approve'}
        marginTop={20}
        onPress={navigateToProfile}
        buttonDisabled={selectedBook === ''}
      />
      <Button title={'Reject'} orange marginTop={10} onPress={goBack} />
    </MainContainer>
  );
};

export default ChooseToExchange;
