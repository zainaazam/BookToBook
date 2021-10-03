import styled from 'styled-components/native';
import {AboveMediumText, MediumText, LargeText} from '../CustomText';

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

export const BookImage = styled.Image`
  width: 140px;
  height: 170px;
`;

export const DetailsContainer = styled.View`
  padding: 10px;
`;

export const BookName = styled(LargeText)`
  font-weight: 700;
`;

export const Author = styled(AboveMediumText)`
  color: ${({theme}) => theme.colors.lightGray};
  font-weight: 700;
`;

export const Publisher = styled.TouchableOpacity``;

export const PublisherName = styled(MediumText)`
  color: ${({theme}) => theme.colors.blue};
  margin: 5px 0px;
`;

export const Description = styled(MediumText)`
  color: ${({theme}) => theme.colors.darkGray};
  width: 160px;
`;

export const ReadMore = styled.TouchableOpacity``;

export const ReadMoreText = styled(MediumText)`
  color: ${({theme}) => theme.colors.orange};
`;
