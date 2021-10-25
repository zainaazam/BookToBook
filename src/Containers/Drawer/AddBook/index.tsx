import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../../Components/Button';
import CustomHeader from '../../../Components/CustomHeader';
import {
  AddBookText,
  Description,
  MainContainer,
  UploadImage,
  ErrorText,
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

  const {colors} = useTheme();

  const [focus, setFocus] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
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
        toggleModal();
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
        <UploadImage>
          <Icon name="image-plus" size={50} color="rgba(251, 118, 62, 0.5)" />
          <AddBookText>Add your Book Image</AddBookText>
        </UploadImage>
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
        {errors.description ? (
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
        <Button title={'Save'} marginTop={25} onPress={handleSubmit} />
        <CustomModal
          showModal={showModal}
          hideModal={toggleModal}
          onOkPress={() => navigate('HomeStack')}
          message={'Your Book Has Been Successfully Added!'}
        />
      </MainContainer>
    </ScrollView>
  );
};

export default AddBook;
