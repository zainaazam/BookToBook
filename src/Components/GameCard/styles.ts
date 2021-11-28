import styled from 'styled-components/native';
import {MediumText, AboveLargeText} from '../CustomText';

export const CardWrapper = styled.TouchableOpacity`
  width: 320px;
  height: 200px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.white};
  margin: 10px 0px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const GameImage = styled.Image`
  width: 140px;
  height: 170px;
  border-radius: 14px;
`;

export const DetailsContainer = styled.View`
  padding: 10px;
`;

export const GameTitle = styled(AboveLargeText)`
  font-family: 'Lato-Bold';
  margin-bottom: 3px;
`;

export const Developer = styled(MediumText)`
  color: ${({theme}) => theme.colors.lightGray};
  margin-bottom: 4px;
  font-family: 'Lato-Bold';
`;

export const Publisher = styled.TouchableOpacity`
  margin-bottom: 15px;
`;

export const PublisherName = styled(MediumText)`
  color: ${({theme}) => theme.colors.blue};
  margin: 5px 0px;
`;

export const Description = styled(MediumText)`
  color: ${({theme}) => theme.colors.darkGray};
  width: 160px;
`;

export const ReadMore = styled.TouchableOpacity`
  margin-top: 6px;
`;

export const ReadMoreText = styled(MediumText)`
  color: ${({theme}) => theme.colors.orange};
`;
