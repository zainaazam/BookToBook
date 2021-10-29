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
import {
  FinishLoading,
  StartLoading,
} from '../../../../../Store/Actions/Configs/ConfigsActions';

type ChangeInfoScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerStackParamList, 'HomeStack'>,
  StackNavigationProp<ProfileStackParamList, 'ChangeEmail'>
>;

interface ChangeInfoProps {
  navigation: ChangeInfoScreenNavigationProp;
}

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const ChangeEmail = ({navigation}: ChangeInfoProps) => {
  const {toggleDrawer} = navigation;
  const {navigate} = navigation;
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const {isLoading} = useSelector<RootState>(
    state => state.ConfigsReducer,
  ) as ConfigsReducer;

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email!').required('Email is required!'),
  });

  const {errors, values, touched, handleBlur, handleChange, handleSubmit} =
    useFormik({
      initialValues: {
        email: '',
      },
      // onSubmit: async submittedValues => {
      onSubmit: () => {
        Keyboard.dismiss();
        dispatch(StartLoading());
        setTimeout(() => {
          toggleModal();
          dispatch(FinishLoading());
        }, 500);
      },
      validationSchema: ValidationSchema,
    });

  return (
    <DismissKeyboard>
      <MainContainer>
        <CustomHeader
          title={'Change Email'}
          rightSide="backButton"
          menu
          toggleDrawer={toggleDrawer}
        />
        <TextField
          value={values.email}
          error={touched.email && errors.email}
          onChange={handleChange('email') as (text: string) => void}
          onBlur={() => handleBlur('email')}
          placeHolder={'New Email'}
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
          hideModal={toggleModal}
          onOkPress={() => navigate('EditProfile')}
          message={'Your Email Has Been Successfully Changed!'}
        />
      </MainContainer>
    </DismissKeyboard>
  );
};

export default ChangeEmail;
