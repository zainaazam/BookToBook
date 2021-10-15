import styled from 'styled-components/native';
import {MediumText} from '../../../Components/CustomText';

export const MainContainer = styled.View`
  background-color: ${({theme}) => theme.colors.backgroundGray};
  flex: 1;
  align-items: center;
  padding-bottom: 20px;
`;

export const UploadImageBox = styled.TouchableOpacity``;

export const IconContainer = styled.View`
  width: 145px;
  height: 195px;
  margin-top: 30px;
  border-radius: 10px;
  border-style: dashed;
  border-width: 2px;
  border-color: 'rgba(251, 118, 62, 0.75)';
  align-items: center;
  justify-content: center;
`;

export const AddBookText = styled(MediumText)`
  width: 80px;
  line-height: 21px;
  font-size: 18px;
  margin-top: 15px;
  color: 'rgba(251, 118, 62, 0.75)';
  text-align: center;
`;

export const DescriptionBox = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  height: 220px;
  width: 320px;
  align-items: flex-start;
  padding: 15px;
  margin-top: 30px;
  border-radius: 10px;
`;
