import React, {useRef, useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../../Components/Button';
import CustomHeader from '../../../Components/CustomHeader';
import {
  AddBookText,
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
import {AddBookStackParamList} from '../../../Navigation/StackNavigators/DrawerStack/AddBookStack';
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
  StartLoading,
} from '../../../Store/Actions/Configs/ConfigsActions';

const avatar =
  'https://www.mhh.de/fileadmin/mhh/studierendensekretariat/bilder/Stephanie_Edwards_from_Pixabay_Person_icon.png';

type AddBookScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerStackParamList, 'HomeStack'>,
  StackNavigationProp<AddBookStackParamList, 'AddBook'>
>;

interface AddBookProps {
  navigation: AddBookScreenNavigationProp;
}

const AddBook = ({navigation}: AddBookProps) => {
  const {toggleDrawer} = navigation;
  const {navigate} = navigation;
  const dispatch = useDispatch();
  const {isLoading} = useSelector<RootState>(
    state => state.ConfigsReducer,
  ) as ConfigsReducer;

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
    bookName: Yup.string().trim().required("Book's name is Required!"),
    author: Yup.string().trim().required('Author name is required!'),
    description: Yup.string().trim().required('Please describe the book!'),
  });

  const {errors, values, touched, handleBlur, handleChange, handleSubmit} =
    useFormik({
      initialValues: {
        bookName: '',
        author: '',
        description: '',
      },
      // onSubmit: async submittedValues => {
      onSubmit: () => {
        dispatch(StartLoading());
        setTimeout(() => {
          toggleModal();
          dispatch(FinishLoading());
        }, 500);
      },
      validationSchema: ValidationSchema,
    });

  return (
    <ScrollView>
      <MainContainer>
        <CustomHeader
          menu
          title={'Add a Book'}
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
              <AddBookText>Add your Book Image</AddBookText>
            </UploadImage>
          )}
        </TouchableOpacity>
        <TextField
          value={values.bookName}
          error={touched.bookName && errors.bookName}
          onChange={handleChange('bookName') as (text: string) => void}
          onBlur={() => handleBlur('bookName')}
          marginTop={25}
          placeHolder={'Name of Your Book'}
        />
        <TextField
          value={values.author}
          error={touched.author && errors.author}
          onChange={handleChange('author') as (text: string) => void}
          onBlur={() => handleBlur('author')}
          marginTop={25}
          placeHolder={'Author'}
        />
        <TextField marginTop={25} placeHolder={'Date of Publishing'} />
        <TextField marginTop={25} placeHolder={'Language'} />
        <TextField marginTop={25} placeHolder={'Genre'} />
        <TextField marginTop={25} placeHolder={'No. of Pages'} />
        <TextField marginTop={25} placeHolder={'Your Favorite Quote'} />
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
          message={'Your Book Has Been Successfully Added!'}
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

export default AddBook;
