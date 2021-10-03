import styled from 'styled-components/native';
import {LargeText, MediumText} from '../../../Components/CustomText';

export const SignUpText = styled(LargeText)`
  margin: 20px 20px 0px;
  align-self: flex-start;
  font-weight: 700;
`;
export const DiscoverWorldText = styled(LargeText)`
  margin: 0px 20px;
  align-self: flex-start;
  font-weight: 700;
`;

export const AlreadyHaveAccount = styled.View`
  flex-direction: row;
  margin: 15px 20px;
  align-self: flex-start;
`;
export const AlreadyHaveAccountText = styled(MediumText)`
  color: ${({theme}) => theme.colors.lightGray};
  margin-right: 5px;
`;

export const SignIn = styled.TouchableOpacity``;

export const SignInText = styled(MediumText)`
  color: ${({theme}) => theme.colors.orange};
`;
