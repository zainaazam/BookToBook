import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import Button from '../../../Components/Button';
import CustomHeader from '../../../Components/CustomHeader';
import CustomModal from '../../../Components/CustomModal';
import TextField from '../../../Components/TextField';
import {AuthStackParamList} from '../../../Navigation/StackNavigators/AuthStack';
import {MainContainer} from './styles';

export type ResetPasswordScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'ResetPassword'
>;

interface ResetPasswordProps {
  navigation: ResetPasswordScreenNavigationProp;
}

const ResetPassword = ({navigation}: ResetPasswordProps) => {
  const {navigate} = navigation;

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <MainContainer>
      <CustomHeader title={'Reset Password'} backButton />
      <TextField marginTop={50} placeHolder={'Old Password'} />
      <TextField marginTop={25} placeHolder={'New Password'} />
      <TextField marginTop={25} placeHolder={'Confirm Password'} />
      <Button title={'Save'} marginTop={60} onPress={toggleModal} />
      <CustomModal
        showModal={showModal}
        hideModal={toggleModal}
        onOkPress={() => navigate('Login')}
        message={'Your Password Has Been Successfully Changed!'}
      />
    </MainContainer>
  );
};

export default ResetPassword;
