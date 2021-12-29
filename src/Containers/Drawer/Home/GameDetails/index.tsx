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
import {ConfigsReducer} from '../../../../Store/Reducers/Configs/Configs.interface';
import {RootState} from '../../../../Store';
import {useSelector} from 'react-redux';

const Image = require('../../../../../Assets/Images/forth-game.jpg');

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
  const {withoutRequesting, gameId} = route.params;

  const {games} = useSelector<RootState>(
    state => state.ConfigsReducer,
  ) as ConfigsReducer;

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
          {/* <GameName>Valorant</GameName> */}
          <GameName>{games[gameId].gameName}</GameName>
          {/* <Developer>Riot Games</Developer> */}
          <Developer>{games[gameId].developer}</Developer>
          {/* <PublishDate>June 2, 2020</PublishDate> */}
          <PublishDate>{games[gameId].publishDate}</PublishDate>
          {/* <GameGenre>First-person shooter</GameGenre> */}
          <GameGenre>{games[gameId].genre}</GameGenre>
          {/* <Modes>Multiplayer video game</Modes> */}
          <Modes>{games[gameId].modes}</Modes>
          {/* <Platforms>Microsoft Windows</Platforms> */}
          <Platforms>{games[gameId].platforms}</Platforms>
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
          {/* <DescriptionContent>
            consectetur adipiscing elit. Phasellus et mi vel purus vive.
            consectetur adipiscing elit. Phasellus et mi vel purus vive.
            consectetur adipiscing elit. Phasellus et mi vel purus vive.
            consectetur adipiscing elit. Phasellus et mi vel purus vive.
            consectetur adipiscing elit. Phasellus et mi vel puru.
          </DescriptionContent> */}
          <DescriptionContent>{games[gameId].description}</DescriptionContent>
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
