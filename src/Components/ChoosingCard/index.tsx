import React from 'react';
import {
  CardWrapper,
  BookImage,
  DetailsContainer,
  BookName,
  Author,
  Description,
  ReadMore,
  ReadMoreText,
  Select,
} from './styles';
import {styles} from '../../Containers/Auth/Welcome/styles';
import {ImageSourcePropType} from 'react-native';

interface BookCardProps {
  bookName?: string;
  author?: string;
  description?: string;
  image?: ImageSourcePropType;
  id?: string;
  selectedBook?: string;
  setSelectedBook?: (value: string) => void;
}

const ChoosingCard = ({
  bookName,
  author,
  description,
  image,
  id,
  selectedBook,
  setSelectedBook,
}: BookCardProps) => {
  const toggleSelected = () => {
    setSelectedBook && setSelectedBook(id);
  };
  return (
    <CardWrapper onPress={toggleSelected}>
      <BookImage source={image} style={styles.image} />
      <DetailsContainer>
        <BookName>{bookName}</BookName>
        <Author>{author}</Author>
        <Description>
          {description && description.substring(0, 22)}...
        </Description>
        <ReadMore>
          <ReadMoreText>Read more</ReadMoreText>
        </ReadMore>
      </DetailsContainer>
      <Select selected={selectedBook === id} />
    </CardWrapper>
  );
};

export default ChoosingCard;
