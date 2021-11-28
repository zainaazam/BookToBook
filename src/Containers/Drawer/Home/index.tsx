import {DrawerNavigationProp} from '@react-navigation/drawer';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {FlatList} from 'react-native';
import GameCard from '../../../Components/GameCard';
import CustomHeader from '../../../Components/CustomHeader';
import {DrawerStackParamList} from '../../../Navigation/StackNavigators/DrawerStack/DrawerStack';
import {HomeStackParamList} from '../../../Navigation/StackNavigators/DrawerStack/HomeStack';
import {MainContainer} from './styles';

const GameImage1 = require('../../../../Assets/Images/first-game.jpg');
const GameImage2 = require('../../../../Assets/Images/second-game.jpg');
const GameImage3 = require('../../../../Assets/Images/third-game.jpg');

type HomeScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerStackParamList, 'HomeStack'>,
  StackNavigationProp<HomeStackParamList, 'Home'>
>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

const Home = ({navigation}: HomeProps) => {
  const {toggleDrawer} = navigation;
  const {navigate} = navigation;

  const navigateToGameDetails = () => {
    navigate('GameDetails', {withoutRequesting: false});
  };

  const renderItem = ({item}) => {
    return (
      <GameCard
        gameName={item.gameName}
        developer={item.developer}
        publisher={item.publisher}
        description={item.description}
        image={item.image}
        onPublisherPress={() =>
          navigate('ProfileStack', {
            screen: 'Profile',
            params: {asOthers: true},
          })
        }
        onPress={navigateToGameDetails}
      />
    );
  };

  const data = [
    {
      id: '0',
      gameName: 'Battlefield',
      developer: 'DICE',
      publisher: 'AbeerO',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et mi vel purus vive',
      image: GameImage1,
    },
    {
      id: '1',
      gameName: 'Grand Theft Auto V',
      developer: 'Rockstar Games, Rockstar North, MORE',
      publisher: 'ZainaA',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et mi vel purus vive',
      image: GameImage2,
    },
    {
      id: '2',
      gameName: 'FIFA 22',
      developer: 'Electronic Arts, EA Romania, EA Vancouver',
      publisher: 'NourH',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et mi vel purus vive',
      image: GameImage3,
    },
  ];

  return (
    <MainContainer>
      <CustomHeader
        title={'Dashboard'}
        menu
        toggleDrawer={toggleDrawer}
        navigation={() =>
          navigate('ProfileStack', {
            screen: 'Profile',
            params: {asOthers: false},
          })
        }
      />
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
