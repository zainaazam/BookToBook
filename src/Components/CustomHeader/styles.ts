import styled from 'styled-components/native';
import {Dimensions, Platform} from 'react-native';
import {AboveMediumText} from '../CustomText';
import {css} from 'styled-components/native';

const {width} = Dimensions.get('screen');

export const HeaderWrapper = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.colors.transparent};
  ${Platform.select({
    ios: css`
      padding: 13px 10px;
    `,
    android: css`
      padding: 20px 5px 13px;
    `,
  })};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleWrapper = styled.View``;

export const IconWrapper = styled.TouchableOpacity`
  width: ${width / 12}px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const HeaderTitle = styled(AboveMediumText)``;

export const EmptyView = styled.View`
  padding: 15px;
`;

export const LeftFragment = styled.View`
  margin-left: 15px;
`;

export const RightFragment = styled.View`
  margin-right: 15px;
`;

export const CircleWrapper = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: red;
  position: absolute;
  left: 16px;
  bottom: 15px;
  z-index: 5;
`;

export const Back = styled.TouchableOpacity``;

export const BackText = styled(AboveMediumText)`
  color: ${({theme}) => theme.colors.orange};
`;

export const Profile = styled.TouchableOpacity``;

export const ProfilePicture = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;
