import React, {useRef} from 'react';
import {MainContainer, Wrapper, EnterFourDigitsText, styles} from './styles';
import CodeInput from 'react-native-confirmation-code-input';
import CustomHeader from '../../../Components/CustomHeader';
import {Alert} from 'react-native';
import {useTheme} from 'styled-components/native';
import Button from '../../../Components/Button';

const OTP = () => {
  const codeInput = useRef<CodeInput>(null);
  const {colors} = useTheme();

  return (
    <MainContainer>
      <CustomHeader title={'OTP'} backButton />
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
          onFulfill={() => Alert.alert('hello')}
          caretHidden
          codeInputStyle={styles.input}
          containerStyle={styles.container}
        />
        <Button title={'Send'} />
      </Wrapper>
    </MainContainer>
  );
};

export default OTP;
