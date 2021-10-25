import {DrawerNavigationProp} from '@react-navigation/drawer';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import Button from '../../../../../Components/Button';
import CustomHeader from '../../../../../Components/CustomHeader';
import CustomModal from '../../../../../Components/CustomModal';
import TextField from '../../../../../Components/TextField';
import {DrawerStackParamList} from '../../../../../Navigation/StackNavigators/DrawerStack/DrawerStack';
import {ProfileStackParamList} from '../../../../../Navigation/StackNavigators/DrawerStack/ProfileStack';
import {MainContainer} from './styles';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

type ChangeInfoScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerStackParamList, 'HomeStack'>,
  StackNavigationProp<ProfileStackParamList, 'ChangeUsername'>
>;

interface ChangeInfoProps {
  navigation: ChangeInfoScreenNavigationProp;
}

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const ChangeUsername = ({navigation}: ChangeInfoProps) => {
  const {toggleDrawer} = navigation;
  const {navigate} = navigation;
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const ValidationSchema = Yup.object().shape({
    username: Yup.string()
      .trim()
      .min(3, 'Invalid name!')
      .required('Username is Required!'),
  });

  const {errors, values, touched, handleBlur, handleChange, handleSubmit} =
    useFormik({
      initialValues: {
        username: '',
      },
      // onSubmit: async submittedValues => {
      onSubmit: () => {
        Keyboard.dismiss();
        setTimeout(() => {
          toggleModal();
        }, 250);
      },
      validationSchema: ValidationSchema,
    });

  return (
    <DismissKeyboard>
      <MainContainer>
        <CustomHeader
          title={'Change Username'}
          rightSide="backButton"
          menu
          toggleDrawer={toggleDrawer}
        />
        <TextField
          value={values.username}
          error={touched.username && errors.username}
          onChange={handleChange('username') as (text: string) => void}
          onBlur={() => handleBlur('username')}
          placeHolder={'New Username'}
          marginTop={50}
        />
        <Button title={'Save'} marginTop={40} onPress={handleSubmit} />
        <CustomModal
          showModal={showModal}
          hideModal={toggleModal}
          onOkPress={() => navigate('EditProfile')}
          message={'Your Username Has Been Successfully Changed!'}
        />
      </MainContainer>
    </DismissKeyboard>
  );
};

export default ChangeUsername;
