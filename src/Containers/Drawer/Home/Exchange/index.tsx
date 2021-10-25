import React, {useState} from 'react';
import {FlatList} from 'react-native';
import CustomHeader from '../../../../Components/CustomHeader';
import {MainContainer, ChooseText} from './styles';
import ChoosingMultiCard from '../../../../Components/ChoosingMultiCard';
import Button from '../../../../Components/Button';
import CustomModal from '../../../../Components/CustomModal';
import {CompositeNavigationProp} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerStackParamList} from '../../../../Navigation/StackNavigators/DrawerStack/DrawerStack';
import {HomeStackParamList} from '../../../../Navigation/StackNavigators/DrawerStack/HomeStack';
import {StackNavigationProp} from '@react-navigation/stack';

const BookImage1 = require('../../../../../Assets/Images/first-book.png');
const BookImage2 = require('../../../../../Assets/Images/second-book.png');
const BookImage3 = require('../../../../../Assets/Images/third-book.png');

type ExchangeScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerStackParamList, 'HomeStack'>,
  StackNavigationProp<HomeStackParamList, 'Exchange'>
>;

interface ExchangeProps {
  navigation: ExchangeScreenNavigationProp;
}

const Exchange = ({navigation}: ExchangeProps) => {
  const {toggleDrawer} = navigation;
  const {navigate} = navigation;

  const [selectedBooks, setSelectedBooks] = useState<string[] | []>([]);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const navigateToBookDetails = () => {
    navigation.push('BookDetails', {withoutRequesting: true});
  };

  const renderItem = ({item}) => {
    return (
      <ChoosingMultiCard
        bookName={item.bookName}
        author={item.author}
        description={item.description}
        image={item.image}
        id={item.id}
        selectedBooks={selectedBooks}
        setSelectedBooks={setSelectedBooks}
        onReadMorePress={navigateToBookDetails}
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
        title={'Exchange'}
        menu
        toggleDrawer={toggleDrawer}
        rightSide="backButton"
      />
      <ChooseText>Choose from your books :</ChooseText>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
      />
      <Button
        title={'Send Request'}
        onPress={toggleModal}
        buttonDisabled={selectedBooks.length === 0}
      />
      <CustomModal
        showModal={showModal}
        hideModal={toggleModal}
        onOkPress={() => navigate('Home')}
        message={'Your Request Has Been Successfully Sent!'}
      />
    </MainContainer>
  );
};

export default Exchange;
