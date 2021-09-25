// import {useTheme} from '@react-navigation/native';
import React from 'react';
import Button from '../../../Components/Button';
import {
  MainContainer,
  ManImage,
  styles,
  TitleWrapper,
  GetStarted,
  ClearSpace,
  Logo,
  Visitor,
  VisitorText,
} from './styles';
const ManWithBooks = require('../../../../Assets/Images/sitting-reading.png');
const LogoText = require('../../../../Assets/Images/logo1.png');

const Welcome = () => {
  // const {colors} = useTheme();
  return (
    <MainContainer>
      <TitleWrapper>
        <Logo source={LogoText} style={styles.image} />
      </TitleWrapper>
      <ManImage source={ManWithBooks} style={styles.image} />
      <GetStarted>Get Started</GetStarted>
      <ClearSpace>Clear Some Space for New Books!</ClearSpace>
      <Button title={'Login'} marginTop={20} />
      <Button title={'Sign Up'} marginTop={10} lightBlue blueTitle />
      <Visitor>
        <VisitorText>View as Visitor</VisitorText>
      </Visitor>
    </MainContainer>
  );
};

export default Welcome;
