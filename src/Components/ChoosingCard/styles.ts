import styled from 'styled-components/native';
import {AboveMediumText, MediumText, LargeText} from '../CustomText';

export const CardWrapper = styled.TouchableOpacity`
  width: 320px;
  height: 130px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.white};
  margin: 10px 0px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const BookImage = styled.Image`
  width: 90px;
  height: 120px;
  margin: 0px 10px;
`;

export const DetailsContainer = styled.View`
  padding: 10px;
`;

export const BookName = styled(LargeText)`
  font-family: 'Lato-Bold';
  margin-bottom: 3px;
`;

export const Author = styled(AboveMediumText)`
  color: ${({theme}) => theme.colors.lightGray};
  font-family: 'Lato-Bold';
  margin-bottom: 3px;
`;

export const Description = styled(MediumText)`
  color: ${({theme}) => theme.colors.darkGray};
  width: 154px;
  margin-bottom: 3px;
`;

export const ReadMore = styled.TouchableOpacity``;

export const ReadMoreText = styled(MediumText)`
  color: ${({theme}) => theme.colors.orange};
  margin-bottom: 3px;
`;

export const Select = styled.View<{
  selected?: boolean;
}>`
  width: 28px;
  height: 28px;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.orange};
  background-color: ${props =>
    props.selected
      ? ({theme}) => theme.colors.orange
      : ({theme}) => theme.colors.transparent};
  align-self: flex-start;
  margin-top: 10px;
  margin-right: 10px;
`;
