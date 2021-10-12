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
  selectedBooks?: string[];
  setSelectedBooks?: (value: string[]) => void;
}

const ChoosingMultiCard = ({
  bookName,
  author,
  description,
  image,
  id,
  selectedBooks,
  setSelectedBooks,
}: BookCardProps) => {
  const toggleSelected = () => {
    if (selectedBooks?.includes(id)) {
      setSelectedBooks &&
        setSelectedBooks(selectedBooks?.filter(item => item !== id));
    } else {
      setSelectedBooks && setSelectedBooks(selectedBooks.concat(id));
    }
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
      <Select selected={selectedBooks?.includes(id)} />
    </CardWrapper>
  );
};

export default ChoosingMultiCard;
