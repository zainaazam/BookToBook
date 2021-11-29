import React, {useRef, useState} from 'react';
import {MainContainer, Wrapper, EnterFourDigitsText, styles} from './styles';
import CodeInput from 'react-native-confirmation-code-input';
import CustomHeader from '../../../Components/CustomHeader';
import {useTheme} from 'styled-components/native';
import Button from '../../../Components/Button';
import {AuthStackParamList} from '../../../Navigation/StackNavigators/AuthStack';
import {StackNavigationProp} from '@react-navigation/stack';
import {VerifyCodeAction} from '../../../Store/Actions/Auth/AuthActions';
import {useDispatch} from 'react-redux';
import {VerifyCodeInputs} from '../../../Store/Types/Auth/Auth.action-types';
import {RouteProp} from '@react-navigation/native';

export type OTPScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'OTP'
>;

type OTPRouteProp = RouteProp<AuthStackParamList, 'OTP'>;

interface OTPProps {
  navigation: OTPScreenNavigationProp;
  route: OTPRouteProp;
}

const OTP = ({navigation, route}: OTPProps) => {
  const codeInput = useRef<CodeInput>(null);
  const [code, setCode] = useState('');
  const {colors} = useTheme();
  const {navigate} = navigation;
  const dispatch = useDispatch();
  const {email} = route.params;
  const inputs = {
    phoneEmailOrUsername: email,
    code: '',
  };

  const handleCode = (thisCode: string) => {
    setCode(thisCode);
    handleVerifyCode(thisCode);
  };

  const handleVerifyCode = (thisCode?: string) => {
    // navigate('ResetPassword');
    inputs.code = thisCode;
    dispatch(VerifyCodeAction(inputs, navigation));
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
          value={code}
          // className="border-circle"
          className="border-box"
          space={15}
          autoFocus
          size={50}
          activeColor={colors.orange}
          inactiveColor={colors.lightBlue}
          onFulfill={(text: string) => handleCode(text)}
          caretHidden
          codeInputStyle={styles.input}
          containerStyle={styles.container}
        />
        <Button title={'Next'} onPress={handleVerifyCode} />
      </Wrapper>
    </MainContainer>
  );
};

export default OTP;
