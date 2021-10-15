import React, {useState} from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Button from '../../../Components/Button';
import CustomHeader from '../../../Components/CustomHeader';
import {
  AddBookText,
  DescriptionBox,
  IconContainer,
  MainContainer,
  UploadImageBox,
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

type AddBookScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerStackParamList, 'HomeStack'>,
  StackNavigationProp<AddBookStackParamList, 'AddBook'>
>;

interface AddBookProps {
  navigation: AddBookScreenNavigationProp;
}

const AddBook = ({navigation}: AddBookProps) => {
  const {toggleDrawer} = navigation;

  const {colors} = useTheme();

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <ScrollView>
      <MainContainer>
        <CustomHeader
          menu
          title={'Add a Book'}
          backButton
          toggleDrawer={toggleDrawer}
        />
        <UploadImageBox>
          <IconContainer>
            <Icon name="image-plus" size={50} color="rgba(244, 113, 0, 0.7)" />
            <AddBookText>Add your Book Image</AddBookText>
          </IconContainer>
        </UploadImageBox>
        <TextField marginTop={25} placeHolder={'Name of Your Book'} />
        <TextField marginTop={25} placeHolder={'Author'} />
        <TextField marginTop={25} placeHolder={'Date of Publishing'} />
        <TextField marginTop={25} placeHolder={'Language'} />
        <TextField marginTop={25} placeHolder={'Genre'} />
        <TextField marginTop={25} placeHolder={'No. of Pages'} />
        <TextField marginTop={25} placeHolder={'Your Favorite Quote'} />
        <DescriptionBox>
          <TextInput
            placeholder="Description"
            placeholderTextColor={colors.placeholder}
            multiline
          />
        </DescriptionBox>
        <Button title={'Save'} marginTop={25} onPress={toggleModal} />
        <CustomModal
          showModal={showModal}
          hideModal={toggleModal}
          message={'Your Book Has Been Successfully Added!'}
        />
      </MainContainer>
    </ScrollView>
  );
};

export default AddBook;
