import styled from 'styled-components/native';
import {LargeText} from '../../../Components/CustomText';

export const IconContainer = styled.View`
  margin-top: 90px;
`;

export const MainContainer = styled.View`
  background-color: ${({theme}) => theme.colors.backgroundGray};
  flex: 1;
  align-items: center;
`;
export const ComingSoonText = styled(LargeText)`
  color: 'rgba(252, 163, 17,0.6)';
  /* color: 'rgba(251,118,62,0.6)'; */
  align-items: center;
`;
