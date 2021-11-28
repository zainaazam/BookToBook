import React from 'react';
import {
  Developer,
  GameDetailsContainer,
  GameImage,
  GameName,
  GameGenre,
  DetailsContainer,
  DescriptionContainer,
  Modes,
  MainContainer,
  Platforms,
  PublishDate,
  DescriptionWord,
  DescriptionContent,
  Quote,
  RightQuoteIcon,
} from './styles';
import CustomHeader from '../../../../Components/CustomHeader';
import {styles} from '../../../Auth/Welcome/styles';
import Button from '../../../../Components/Button';
import QuoteIcon from 'react-native-vector-icons/Fontisto';
import {useTheme} from 'styled-components';
import {ScrollView} from 'react-native-gesture-handler';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerStackParamList} from '../../../../Navigation/StackNavigators/DrawerStack/DrawerStack';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStackParamList} from '../../../../Navigation/StackNavigators/DrawerStack/HomeStack';

const Image = require('../../../../../Assets/Images/first-game.jpg');

type GameDetailsScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerStackParamList, 'HomeStack'>,
  StackNavigationProp<HomeStackParamList, 'GameDetails'>
>;

type GameDetailsRouteProp = RouteProp<HomeStackParamList, 'GameDetails'>;

interface GameDetailsProps {
  navigation: GameDetailsScreenNavigationProp;
  route: GameDetailsRouteProp;
}

const GameDetails = ({navigation, route}: GameDetailsProps) => {
  const {toggleDrawer} = navigation;
  const {navigate} = navigation;
  const {withoutRequesting} = route.params;

  const navigateToExchange = () => {
    navigate('Exchange');
  };

  const {colors} = useTheme();

  return (
    <MainContainer>
      <CustomHeader
        menu
        title={'Game Details'}
        toggleDrawer={toggleDrawer}
        rightSide="backButton"
      />
      <DetailsContainer>
        <GameImage source={Image} style={styles.image} />
        <GameDetailsContainer>
          <GameName>Valorant</GameName>
          <Developer>Riot Games</Developer>
          <PublishDate>June 2, 2020</PublishDate>
          <GameGenre>First-person shooter</GameGenre>
          <Modes>Multiplayer video game</Modes>
          <Platforms>Microsoft Windows</Platforms>
        </GameDetailsContainer>
      </DetailsContainer>
      {/* <Quote>
        <RightQuoteIcon>
          <QuoteIcon name="quote-a-right" color={colors.placeholder} />
        </RightQuoteIcon>{' '}
        Lorem ipsum dolor sit amet, concestuar <QuoteIcon name="quote-a-left" />
      </Quote> */}
      <DescriptionContainer>
        <DescriptionWord>Description:</DescriptionWord>
        <ScrollView>
          <DescriptionContent>
            consectetur adipiscing elit. Phasellus et mi vel purus vive.
            consectetur adipiscing elit. Phasellus et mi vel purus vive.
            consectetur adipiscing elit. Phasellus et mi vel purus vive.
            consectetur adipiscing elit. Phasellus et mi vel purus vive.
            consectetur adipiscing elit. Phasellus et mi vel puru.
          </DescriptionContent>
        </ScrollView>
      </DescriptionContainer>
      {withoutRequesting ? null : (
        <Button
          title={'Request to Exchange'}
          marginTop={20}
          onPress={navigateToExchange}
        />
      )}
    </MainContainer>
  );
};

export default GameDetails;
