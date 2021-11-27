import React from 'react';
import {ComingSoonText, IconContainer, MainContainer} from './styles';
import CustomHeader from '../../../Components/CustomHeader';
import Icon from 'react-native-vector-icons/MaterialIcons';
//import {useTheme} from 'styled-components/native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerStackParamList} from '../../../Navigation/StackNavigators/DrawerStack/DrawerStack';
import {StackNavigationProp} from '@react-navigation/stack';
import {HelpAndFeedbackStackParamList} from '../../../Navigation/StackNavigators/DrawerStack/HelpAndFeedbackStack';

type HelpAndFeedbackScreenNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerStackParamList, 'HomeStack'>,
  StackNavigationProp<HelpAndFeedbackStackParamList, 'HelpAndFeedback'>
>;

interface HelpAndFeedbackProps {
  navigation: HelpAndFeedbackScreenNavigationProp;
}

const HelpAndFeedback = ({navigation}: HelpAndFeedbackProps) => {
  //const {colors} = useTheme();
  const {toggleDrawer} = navigation;

  return (
    <MainContainer>
      <CustomHeader rightSide="backButton" menu toggleDrawer={toggleDrawer} />
      <IconContainer>
        <Icon
          name="timer"
          size={240}
          // color="rgba(251,118,62,0.6)"
          color="rgba(252, 163, 17,0.6)"
        />
      </IconContainer>
      <ComingSoonText>COMING SOON!</ComingSoonText>
    </MainContainer>
  );
};

export default HelpAndFeedback;
