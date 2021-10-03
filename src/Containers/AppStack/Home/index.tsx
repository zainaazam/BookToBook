import React from 'react';
import {FlatList} from 'react-native';
import BookCard from '../../../Components/BookCard';
import CustomHeader from '../../../Components/CustomHeader';
import {MainContainer} from './styles';

const BookImage1 = require('../../../../Assets/Images/first-book.png');
const BookImage2 = require('../../../../Assets/Images/second-book.png');
const BookImage3 = require('../../../../Assets/Images/third-book.png');

const Home = () => {
  const renderItem = ({item}) => {
    return (
      <BookCard
        bookName={item.bookName}
        author={item.author}
        publisher={item.publisher}
        description={item.description}
        image={item.image}
      />
    );
  };

  const data = [
    {
      id: '0',
      bookName: 'Muscle',
      author: 'Alan Trotter',
      publisher: 'AbeerO',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et mi vel purus vive',
      image: BookImage1,
    },
    {
      id: '1',
      bookName: 'Sing to it',
      author: 'Amy Hempel',
      publisher: 'ZainaA',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et mi vel purus vive',
      image: BookImage2,
    },
    {
      id: '2',
      bookName: 'Sugar Run',
      author: 'Mesha Maren',
      publisher: 'NourH',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et mi vel purus vive',
      image: BookImage3,
    },
  ];

  return (
    <MainContainer>
      <CustomHeader title={'Dashboard'} menu />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
      />
    </MainContainer>
  );
};

export default Home;
