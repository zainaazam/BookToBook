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

interface ChoosingMultiCardProps {
  gameName?: string;
  developer?: string;
  description?: string;
  image?: ImageSourcePropType;
  id?: string;
  selectedGames?: string[];
  setSelectedGames?: (value: string[]) => void;
  onReadMorePress?: () => void;
}

const ChoosingMultiCard = ({
  gameName,
  developer,
  description,
  image,
  id,
  selectedGames,
  setSelectedGames,
  onReadMorePress,
}: ChoosingMultiCardProps) => {
  const toggleSelected = () => {
    if (selectedGames?.includes(id)) {
      setSelectedGames &&
        setSelectedGames(selectedGames?.filter(item => item !== id));
    } else {
      setSelectedGames && setSelectedGames(selectedGames.concat(id));
    }
  };

  return (
    <CardWrapper onPress={toggleSelected}>
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
        <ReadMore onPress={onReadMorePress}>
          <ReadMoreText>Read more</ReadMoreText>
        </ReadMore>
      </DetailsContainer>
      <Select selected={selectedGames?.includes(id)} />
    </CardWrapper>
  );
};

export default ChoosingMultiCard;
