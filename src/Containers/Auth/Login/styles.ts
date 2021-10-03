import styled from 'styled-components/native';
import {LargeText, MediumText} from '../../../Components/CustomText';

export const MainContainer = styled.View`
  background-color: ${({theme}) => theme.colors.backgroundGray};
  flex: 1;
`;

export const Wrapper = styled.View`
  align-items: center;
`;

export const WomanImage = styled.Image`
  width: 300px;
  height: 220px;
  margin-top: 35px;
`;
export const HeyText = styled(LargeText)`
  margin: 30px 20px 0px;
  align-self: flex-start;
  font-weight: 700;
`;
export const HopToNewBooksText = styled(LargeText)`
  margin: 0px 20px;
  align-self: flex-start;
  font-weight: 700;
`;

export const DoNotHaveAccount = styled.View`
  flex-direction: row;
  margin: 0px 20px 15px;
  align-self: flex-start;
`;
export const HaveAccount = styled(MediumText)`
  color: ${({theme}) => theme.colors.lightGray};
  margin-right: 7px;
  font-size: 12px;
`;

export const SignUp = styled.TouchableOpacity``;

export const SignUpText = styled(MediumText)`
  color: ${({theme}) => theme.colors.orange};
  font-size: 12px;
`;

export const ForgetPasswordText = styled(MediumText)`
  color: ${({theme}) => theme.colors.lightGray};
  font-size: 12px;
  margin-right: 7px;
`;
export const ResetPassword = styled(MediumText)`
  color: ${({theme}) => theme.colors.orange};
  font-size: 12px;
`;

export const ForgetPassword = styled.View`
  flex-direction: row;
  margin: 10px 20px;
  align-self: flex-start;
`;
