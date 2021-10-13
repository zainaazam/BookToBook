import React from 'react';
import {
  Author,
  BookDetailsContainer,
  BookImage,
  BookName,
  BookGenre,
  DetailsContainer,
  DescriptionContainer,
  Language,
  MainContainer,
  Pages,
  PublishDate,
  DescriptionWord,
  DescriptionContent,
  Quote,
  RightQuoteIcon,
} from './styles';
import CustomHeader from '../../../../Components/CustomHeader';
import {styles} from '../../../Auth/Welcome/styles';
import Button from '../../../../Components/Button';
import QuoteIcon from 'react-native-vector-icons/Fontisto';
import {useTheme} from 'styled-components';
import {ScrollView} from 'react-native-gesture-handler';
import {CompositeNavigationProp} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerStackParamList} from '../../../../Navigation/StackNavigators/DrawerStack/DrawerStack';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStackParamList} from '../../../../Navigation/StackNavigators/DrawerStack/HomeStack';

const Image = require('../../../../../Assets/Images/second-book.png');

type BookDetailsScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerStackParamList, 'HomeStack'>,
  StackNavigationProp<HomeStackParamList, 'BookDetails'>
>;

interface BookDetailsProps {
  navigation: BookDetailsScreenNavigationProp;
}

const BookDetails = ({navigation}: BookDetailsProps) => {
  const {toggleDrawer} = navigation;
  const {navigate} = navigation;

  const navigateToExchange = () => {
    navigate('Exchange');
  };

  const {colors} = useTheme();
  return (
    <MainContainer>
      <CustomHeader menu title={'Book Details'} toggleDrawer={toggleDrawer} />
      <DetailsContainer>
        <BookImage source={Image} style={styles.image} />
        <BookDetailsContainer>
          <BookName>Sign to it</BookName>
          <Author>Amy Hempel</Author>
          <PublishDate>March 26, 2019 </PublishDate>
          <BookGenre>Literary Fiction</BookGenre>
          <Language>English</Language>
          <Pages>160 Pages</Pages>
        </BookDetailsContainer>
      </DetailsContainer>
      <Quote>
        <RightQuoteIcon>
          <QuoteIcon name="quote-a-right" color={colors.placeholder} />
        </RightQuoteIcon>{' '}
        Lorem ipsum dolor sit amet, concestuar <QuoteIcon name="quote-a-left" />
      </Quote>
      <DescriptionContainer>
        <DescriptionWord>Description:</DescriptionWord>
        <ScrollView>
          <DescriptionContent>
            consectetur adipiscing elit. Phasellus et mi vel purus vive.
            consectetur adipiscing elit. Phasellus et mi vel purus vive.
            consectetur adipiscing elit. Phasellus et mi vel purus vive.
            consectetur adipiscing elit. Phasellus et mi vel purus vive.
            consectetur adipiscing elit. Phasellus et mi vel puru.
          </DescriptionContent>
        </ScrollView>
      </DescriptionContainer>
      <Button
        title={'Request to Exchange'}
        marginTop={20}
        onPress={navigateToExchange}
      />
    </MainContainer>
  );
};

export default BookDetails;
