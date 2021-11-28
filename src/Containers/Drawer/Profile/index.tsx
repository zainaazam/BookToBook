import React from 'react';
import {
  GameListText,
  UserInfoContainer,
  MainContainer,
  ProfileImage,
  UserEmail,
  UserNameText,
  UserPhone,
} from './styles';
import CustomHeader from '../../../Components/CustomHeader';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerStackParamList} from '../../../Navigation/StackNavigators/DrawerStack/DrawerStack';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProfileStackParamList} from '../../../Navigation/StackNavigators/DrawerStack/ProfileStack';
import Button from '../../../Components/Button';
import {Alert, FlatList, Linking, Platform} from 'react-native';
import ChoosingCard from '../../../Components/ChoosingCard';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RootState} from '../../../Store';
import {useSelector} from 'react-redux';
import {AuthReducer} from '../../../Store/Reducers/Auth/AuthReducer.interfaces';

const ProfileImg = require('../../../../Assets/Images/profile.png');
const GameImage1 = require('../../../../Assets/Images/first-game.jpg');
const GameImage2 = require('../../../../Assets/Images/second-game.jpg');
const GameImage3 = require('../../../../Assets/Images/third-game.jpg');

type ProfileScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerStackParamList, 'HomeStack'>,
  StackNavigationProp<ProfileStackParamList, 'Profile'>
>;

type ProfileRouteProp = RouteProp<ProfileStackParamList, 'Profile'>;

interface ProfileProps {
  navigation: ProfileScreenNavigationProp;
  route: ProfileRouteProp;
}

const Profile = ({navigation, route}: ProfileProps) => {
  const {toggleDrawer} = navigation;
  const {navigate} = navigation;
  const {asOthers, backButtonType} = route.params;

  const {account} = useSelector<RootState>(
    state => state.AuthReducer,
  ) as AuthReducer;

  const handlePhoneLinking = (number: string) => {
    let phoneNumber: string;
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${number}`;
    } else {
      phoneNumber = `tel:${number}`;
    }
    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        if (!supported) {
          Alert.alert('Phone number is not available');
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch(err => Alert.alert(err.message));
  };

  const navigateToEditProfile = () => {
    navigate('EditProfile');
  };

  const renderItem = ({item}) => {
    return (
      <ChoosingCard
        gameName={item.gameName}
        developer={item.developer}
        description={item.description}
        image={item.image}
        id={item.id}
        justListing
        onNavigate={() => navigate('GameDetails', {withoutRequesting: true})}
      />
    );
  };

  const data = [
    {
      id: '0',
      gameName: 'Battlefield',
      developer: 'DICE',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et mi vel purus vive',
      image: GameImage1,
    },
    {
      id: '1',
      gameName: 'Grand Theft Auto V',
      developer: 'Rockstar Games, Rockstar North, MORE',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et mi vel purus vive',
      image: GameImage2,
    },
    {
      id: '2',
      gameName: 'FIFA 22',
      developer: 'Electronic Arts, EA Romania, EA Vancouver',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et mi vel purus vive',
      image: GameImage3,
    },
  ];

  return (
    <MainContainer>
      <CustomHeader
        menu
        title={'Profile'}
        rightSide={backButtonType}
        preventingBackButton={() => navigation.pop(2)}
        toggleDrawer={toggleDrawer}
      />
      <UserInfoContainer>
        <ProfileImage source={ProfileImg} />
        <UserNameText>{account.name}</UserNameText>
        <UserEmail>{account.email}</UserEmail>
        <TouchableOpacity onPress={() => handlePhoneLinking(account.phone)}>
          <UserPhone>{account.phone}</UserPhone>
        </TouchableOpacity>
      </UserInfoContainer>
      {asOthers ? null : (
        <Button
          title={'Edit Profile'}
          marginTop={20}
          onPress={navigateToEditProfile}
        />
      )}
      <GameListText>Game list:</GameListText>
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
