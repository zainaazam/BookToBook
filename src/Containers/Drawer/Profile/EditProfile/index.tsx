import React from 'react';
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
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CompositeNavigationProp} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerStackParamList} from '../../../../Navigation/StackNavigators/DrawerStack/DrawerStack';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProfileStackParamList} from '../../../../Navigation/StackNavigators/DrawerStack/ProfileStack';
import {useTheme} from 'styled-components';
import ArrowIcon from 'react-native-vector-icons/Feather';

const ProfileImage = require('../../../../../Assets/Images/profile.png');

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

  return (
    <MainContainer>
      <CustomHeader
        menu
        rightSide="backButton"
        title={'Edit Profile'}
        toggleDrawer={toggleDrawer}
      />
      <ChangeImage>
        <ProfileImageContainer source={ProfileImage} />
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
    </MainContainer>
  );
};

export default EditProfile;
