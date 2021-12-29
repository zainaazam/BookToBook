import React, {useRef, useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../../Components/Button';
import CustomHeader from '../../../Components/CustomHeader';
import {
  AddGameText,
  Description,
  MainContainer,
  UploadImage,
  ErrorText,
  UploadedImage,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextField from '../../../Components/TextField';
import {useTheme} from 'styled-components/native';
import CustomModal from '../../../Components/CustomModal';
import {CompositeNavigationProp} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerStackParamList} from '../../../Navigation/StackNavigators/DrawerStack/DrawerStack';
import {StackNavigationProp} from '@react-navigation/stack';
import {AddGameStackParamList} from '../../../Navigation/StackNavigators/DrawerStack/AddGameStack';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import RBSheet from 'react-native-raw-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import {ButtonsWrapper} from '../Profile/EditProfile/styles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../Store';
import {ConfigsReducer} from '../../../Store/Reducers/Configs/Configs.interface';
import {
  FinishLoading,
  AddNewGame,
  StartLoading,
} from '../../../Store/Actions/Configs/ConfigsActions';
import {Game} from '../../../Types';
import {AuthReducer} from '../../../Store/Reducers/Auth/AuthReducer.interfaces';

const avatar =
  'https://www.mhh.de/fileadmin/mhh/studierendensekretariat/bilder/Stephanie_Edwards_from_Pixabay_Person_icon.png';

type AddGameScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerStackParamList, 'HomeStack'>,
  StackNavigationProp<AddGameStackParamList, 'AddGame'>
>;

interface AddGameProps {
  navigation: AddGameScreenNavigationProp;
}

const AddGame = ({navigation}: AddGameProps) => {
  const {toggleDrawer} = navigation;
  const {navigate} = navigation;
  const dispatch = useDispatch();
  const {isLoading, games, id} = useSelector<RootState>(
    state => state.ConfigsReducer,
  ) as ConfigsReducer;

  const {account} = useSelector<RootState>(
    state => state.AuthReducer,
  ) as AuthReducer;

  const {colors} = useTheme();

  const [focus, setFocus] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const refRBSheet = useRef<RBSheet>(null);
  const openRBSheet = () => refRBSheet.current?.open();
  const closeRBSheet = () => refRBSheet.current?.close();

  const [image, setImage] = useState(avatar);
  const [isImage, setIsImage] = useState(false);

  const handleAddGame = (inputs: Game) => {
    console.log(games);
    dispatch(AddNewGame(inputs));
  };

  const chooseFromCamera = () => {
    ImagePicker.openCamera({
      width: 150,
      height: 200,
      cropping: true,
    }).then(photo => {
      setImage(photo.path);
      setIsImage(true);
      closeRBSheet();
    });
  };

  const chooseFromGallery = () => {
    ImagePicker.openPicker({
      width: 150,
      height: 200,
      cropping: true,
    }).then(photo => {
      setImage(photo.path);
      setIsImage(true);
      closeRBSheet();
    });
  };

  const ValidationSchema = Yup.object().shape({
    gameName: Yup.string().trim().required('Game name is Required!'),
    developer: Yup.string().trim().required('Developer name is required!'),
    description: Yup.string().trim().required('Please describe the game!'),
  });

  const {errors, values, touched, handleBlur, handleChange, handleSubmit} =
    useFormik({
      initialValues: {
        gameName: '',
        developer: '',
        description: '',
        genre: '',
        image: '',
        modes: '',
        platforms: '',
        publishDate: '',
      },
      onSubmit: async submittedValues => {
        // onSubmit: () => {

        dispatch(StartLoading());
        setTimeout(() => {
          console.log(id);
          handleAddGame({
            idG: id,
            gameName: submittedValues.gameName,
            developer: submittedValues.developer,
            description: submittedValues.description,
            genre: submittedValues.genre,
            image: image,
            modes: submittedValues.modes,
            platforms: submittedValues.platforms,
            publishDate: submittedValues.publishDate,
            publisher: account.name,
          });
          if (handleAddGame) {
            toggleModal();
            dispatch(FinishLoading());
          }
        }, 500);
      },
      validationSchema: ValidationSchema,
    });

  return (
    <ScrollView>
      <MainContainer>
        <CustomHeader
          menu
          title={'Add a Game'}
          rightSide="backButton"
          toggleDrawer={toggleDrawer}
        />
        <TouchableOpacity onPress={openRBSheet}>
          {isImage ? (
            <UploadedImage source={{uri: image}} />
          ) : (
            <UploadImage>
              <Icon
                name="image-plus"
                size={50}
                // color="rgba(251, 118, 62, 0.5)"
                color="rgba(252, 163, 17, 0.5)"
              />
              <AddGameText>Add your Game Image</AddGameText>
            </UploadImage>
          )}
        </TouchableOpacity>
        <TextField
          value={values.gameName}
          error={touched.gameName && errors.gameName}
          onChange={handleChange('gameName') as (text: string) => void}
          onBlur={() => handleBlur('gameName')}
          marginTop={25}
          placeHolder={'Name of Your Game'}
        />
        <TextField
          value={values.developer}
          error={touched.developer && errors.developer}
          onChange={handleChange('developer') as (text: string) => void}
          onBlur={() => handleBlur('developer')}
          marginTop={25}
          placeHolder={'Developer'}
        />
        <TextField
          value={values.publishDate}
          error={touched.publishDate && errors.publishDate}
          onChange={handleChange('publishDate') as (text: string) => void}
          onBlur={() => handleBlur('publishDate')}
          marginTop={25}
          placeHolder={'Date of Publishing'}
        />
        <TextField
          value={values.platforms}
          error={touched.platforms && errors.platforms}
          onChange={handleChange('platforms') as (text: string) => void}
          onBlur={() => handleBlur('platforms')}
          marginTop={25}
          placeHolder={'Platforms'}
        />
        <TextField
          value={values.genre}
          error={touched.genre && errors.genre}
          onChange={handleChange('genre') as (text: string) => void}
          onBlur={() => handleBlur('genre')}
          marginTop={25}
          placeHolder={'Genre'}
        />
        <TextField
          value={values.modes}
          error={touched.modes && errors.modes}
          onChange={handleChange('modes') as (text: string) => void}
          onBlur={() => handleBlur('modes')}
          marginTop={25}
          placeHolder={'Modes'}
        />
        {/* <TextField marginTop={25} placeHolder={'Your Favorite Quote'} /> */}
        {touched.description && errors.description ? (
          <ErrorText>{errors.description}</ErrorText>
        ) : null}
        <Description
          value={values.description}
          error={touched.description && errors.description}
          onChangeText={handleChange('description') as (text: string) => void}
          onBlur={() => {
            setFocus(false);
            () => handleBlur('description');
          }}
          placeholder="Description"
          placeholderTextColor={colors.placeholder}
          multiline
          textAlignVertical={'top'}
          onFocus={() => setFocus(true)}
          focus={focus}
        />
        <Button
          title={'Save'}
          marginTop={25}
          onPress={handleSubmit}
          loading={isLoading}
        />
        <CustomModal
          showModal={showModal}
          hideModal={toggleModal}
          onOkPress={() => navigate('HomeStack')}
          message={'Your Game Has Been Successfully Added!'}
        />
        <RBSheet
          ref={refRBSheet}
          closeOnPressBack={true}
          animationType={'slide'}
          height={170}
          customStyles={{
            container: {
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              backgroundColor: colors.backgroundGray,
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.1,
              shadowRadius: 10,
              elevation: 7,
            },
            wrapper: {
              backgroundColor: 'rgba(205, 205, 205, 0.5)',
            },
          }}>
          <ButtonsWrapper>
            <Button
              title={'Camera'}
              marginTop={15}
              onPress={chooseFromCamera}
            />
            <Button
              title={'Gallery'}
              marginTop={15}
              orange
              onPress={chooseFromGallery}
            />
          </ButtonsWrapper>
        </RBSheet>
      </MainContainer>
    </ScrollView>
  );
};

export default AddGame;
