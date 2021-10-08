import React from 'react';
import {ComingSoonText, MainContainer} from './styles';
import CustomHeader from '../../../Components/CustomHeader';
import Icon from 'react-native-vector-icons/FontAwesome';

const HelpAndFeedback = () => {
  return (
    <MainContainer>
      <CustomHeader backButton menu />
      <Icon name="timer-outline" size={80} color="#FB763E" />
      <ComingSoonText>COMING SOON!</ComingSoonText>
    </MainContainer>
  );
};

export default HelpAndFeedback;
