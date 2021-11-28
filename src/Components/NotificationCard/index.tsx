import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {
  Container,
  Wrapper,
  RowView,
  UserImage,
  UserName,
  NotificationText,
  GameName,
} from './styles';

//TODO 'when it's not clickable, make it clickable and when click then isRead == true'

interface NotificationProps {
  name?: string;
  image?: ImageSourcePropType;
  isRead: boolean;
  type: string;
  nameOfGame: string;
  onRequestPress?: () => void;
  onApprovedPress?: () => void;
}

const Notification = ({
  name,
  image,
  isRead,
  type,
  nameOfGame,
  onRequestPress,
  onApprovedPress,
}: NotificationProps) => {
  return (
    <Container isRead={isRead}>
      {type === 'requesting' && (
        <Wrapper onPress={onRequestPress}>
          <RowView>
            <UserImage source={image} />
            <NotificationText>
              <UserName>{name}</UserName> requested to exchange{' '}
              <GameName>{nameOfGame}</GameName>!
            </NotificationText>
          </RowView>
        </Wrapper>
      )}
      {type === 'sent' && (
        <RowView>
          <UserImage source={image} />
          <NotificationText>
            Your request to exchange <GameName>{nameOfGame}</GameName> game has
            been successfully sent!
          </NotificationText>
        </RowView>
      )}
      {type === 'rejected' && (
        <RowView>
          <UserImage source={image} />
          <NotificationText>
            Your request to exchange <GameName>{nameOfGame}</GameName> game has
            been rejected!
          </NotificationText>
        </RowView>
      )}
      {type === 'approved' && (
        <Wrapper onPress={onApprovedPress}>
          <RowView>
            <UserImage source={image} />
            <NotificationText>
              Your request to exchange <GameName>{nameOfGame}</GameName> game
              has been Approved!
            </NotificationText>
          </RowView>
        </Wrapper>
      )}
    </Container>
  );
};

export default Notification;
