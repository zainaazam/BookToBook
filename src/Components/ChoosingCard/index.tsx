import React from 'react';
import {
  CardWrapper,
  GameImage,
  DetailsContainer,
  GameName,
  Developer,
  Description,
  ReadMore,
  ReadMoreText,
  Select,
} from './styles';
import {styles} from '../../Containers/Auth/Welcome/styles';
import {ImageSourcePropType} from 'react-native';

interface GameCardProps {
  gameName?: string;
  developer?: string;
  description?: string;
  image?: ImageSourcePropType;
  justListing?: boolean;
  id?: string;
  selectedGame?: string;
  setSelectedGame?: (value: string) => void;
  onNavigate?: () => void;
}

const ChoosingCard = ({
  gameName,
  developer,
  description,
  image,
  justListing,
  id,
  selectedGame,
  setSelectedGame,
  onNavigate,
}: GameCardProps) => {
  const handlePressed = () => {
    if (justListing) {
      onNavigate();
    } else {
      setSelectedGame && setSelectedGame(id);
    }
  };
  return (
    <CardWrapper onPress={handlePressed}>
      <GameImage source={image} style={styles.image} />
      <DetailsContainer>
        <GameName>
          {gameName && gameName.substring(0, 13)}
          {gameName && gameName.length > 13 ? '...' : ''}
        </GameName>
        <Developer>
          {developer && developer.substring(0, 15)}
          {developer && developer.length > 15 ? '...' : ''}
        </Developer>
        <Description>
          {description && description.substring(0, 22)}...
        </Description>
        <ReadMore onPress={onNavigate}>
          <ReadMoreText>Read more</ReadMoreText>
        </ReadMore>
      </DetailsContainer>
      {justListing ? null : <Select selected={selectedGame === id} />}
    </CardWrapper>
  );
};

export default ChoosingCard;
