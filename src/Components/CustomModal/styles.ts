import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import {MediumText} from '../CustomText';

export const ModalView = styled(Modal)`
  align-self: center;
`;

export const Container = styled.View`
  width: 265px;
  height: 175px;
  background-color: ${({theme}) => theme.colors.backgroundGray};
  border-radius: 40px;
  align-items: center;
  justify-content: space-between;
`;

export const DoneIconContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.green};
  align-items: center;
  justify-content: center;
`;

export const ModalMessage = styled(MediumText)`
  text-align: center;
  width: 200px;
  color: ${({theme}) => theme.colors.orange};
  margin-top: 5px;
`;

export const OkButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.blue};
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;

export const OkText = styled(MediumText)`
  color: ${({theme}) => theme.colors.white};
`;

export const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
