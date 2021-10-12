import styled from 'styled-components/native';
import {AboveMediumText} from '../../../../Components/CustomText';

export const MainContainer = styled.View`
  background-color: ${({theme}) => theme.colors.backgroundGray};
  flex: 1;
  align-items: center;
  padding-bottom: 20px;
`;

export const ChooseText = styled(AboveMediumText)`
  color: ${({theme}) => theme.colors.orange};
  align-self: flex-start;
  margin: 20px 0px;
  margin-left: 6.5%;
`;
