import styled from 'styled-components/native';
import {
  AboveLargeText,
  MediumText,
  Title,
  UnderLargeText,
} from '../../../../Components/CustomText';

export const MainContainer = styled.View`
  background-color: ${({theme}) => theme.colors.backgroundGray};
  flex: 1;
  align-items: center;
`;

export const DetailsContainer = styled.View`
  width: 340px;
  height: 130px;
  border-radius: 10px;
  margin: 15px;
  flex-direction: row;
`;

export const BookImage = styled.Image`
  width: 150px;
  height: 180px;
`;

export const BookName = styled(Title)`
  font-weight: 700;
  margin-bottom: 3px;
`;

export const Author = styled(UnderLargeText)`
  color: ${({theme}) => theme.colors.lightGray};
  font-weight: 700;
  margin-bottom: 7px;
`;

export const BookDetailsContainer = styled.View`
  padding: 0px 10px;
`;

export const PublishDate = styled(MediumText)`
  margin: 3px 0px;
`;

export const BookGenre = styled(MediumText)`
  margin: 3px 0px;
`;

export const Language = styled(MediumText)`
  font-weight: bold;
  margin: 3px 0px;
`;

export const Pages = styled(MediumText)`
  margin-top: 3px;
`;

export const Quote = styled(AboveLargeText)`
  color: ${({theme}) => theme.colors.placeholder};
  margin: 55px 30px 20px;
  font-weight: 700;
`;

export const DescriptionContainer = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  width: 320px;
  height: 30%;
  border-radius: 10px;
  justify-content: flex-start;
  padding: 22px 20px;
`;

export const DescriptionWord = styled(MediumText)`
  color: ${({theme}) => theme.colors.orange};
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
`;

export const DescriptionContent = styled(MediumText)`
  margin-top: 5px;
  font-size: 14px;
  line-height: 30px;
`;

export const RightQuoteIcon = styled.View`
  width: 16px;
  height: 20px;
`;
