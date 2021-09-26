// import {useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import Button from '../../../Components/Button';
import {AuthStackParamList} from '../../../Navigation/StackNavigators/AuthStack';
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

export type WelcomeScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'Welcome'
>;

interface Props {
  navigation: WelcomeScreenNavigationProp;
}

const Welcome: React.FC<Props> = ({navigation}) => {
  // const {colors} = useTheme();
  const {navigate} = navigation;

  const navigateToLogin = () => {
    navigate('Login');
  };

  const navigateToSignUp = () => {
    navigate('SignUp');
  };

  return (
    <MainContainer>
      <TitleWrapper>
        <Logo source={LogoText} style={styles.image} />
      </TitleWrapper>
      <ManImage source={ManWithBooks} style={styles.image} />
      <GetStarted>Get Started</GetStarted>
      <ClearSpace>Clear Some Space for New Books!</ClearSpace>
      <Button title={'Login'} marginTop={20} onPress={navigateToLogin} />
      <Button
        title={'Sign Up'}
        marginTop={10}
        lightBlue
        blueTitle
        onPress={navigateToSignUp}
      />
      <Visitor>
        <VisitorText>View as Visitor</VisitorText>
      </Visitor>
    </MainContainer>
  );
};

export default Welcome;
