import styled from 'styled-components/native';
import {AboveMediumText} from '../CustomText';

export const Wrapper = styled.TouchableOpacity``;

export const Container = styled.View<{
  isRead?: boolean;
}>`
  width: 100%;
  background-color: ${props =>
    props.isRead
      ? ({theme}) => theme.colors.transparent
      : ({theme}) => theme.colors.lightBlue2};
  margin-bottom: 0.5px;
  padding: 15px 0px;
`;

export const UserImage = styled.Image`
  height: 48px;
  width: 48px;
  margin: 0px 10px;
  border-radius: 30px;
`;

export const RowView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`;

export const UserName = styled(AboveMediumText)`
  color: ${({theme}) => theme.colors.darkGray};
  font-family: 'Lato-Bold';
`;

export const GameName = styled(AboveMediumText)`
  color: ${({theme}) => theme.colors.darkGray};
  font-family: 'Lato-Bold';
`;

export const NotificationText = styled(AboveMediumText)`
  color: ${({theme}) => theme.colors.darkGray};
  width: 295px;
  padding-right: 10px;
`;
