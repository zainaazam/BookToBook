import {DrawerNavigationProp} from '@react-navigation/drawer';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import Button from '../../../../Components/Button';
import CustomHeader from '../../../../Components/CustomHeader';
import CustomModal from '../../../../Components/CustomModal';
import TextField from '../../../../Components/TextField';
import {DrawerStackParamList} from '../../../../Navigation/StackNavigators/DrawerStack/DrawerStack';
import {ProfileStackParamList} from '../../../../Navigation/StackNavigators/DrawerStack/ProfileStack';
import {MainContainer} from './styles';

type ChangeInfoScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerStackParamList, 'HomeStack'>,
  StackNavigationProp<ProfileStackParamList, 'ChangeInfo'>
>;

type ChangeInfoScreenRouteProp = RouteProp<ProfileStackParamList, 'ChangeInfo'>;

interface ChangeInfoProps {
  navigation: ChangeInfoScreenNavigationProp;
  route: ChangeInfoScreenRouteProp;
}

const ChangeInfo = ({navigation, route}: ChangeInfoProps) => {
  const {toggleDrawer} = navigation;
  const {navigate} = navigation;
  const {type} = route.params;
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <MainContainer>
      <CustomHeader
        title={'Change ' + type}
        backButton
        menu
        toggleDrawer={toggleDrawer}
      />
      <TextField placeHolder={'New ' + type} marginTop={50} />
      <Button title={'Save'} marginTop={40} onPress={toggleModal} />
      <CustomModal
        showModal={showModal}
        hideModal={toggleModal}
        onOkPress={() => navigate('EditProfile')}
        message={'Your ' + type + ' Has Been Successfully Changed!'}
      />
    </MainContainer>
  );
};

export default ChangeInfo;
