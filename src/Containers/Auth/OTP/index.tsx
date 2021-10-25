import React, {useRef} from 'react';
import {MainContainer, Wrapper, EnterFourDigitsText, styles} from './styles';
import CodeInput from 'react-native-confirmation-code-input';
import CustomHeader from '../../../Components/CustomHeader';
import {useTheme} from 'styled-components/native';
import Button from '../../../Components/Button';
import {AuthStackParamList} from '../../../Navigation/StackNavigators/AuthStack';
import {StackNavigationProp} from '@react-navigation/stack';

export type OTPScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'OTP'
>;

interface OTPProps {
  navigation: OTPScreenNavigationProp;
}

const OTP = ({navigation}: OTPProps) => {
  const codeInput = useRef<CodeInput>(null);
  const {colors} = useTheme();
  const {navigate} = navigation;

  const navigateToResetPassword = () => {
    navigate('ResetPassword');
  };

  return (
    <MainContainer>
      <CustomHeader title={'OTP'} rightSide="backButton" />
      <Wrapper>
        <EnterFourDigitsText>
          Please Enter the 4-digits Code sent to Your Email:
        </EnterFourDigitsText>
        <CodeInput
          ref={codeInput}
          keyboardType="numeric"
          codeLength={4}
          className="border-circle"
          space={15}
          autoFocus
          size={50}
          activeColor={colors.orange}
          inactiveColor={colors.lightBlue}
          onFulfill={navigateToResetPassword}
          caretHidden
          codeInputStyle={styles.input}
          containerStyle={styles.container}
        />
        <Button title={'Send'} onPress={navigateToResetPassword} />
      </Wrapper>
    </MainContainer>
  );
};

export default OTP;
