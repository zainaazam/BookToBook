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
import {FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ProfileImage = require('../../../../../Assets/Images/profile.png');

type EditProfileScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerStackParamList, 'HomeStack'>,
  StackNavigationProp<ProfileStackParamList, 'EditProfile'>
>;

interface EditProfileProps {
  navigation: EditProfileScreenNavigationProp;
}

const EditProfile = ({navigation}: EditProfileProps) => {
  const {toggleDrawer} = navigation;
  const {colors} = useTheme();

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity>
        <Row>
          <Text>{item.title}</Text>
          <ArrowIconContainer>
            <ArrowIcon
              name="chevron-right"
              size={25}
              color={colors.arrowColor}
            />
          </ArrowIconContainer>
        </Row>
        <Divider />
      </TouchableOpacity>
    );
  };

  return (
    <MainContainer>
      <CustomHeader
        menu
        backButton
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
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[
            {id: '0', title: 'Name'},
            {id: '1', title: 'Email'},
            {id: '2', title: 'Phone Number'},
          ]}
          renderItem={renderItem}
          keyExtractor={item => item?.id}
        />
        {/* <Row>
          <Text>Name</Text>
          <ArrowIconContainer>
            <ArrowIcon
              name="chevron-right"
              size={25}
              color={colors.arrowColor}
            />
          </ArrowIconContainer>
        </Row>
        <Divider />
        <Row>
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
        <Row>
          <Text>Phone Number</Text>
          <ArrowIconContainer>
            <ArrowIcon
              name="chevron-right"
              size={25}
              color={colors.arrowColor}
            />
          </ArrowIconContainer>
        </Row>
        <Divider /> */}
      </ChangeInfoContainer>
    </MainContainer>
  );
};

export default EditProfile;
