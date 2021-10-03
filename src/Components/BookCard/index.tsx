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
}

const BookCard = ({
  bookName,
  author,
  publisher,
  description,
  image,
}: BookCardProps) => {
  return (
    <CardWrapper>
      <BookImage source={image} style={styles.image} />
      <DetailsContainer>
        <BookName>{bookName}</BookName>
        <Author>{author}</Author>
        <Publisher>
          <PublisherName>@{publisher}</PublisherName>
        </Publisher>
        <Description>
          {description && description.substring(0, 62)}...
        </Description>
        <ReadMore>
          <ReadMoreText>Read more</ReadMoreText>
        </ReadMore>
      </DetailsContainer>
    </CardWrapper>
  );
};

export default BookCard;
