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
  toggleDrawer?: () => void;
  rightSide?: string;
  title?: string;
  menu?: boolean;
  navigation?: () => void;
  preventingBackButton?: () => void;
}

const CustomHeader = ({
  toggleDrawer,
  rightSide,
  title,
  menu,
  navigation,
  preventingBackButton,
}: ButtonProps) => {
  //   const {colors} = useTheme();
  return (
    <HeaderWrapper>
      <LeftFragment>
        {menu ? (
          <IconWrapper onPress={toggleDrawer}>
            <MenuIcon name="menu" size={30} />
          </IconWrapper>
        ) : (
          <EmptyView />
        )}
      </LeftFragment>
      {title && <View>{title && <HeaderTitle>{title}</HeaderTitle>}</View>}
      <RightFragment>
        {rightSide === 'backButton' ? (
          <Back onPress={goBack}>
            <BackText>Back</BackText>
          </Back>
        ) : rightSide === 'preventingBackButton' ? (
          <Back onPress={preventingBackButton}>
            <BackText>Back</BackText>
          </Back>
        ) : (
          <Profile onPress={navigation}>
            <ProfilePicture source={profilePicture} />
          </Profile>
        )}
      </RightFragment>
    </HeaderWrapper>
  );
};
export default CustomHeader;
