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
  const dispatch = useDispatch();
  const {isLoading} = useSelector<RootState>(
    state => state.ConfigsReducer,
  ) as ConfigsReducer;

  const [selectedGames, setSelectedGames] = useState<string[] | []>([]);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    dispatch(StartLoading());
    setTimeout(() => {
      setShowModal(!showModal);
      dispatch(FinishLoading());
    }, 500);
  };

  const navigateToGameDetails = () => {
    navigation.push('GameDetails', {withoutRequesting: true});
  };

  const renderItem = ({item}) => {
    return (
      <ChoosingMultiCard
        gameName={item.gameName}
        developer={item.developer}
        description={item.description}
        image={item.image}
        id={item.id}
        selectedGames={selectedGames}
        setSelectedGames={setSelectedGames}
        onReadMorePress={navigateToGameDetails}
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
        title={'Exchange'}
        menu
        toggleDrawer={toggleDrawer}
        rightSide="backButton"
      />
      <ChooseText>Choose from your games :</ChooseText>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
      />
      <Button
        title={'Send Request'}
        onPress={toggleModal}
        buttonDisabled={selectedGames.length === 0}
        loading={isLoading}
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
