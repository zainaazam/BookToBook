import {DrawerNavigationProp} from '@react-navigation/drawer';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import Button from '../../../Components/Button';
import CustomHeader from '../../../Components/CustomHeader';
import CustomModal from '../../../Components/CustomModal';
import TextField from '../../../Components/TextField';
import {goBack} from '../../../Navigation/RootNavigation';
import {ChangePasswordStackParamList} from '../../../Navigation/StackNavigators/DrawerStack/ChangePasswordStack';
import {DrawerStackParamList} from '../../../Navigation/StackNavigators/DrawerStack/DrawerStack';
import {MainContainer} from './styles';

type ChangePasswordScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerStackParamList, 'HomeStack'>,
  StackNavigationProp<ChangePasswordStackParamList, 'ChangePassword'>
>;

interface ChangePasswordProps {
  navigation: ChangePasswordScreenNavigationProp;
}

const ChangePassword = ({navigation}: ChangePasswordProps) => {
  const {toggleDrawer} = navigation;

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <MainContainer>
      <CustomHeader
        menu
        title={'Change Password'}
        backButton
        toggleDrawer={toggleDrawer}
      />
      <TextField marginTop={50} placeHolder={'Old Password'} />
      <TextField marginTop={25} placeHolder={'New Password'} />
      <TextField marginTop={25} placeHolder={'Confirm Password'} />
      <Button title={'Save'} marginTop={60} onPress={toggleModal} />
      <CustomModal
        showModal={showModal}
        hideModal={toggleModal}
        onOkPress={goBack}
        message={'Your Password Has Been Successfully Changed!'}
      />
    </MainContainer>
  );
};

export default ChangePassword;
