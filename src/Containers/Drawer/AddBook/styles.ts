import styled from 'styled-components/native';
import {MediumText, SmallText} from '../../../Components/CustomText';

export const MainContainer = styled.View`
  background-color: ${({theme}) => theme.colors.backgroundGray};
  flex: 1;
  align-items: center;
  padding-bottom: 20px;
`;

export const UploadedImage = styled.Image`
  width: 150px;
  height: 200px;
  margin-top: 20px;
  border-radius: 10px;
`;

export const UploadImage = styled.View`
  width: 150px;
  height: 200px;
  margin-top: 20px;
  border-radius: 10px;
  border-style: dashed;
  border-width: 2px;
  /* border-color: 'rgba(251, 118, 62, 0.5)'; */
  border-color: 'rgba(252, 163, 17, 0.5)';
  align-items: center;
  justify-content: center;
`;

export const AddBookText = styled(MediumText)`
  width: 80px;
  line-height: 21px;
  font-size: 18px;
  margin-top: 15px;
  /* color: 'rgba(251, 118, 62, 0.5)'; */
  color: 'rgba(252, 163, 17, 0.5)';
  text-align: center;
`;

export const Description = styled.TextInput<{
  error?: string;
  focus?: boolean;
}>`
  background-color: ${({theme}) => theme.colors.white};
  height: 220px;
  width: 320px;
  margin-top: ${props => (props?.error ? '0px' : '30px')};
  align-items: flex-start;
  padding: 15px;
  border-radius: 10px;
  border-width: 0.5px;
  border-color: ${props =>
    props?.error
      ? props?.theme.colors.alertRed
      : props?.focus
      ? props?.theme.colors.blue
      : props?.theme.colors.white};
`;

export const ErrorText = styled(SmallText)`
  color: ${({theme}) => theme.colors.alertRed};
  width: auto;
  margin: 25px 30px 2px 0px;
  align-self: flex-end;
`;
