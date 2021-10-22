import styled from 'styled-components/native';
import {AboveMediumText} from '../../../../Components/CustomText';

export const MainContainer = styled.View`
  background-color: ${({theme}) => theme.colors.backgroundGray};
  flex: 1;
  align-items: center;
`;

export const ChangeImage = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const ProfileImageContainer = styled.Image`
  margin-top: 38px;
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

export const CameraIconContainer = styled.View`
  background-color: ${({theme}) => theme.colors.backgroundGray};
  border-radius: 80px;
  position: absolute;
  border-color: ${({theme}) => theme.colors.orange};
  border-width: 1px;
  border-style: solid;
  padding: 4.5px;
  top: 130px;
  left: 80px;
`;

export const ArrowIconContainer = styled.View`
  margin-top: 17px;
  margin-right: 8px;
`;

export const ChangeInfoContainer = styled.View`
  width: 300px;
  margin-top: 30px;
`;

export const Row = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Text = styled(AboveMediumText)`
  margin-top: 20px;
  margin-left: 8px;
`;

export const Divider = styled.View`
  background-color: ${({theme}) => theme.colors.placeholder};
  width: 300px;
  height: 1.5px;
  margin-bottom: 12px;
`;
