import styled from 'styled-components/native';
import {LargeText} from '../../../Components/CustomText';

export const MainContainer = styled.View`
  background-color: ${({theme}) => theme.colors.backgroundGray};
  flex: 1;
  align-items: center;
`;
export const ComingSoonText = styled(LargeText)`
  background-color: ${({theme}) => theme.colors.lightOrange};
  align-items: center;
`;
