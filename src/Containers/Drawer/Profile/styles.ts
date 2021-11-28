import styled from 'styled-components/native';
import {LargeText, MediumText} from '../../../Components/CustomText';

export const MainContainer = styled.View`
  background-color: ${({theme}) => theme.colors.backgroundGray};
  flex: 1;
  align-items: center;
`;

export const UserInfoContainer = styled.View`
  align-items: center;
`;

export const ProfileImage = styled.Image`
  margin-top: 18px;
  border-radius: 100px;
  width: 115px;
  height: 115px;
`;

export const UserNameText = styled(LargeText)`
  margin-top: 25px;
  line-height: 30px;
  text-align: center;
`;

export const UserEmail = styled(MediumText)`
  color: ${({theme}) => theme.colors.lightGray};
  line-height: 22px;
  text-align: center;
`;

export const UserPhone = styled(MediumText)`
  color: ${({theme}) => theme.colors.blue};
  text-decoration: underline;
  line-height: 20px;
  text-align: center;
`;

export const GameListText = styled(MediumText)`
  color: ${({theme}) => theme.colors.orange};
  margin: 15px 20px;
  line-height: 20px;
  align-self: flex-start;
`;
