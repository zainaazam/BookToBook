import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {
  Container,
  Wrapper,
  RowView,
  UserImage,
  UserName,
  NotificationText,
  BookName,
} from './styles';

//TODO 'when it's not clickable, make it clickable and when click then isRead == true'

interface NotificationProps {
  name?: string;
  image?: ImageSourcePropType;
  isRead: boolean;
  type: string;
  nameOfBook: string;
  onRequestPress?: () => void;
}

const Notification = ({
  name,
  image,
  isRead,
  type,
  nameOfBook,
  onRequestPress,
}: NotificationProps) => {
  return (
    <Container isRead={isRead}>
      {type === 'requesting' && (
        <Wrapper onPress={onRequestPress}>
          <RowView>
            <UserImage source={image} />
            <NotificationText>
              <UserName>{name}</UserName> requested to exchange{' '}
              <BookName>{nameOfBook}</BookName>!
            </NotificationText>
          </RowView>
        </Wrapper>
      )}
      {type === 'sent' && (
        <RowView>
          <UserImage source={image} />
          <NotificationText>
            Your request to exchange <BookName>{nameOfBook}</BookName> book has
            been successfully sent!
          </NotificationText>
        </RowView>
      )}
      {type === 'rejected' && (
        <RowView>
          <UserImage source={image} />
          <NotificationText>
            Your request to exchange <BookName>{nameOfBook}</BookName> book has
            been rejected!
          </NotificationText>
        </RowView>
      )}
      {type === 'approved' && (
        <Wrapper>
          <RowView>
            <UserImage source={image} />
            <NotificationText>
              Your request to exchange <BookName>{nameOfBook}</BookName> book
              has been Approved!
            </NotificationText>
          </RowView>
        </Wrapper>
      )}
    </Container>
  );
};

export default Notification;
