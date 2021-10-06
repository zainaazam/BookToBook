import React from 'react';
import CustomHeader from '../../../Components/CustomHeader';
import {AboutText, B2Text, MainContainer, TradingToolText} from './styles';

const About = () => {
  return (
    <MainContainer>
      <CustomHeader backButton menu title={'About'} />
      <B2Text>Book To Book </B2Text>
      <TradingToolText> A Book Trading tool!</TradingToolText>
      <AboutText>
        You can explore Our App for the book you seek, Once you find it, You can
        trade it with a book of yours!
      </AboutText>
      <AboutText>
        When the owner of the book you desire approves the trading, the Book now
        has a new OWNER! 🎉🎊
      </AboutText>
    </MainContainer>
  );
};

export default About;
