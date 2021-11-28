import {DrawerNavigationProp} from '@react-navigation/drawer';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import CustomHeader from '../../../Components/CustomHeader';
import {AboutStackParamList} from '../../../Navigation/StackNavigators/DrawerStack/AboutStack';
import {DrawerStackParamList} from '../../../Navigation/StackNavigators/DrawerStack/DrawerStack';
import {AboutText, ReGameText, MainContainer, TradingToolText} from './styles';

type AboutScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerStackParamList, 'HomeStack'>,
  StackNavigationProp<AboutStackParamList, 'About'>
>;

interface AboutProps {
  navigation: AboutScreenNavigationProp;
}

const About = ({navigation}: AboutProps) => {
  const {toggleDrawer} = navigation;

  return (
    <MainContainer>
      <CustomHeader
        rightSide="backButton"
        menu
        title={'About'}
        toggleDrawer={toggleDrawer}
      />
      <ReGameText>ReGame</ReGameText>
      <TradingToolText> A Game Trading tool!</TradingToolText>
      <AboutText>
        You can explore Our App for the game you seek, Once you find it, You can
        trade it with a game of yours!
      </AboutText>
      <AboutText>
        When the owner of the game you desire approves the trading, the Game now
        has a new OWNER! 🎉🎊
      </AboutText>
    </MainContainer>
  );
};

export default About;
