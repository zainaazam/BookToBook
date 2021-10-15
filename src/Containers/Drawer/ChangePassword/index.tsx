import React, {useState} from 'react';
import Button from '../../../Components/Button';
import CustomHeader from '../../../Components/CustomHeader';
import CustomModal from '../../../Components/CustomModal';
import TextField from '../../../Components/TextField';
import {MainContainer} from './styles';

const ChangePassword = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <MainContainer>
      <CustomHeader menu title={'Change Password'} backButton />
      <TextField marginTop={50} placeHolder={'Old Password'} />
      <TextField marginTop={25} placeHolder={'New Password'} />
      <TextField marginTop={25} placeHolder={'Confirm Password'} />
      <Button title={'Save'} marginTop={60} onPress={toggleModal} />
      <CustomModal
        showModal={showModal}
        hideModal={toggleModal}
        message={'Your Password Has Been Successfully Changed!'}
      />
    </MainContainer>
  );
};

export default ChangePassword;
