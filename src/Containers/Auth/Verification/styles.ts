import styled from 'styled-components/native';
import {MediumText} from '../../../Components/CustomText';

export const MainContainer = styled.View`
  background-color: ${({theme}) => theme.colors.backgroundGray};
  flex: 1;
  align-items: center;
`;

export const EnterEmailText = styled(MediumText)`
  color: ${({theme}) => theme.colors.orange};
  margin-top: 45px;
  margin-bottom: 20px;
  align-self: flex-start;
  margin-left: 25px;
`;
