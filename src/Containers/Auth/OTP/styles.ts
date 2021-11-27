import styled from 'styled-components/native';
import {MediumText} from '../../../Components/CustomText';
import {StyleSheet} from 'react-native';

export const MainContainer = styled.View`
  background-color: ${({theme}) => theme.colors.backgroundGray};
  flex: 1;
  align-items: center;
`;

export const Wrapper = styled.View`
  flex: 0.7;
  align-items: center;
`;

export const EnterFourDigitsText = styled(MediumText)`
  color: ${({theme}) => theme.colors.orange};
  margin-top: 25px;
`;

export const styles = StyleSheet.create({
  input: {
    // color: '#1580D7',
    color: '#14213d',
  },
  container: {
    marginTop: 60,
  },
});
