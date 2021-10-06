import styled from 'styled-components/native';
import {MediumText} from '../CustomText';
import Icon from 'react-native-vector-icons/Feather';

export const DrawerContainer = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.backgroundGray};
`;

export const Text = styled(MediumText)`
  font-size: 16px;
  color: ${({theme}) => theme.colors.black};
`;

export const Footer = styled.View`
  align-items: center;
  justify-content: center;
  min-height: 120px;
`;

export const DrawerItemWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 115%;
`;

export const Chevron = styled(Icon)`
  color: ${({theme}) => theme.colors.black};
`;

export const ChevronWrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
