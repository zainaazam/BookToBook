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
import {goBack} from '../../../../Navigation/RootNavigation';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../Store';
import {ConfigsReducer} from '../../../../Store/Reducers/Configs/Configs.interface';
import {
  FinishLoading,
  StartLoading,
} from '../../../../Store/Actions/Configs/ConfigsActions';

const GameImage1 = require('../../../../../Assets/Images/first-game.jpg');
const GameImage2 = require('../../../../../Assets/Images/second-game.jpg');
const GameImage3 = require('../../../../../Assets/Images/third-game.jpg');

type ChooseToExchangeScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerStackParamList, 'HomeStack'>,
  StackNavigationProp<NotificationsStackParamList, 'ChooseToExchange'>
>;

interface ChooseToExchangeProps {
  navigation: ChooseToExchangeScreenNavigationProp;
}

const ChooseToExchange = ({navigation}: ChooseToExchangeProps) => {
  const {toggleDrawer} = navigation;
  const {navigate} = navigation;
  const dispatch = useDispatch();
  const {isLoading} = useSelector<RootState>(
    state => state.ConfigsReducer,
  ) as ConfigsReducer;

  const handlePressed = () => {
    dispatch(StartLoading());
    setTimeout(() => {
      navigate('Profile', {
        asOthers: true,
        backButtonType: 'preventingBackButton',
      });
      dispatch(FinishLoading());
    }, 500);
  };

  const [selectedGame, setSelectedGame] = useState<string>('');
  const renderItem = ({item}) => {
    return (
      <ChoosingCard
        gameName={item.gameName}
        developer={item.developer}
        description={item.description}
        image={item.image}
        id={item.id}
        selectedGame={selectedGame}
        setSelectedGame={setSelectedGame}
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
        rightSide="backButton"
        title={'Choose to Exchange'}
        menu
        toggleDrawer={toggleDrawer}
      />
      <ChooseText>Please choose one game to exchange:</ChooseText>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
      />
      <Button
        title={'Approve'}
        marginTop={20}
        onPress={handlePressed}
        buttonDisabled={selectedGame === ''}
        loading={isLoading}
      />
      <Button title={'Reject'} orange marginTop={10} onPress={goBack} />
    </MainContainer>
  );
};

export default ChooseToExchange;
