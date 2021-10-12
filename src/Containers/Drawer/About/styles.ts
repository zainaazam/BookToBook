import styled from 'styled-components/native';
import {LargeText} from '../../../Components/CustomText';

export const MainContainer = styled.View`
  background-color: ${({theme}) => theme.colors.backgroundGray};
  flex: 1;
  align-items: center;
`;

export const B2Text = styled(LargeText)`
  color: ${({theme}) => theme.colors.blue};
  text-align: center;
  font-weight: 500;
  line-height: 32px;
  margin-top: 45px;
`;

export const TradingToolText = styled(LargeText)`
  color: ${({theme}) => theme.colors.blue};
  text-align: center;
  font-weight: 500;
  line-height: 32px;
`;

export const AboutText = styled(LargeText)`
  color: ${({theme}) => theme.colors.blue};
  text-align: center;
  width: 80%;
  font-weight: 500;
  line-height: 32px;
  margin-top: 35px;
`;