import styled from 'styled-components/native';
import {MediumText} from '../../../Components/CustomText';

export const MainContainer = styled.View`
  background-color: ${({theme}) => theme.colors.backgroundGray};
  flex: 1;
  align-items: center;
`;
export const B2Text = styled(MediumText)`
  color: ${({theme}) => theme.colors.blue};
  text-align: center;
  margin: 70px 32px 0px 32px;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
`;
export const TradingToolText = styled(MediumText)`
  color: ${({theme}) => theme.colors.blue};
  text-align: center;
  margin: 0px 32px 0px 32px;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
`;

export const AboutText = styled(MediumText)`
  color: ${({theme}) => theme.colors.blue};
  text-align: center;
  margin: 35px 32px 0px 32px;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
`;
