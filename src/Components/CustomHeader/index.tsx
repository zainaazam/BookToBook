import React from 'react';
import {View} from 'react-native';
import {
  EmptyView,
  HeaderTitle,
  HeaderWrapper,
  IconWrapper,
  LeftFragment,
  RightFragment,
  Back,
  BackText,
  ProfilePicture,
  Profile,
} from './styles';
import {goBack} from '../../Navigation/RootNavigation';
import MenuIcon from 'react-native-vector-icons/MaterialIcons';

const profilePicture = require('../../../Assets/Images/profile.png');

interface ButtonProps {
  backButton?: boolean;
  title?: string;
  menu?: boolean;
}

const CustomHeader = ({backButton, title, menu}: ButtonProps) => {
  //   const {colors} = useTheme();
  return (
    <HeaderWrapper>
      <LeftFragment>
        {menu ? (
          <IconWrapper>
            <MenuIcon name="menu" size={30} />
          </IconWrapper>
        ) : (
          <EmptyView />
        )}
      </LeftFragment>
      {title && <View>{title && <HeaderTitle>{title}</HeaderTitle>}</View>}
      <RightFragment>
        {backButton ? (
          <Back onPress={goBack}>
            <BackText>Back</BackText>
          </Back>
        ) : (
          <Profile>
            <ProfilePicture source={profilePicture} />
          </Profile>
        )}
      </RightFragment>
    </HeaderWrapper>
  );
};
export default CustomHeader;
