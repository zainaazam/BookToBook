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
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../Store';
import {ConfigsReducer} from '../../../../../Store/Reducers/Configs/Configs.interface';
import {AuthReducer} from '../../../../../Store/Reducers/Auth/AuthReducer.interfaces';
import {UpdateAccountInputs} from '../../../../../Store/Types/Auth/Auth.action-types';
import {UpdateAccountAction} from '../../../../../Store/Actions';

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
  const dispatch = useDispatch();
  const {isLoading} = useSelector<RootState>(
    state => state.ConfigsReducer,
  ) as ConfigsReducer;

  const {account} = useSelector<RootState>(
    state => state.AuthReducer,
  ) as AuthReducer;

  const toggleModal = (state: boolean) => {
    setShowModal(state);
  };

  const handleEditProfile = (inputs: UpdateAccountInputs) => {
    dispatch(UpdateAccountAction(inputs, toggleModal));
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
      onSubmit: async submittedValues => {
        // onSubmit: () => {
        const variables: UpdateAccountInputs = {
          id: account?.id,
          deleted: false,
        };
        if (submittedValues.username) {
          variables.name = submittedValues.username;
        }

        handleEditProfile(variables);
        Keyboard.dismiss();
        // dispatch(StartLoading());
        // setTimeout(() => {
        //   toggleModal();
        //   dispatch(FinishLoading());
        // }, 500);
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
        <Button
          title={'Save'}
          marginTop={40}
          onPress={handleSubmit}
          loading={isLoading}
        />
        <CustomModal
          showModal={showModal}
          hideModal={() => toggleModal(false)}
          onOkPress={() => navigate('EditProfile')}
          message={'Your Username Has Been Successfully Changed!'}
        />
      </MainContainer>
    </DismissKeyboard>
  );
};

export default ChangeUsername;
