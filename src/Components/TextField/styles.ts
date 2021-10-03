import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {SmallText} from '../CustomText';

export const TextFieldWrapper = styled.View<{
  marginTop?: number;
}>`
  margin-top: ${props => (props?.marginTop ? props?.marginTop : 0)}px;
`;

export const TextFieldView = styled.View<{
  width?: number;
}>`
  width: ${props => (props?.width ? props?.width : 300)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 50px;
`;

export const TextFieldStyle = styled.TextInput<{
  error?: boolean;
  value?: string;
  focus?: boolean;
}>`
  border-width: 0.5px;
  padding: 10px;
  border-radius: 10px;
  border-color: ${props =>
    props?.error
      ? props?.theme.colors.alertRed
      : props?.value
      ? props?.theme.colors.blue
      : props?.focus
      ? props?.theme.colors.blue
      : props?.theme.colors.white};
  width: 100px;
  flex: 1;
  padding: 10px;
  background-color: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.inputGray};
`;

export const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    right: 10,
  },
});

export const ErrorText = styled(SmallText)`
  color: ${({theme}) => theme.colors.alertRed};
  width: 300px;
  margin-top: 2px;
  margin-left: 15px;
`;
