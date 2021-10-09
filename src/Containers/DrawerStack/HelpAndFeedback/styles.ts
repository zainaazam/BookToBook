import styled from 'styled-components/native';
import {LargeText} from '../../../Components/CustomText';

export const MainContainer = styled.View`
  background-color: ${({theme}) => theme.colors.backgroundGray};
  flex: 1;
  align-items: center;
`;
export const ComingSoonText = styled(LargeText)`
  color: 'rgba(251,118,62,0.6)';
  align-items: center;
`;
export const MarginSpace = styled.View`
  margin-bottom: 80px;
`;
