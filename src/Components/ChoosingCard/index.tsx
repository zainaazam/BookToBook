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
  justListing?: boolean;
  id?: string;
  selectedBook?: string;
  setSelectedBook?: (value: string) => void;
  onNavigate?: () => void;
}

const ChoosingCard = ({
  bookName,
  author,
  description,
  image,
  justListing,
  id,
  selectedBook,
  setSelectedBook,
  onNavigate,
}: BookCardProps) => {
  const handlePressed = () => {
    if (justListing) {
      onNavigate();
    } else {
      setSelectedBook && setSelectedBook(id);
    }
  };
  return (
    <CardWrapper onPress={handlePressed}>
      <BookImage source={image} style={styles.image} />
      <DetailsContainer>
        <BookName>{bookName}</BookName>
        <Author>{author}</Author>
        <Description>
          {description && description.substring(0, 22)}...
        </Description>
        <ReadMore onPress={onNavigate}>
          <ReadMoreText>Read more</ReadMoreText>
        </ReadMore>
      </DetailsContainer>
      {justListing ? null : <Select selected={selectedBook === id} />}
    </CardWrapper>
  );
};

export default ChoosingCard;
