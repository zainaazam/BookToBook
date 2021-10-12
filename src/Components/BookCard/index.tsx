import React from 'react';
import {
  CardWrapper,
  BookImage,
  DetailsContainer,
  BookName,
  Author,
  Publisher,
  PublisherName,
  Description,
  ReadMore,
  ReadMoreText,
} from './styles';
import {styles} from '../../Containers/Auth/Welcome/styles';
import {ImageSourcePropType} from 'react-native';

interface BookCardProps {
  bookName?: string;
  author?: string;
  publisher?: string;
  description?: string;
  image?: ImageSourcePropType;
  onPress?: () => void;
  onPublisherPress?: () => void;
}

const BookCard = ({
  bookName,
  author,
  publisher,
  description,
  image,
  onPress,
  onPublisherPress,
}: BookCardProps) => {
  return (
    <CardWrapper onPress={onPress}>
      <BookImage source={image} style={styles.image} />
      <DetailsContainer>
        <BookName>{bookName}</BookName>
        <Author>{author}</Author>
        <Publisher onPress={onPublisherPress}>
          <PublisherName>@{publisher}</PublisherName>
        </Publisher>
        <Description>
          {description && description.substring(0, 62)}...
        </Description>
        <ReadMore onPress={onPress}>
          <ReadMoreText>Read more</ReadMoreText>
        </ReadMore>
      </DetailsContainer>
    </CardWrapper>
  );
};

export default BookCard;
