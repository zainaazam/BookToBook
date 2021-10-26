import React, {useRef, useState} from 'react';
import CustomHeader from '../../../../Components/CustomHeader';
import {
  ChangeImage,
  MainContainer,
  ProfileImageContainer,
  CameraIconContainer,
  ChangeInfoContainer,
  ArrowIconContainer,
  Text,
  Divider,
  Row,
  ButtonsWrapper,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CompositeNavigationProp} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerStackParamList} from '../../../../Navigation/StackNavigators/DrawerStack/DrawerStack';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProfileStackParamList} from '../../../../Navigation/StackNavigators/DrawerStack/ProfileStack';
import {useTheme} from 'styled-components';
import ArrowIcon from 'react-native-vector-icons/Feather';
import RBSheet from 'react-native-raw-bottom-sheet';
import Button from '../../../../Components/Button';
import ImagePicker from 'react-native-image-crop-picker';

const avatar =
  'https://www.mhh.de/fileadmin/mhh/studierendensekretariat/bilder/Stephanie_Edwards_from_Pixabay_Person_icon.png';

type EditProfileScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerStackParamList, 'HomeStack'>,
  StackNavigationProp<ProfileStackParamList, 'EditProfile'>
>;

interface EditProfileProps {
  navigation: EditProfileScreenNavigationProp;
}

export const EditProfile = ({navigation}: EditProfileProps) => {
  const {toggleDrawer} = navigation;
  const {navigate} = navigation;
  const {colors} = useTheme();

  const refRBSheet = useRef<RBSheet>(null);
  const openRBSheet = () => refRBSheet.current?.open();
  const closeRBSheet = () => refRBSheet.current?.close();

  const [image, setImage] = useState(avatar);

  const chooseFromCamera = () => {
    ImagePicker.openCamera({
      width: 120,
      height: 120,
      cropping: true,
    }).then(photo => {
      setImage(photo.path);
      closeRBSheet();
    });
  };

  const chooseFromGallery = () => {
    ImagePicker.openPicker({
      width: 120,
      height: 120,
      cropping: true,
    }).then(photo => {
      setImage(photo.path);
      closeRBSheet();
    });
  };

  return (
    <MainContainer>
      <CustomHeader
        menu
        rightSide="backButton"
        title={'Edit Profile'}
        toggleDrawer={toggleDrawer}
      />
      <ChangeImage onPress={openRBSheet}>
        <ProfileImageContainer
          source={{
            uri: image,
          }}
        />
        <CameraIconContainer>
          <Icon name={'camera'} size={15} color={colors.orange} />
        </CameraIconContainer>
      </ChangeImage>
      <ChangeInfoContainer>
        <Row onPress={() => navigate('ChangeUsername')}>
          <Text>Username</Text>
          <ArrowIconContainer>
            <ArrowIcon
              name="chevron-right"
              size={25}
              color={colors.arrowColor}
            />
          </ArrowIconContainer>
        </Row>
        <Divider />
        <Row onPress={() => navigate('ChangeEmail')}>
          <Text>Email</Text>
          <ArrowIconContainer>
            <ArrowIcon
              name="chevron-right"
              size={25}
              color={colors.arrowColor}
            />
          </ArrowIconContainer>
        </Row>
        <Divider />
        <Row onPress={() => navigate('ChangePhone')}>
          <Text>Phone Number</Text>
          <ArrowIconContainer>
            <ArrowIcon
              name="chevron-right"
              size={25}
              color={colors.arrowColor}
            />
          </ArrowIconContainer>
        </Row>
        <Divider />
      </ChangeInfoContainer>
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
          <Button title={'Camera'} marginTop={15} onPress={chooseFromCamera} />
          <Button
            title={'Gallery'}
            marginTop={15}
            orange
            onPress={chooseFromGallery}
          />
        </ButtonsWrapper>
      </RBSheet>
    </MainContainer>
  );
};

export default EditProfile;
