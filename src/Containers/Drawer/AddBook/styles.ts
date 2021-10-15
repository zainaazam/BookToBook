import styled from 'styled-components/native';
import {MediumText} from '../../../Components/CustomText';

export const MainContainer = styled.View`
  background-color: ${({theme}) => theme.colors.backgroundGray};
  flex: 1;
  align-items: center;
  padding-bottom: 20px;
`;

export const UploadImage = styled.TouchableOpacity`
  width: 150px;
  height: 200px;
  margin-top: 20px;
  border-radius: 10px;
  border-style: dashed;
  border-width: 2px;
  border-color: 'rgba(251, 118, 62, 0.5)';
  align-items: center;
  justify-content: center;
`;

export const AddBookText = styled(MediumText)`
  width: 80px;
  line-height: 21px;
  font-size: 18px;
  margin-top: 15px;
  color: 'rgba(251, 118, 62, 0.5)';
  text-align: center;
`;

export const Description = styled.TextInput`
  background-color: ${({theme}) => theme.colors.white};
  height: 220px;
  width: 320px;
  align-items: flex-start;
  padding: 15px;
  margin-top: 30px;
  border-radius: 10px;
`;
