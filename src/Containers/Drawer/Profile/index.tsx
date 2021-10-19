import React from 'react';
import {
  BookListText,
  UserInfoContainer,
  MainContainer,
  ProfileImage,
  UserEmail,
  UserNameText,
  UserPhone,
} from './styles';
import CustomHeader from '../../../Components/CustomHeader';
import {CompositeNavigationProp} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerStackParamList} from '../../../Navigation/StackNavigators/DrawerStack/DrawerStack';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProfileStackParamList} from '../../../Navigation/StackNavigators/DrawerStack/ProfileStack';
import Button from '../../../Components/Button';
import {FlatList} from 'react-native';
import ChoosingCard from '../../../Components/ChoosingCard';

const ProfileImg = require('../../../../Assets/Images/profile.png');
const BookImg1 = require('../../../../Assets/Images/first-book.png');
const BookImg2 = require('../../../../Assets/Images/second-book.png');
const BookImg3 = require('../../../../Assets/Images/third-book.png');

type ProfileScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerStackParamList, 'HomeStack'>,
  StackNavigationProp<ProfileStackParamList, 'Profile'>
>;

interface ProfileProps {
  navigation: ProfileScreenNavigationProp;
}

const Profile = ({navigation}: ProfileProps) => {
  const {toggleDrawer} = navigation;
  const {navigate} = navigation;

  const renderItem = ({item}) => {
    return (
      <ChoosingCard
        bookName={item.bookName}
        author={item.author}
        description={item.description}
        image={item.image}
        id={item.id}
        justListing
        onNavigate={() => navigate('HomeStack', {screen: 'BookDetails'})}
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
      image: BookImg1,
    },
    {
      id: '1',
      bookName: 'Sing to it',
      author: 'Amy Hempel',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et mi vel purus vive',
      image: BookImg2,
    },
    {
      id: '2',
      bookName: 'Sugar Run',
      author: 'Mesha Maren',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et mi vel purus vive',
      image: BookImg3,
    },
  ];

  return (
    <MainContainer>
      <CustomHeader
        menu
        title={'Profile'}
        backButton
        toggleDrawer={toggleDrawer}
      />
      <UserInfoContainer>
        <ProfileImage source={ProfileImg} />
        <UserNameText>Sarah Beida</UserNameText>
        <UserEmail>sarah.b@gmail.com</UserEmail>
        <UserPhone>+962 79 831 9003</UserPhone>
      </UserInfoContainer>
      <Button title={'Edit Profile'} marginTop={20} />
      <BookListText>Book list:</BookListText>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
      />
    </MainContainer>
  );
};

export default Profile;
