import React from 'react';
import {
  CardWrapper,
  GameImage,
  DetailsContainer,
  GameTitle,
  Developer,
  Publisher,
  PublisherName,
  Description,
  ReadMore,
  ReadMoreText,
} from './styles';
import {styles} from '../../Containers/Auth/Welcome/styles';
import {ImageSourcePropType} from 'react-native';

interface GameCardProps {
  gameName?: string;
  developer?: string;
  publisher?: string;
  description?: string;
  image?: ImageSourcePropType;
  onPress?: () => void;
  onPublisherPress?: () => void;
}

const GameCard = ({
  gameName,
  developer,
  publisher,
  description,
  image,
  onPress,
  onPublisherPress,
}: GameCardProps) => {
  return (
    <CardWrapper onPress={onPress}>
      <GameImage source={image} style={styles.image} />
      <DetailsContainer>
        <GameTitle>
          {gameName && gameName.substring(0, 11)}
          {gameName && gameName.length > 10 ? '...' : ''}
        </GameTitle>
        <Developer>
          {developer && developer.substring(0, 20)}
          {developer && developer.length > 20 ? '...' : ''}
        </Developer>
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

export default GameCard;
