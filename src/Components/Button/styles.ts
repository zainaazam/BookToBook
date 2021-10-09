import styled from 'styled-components/native';
import {CustomText} from '../CustomText';

export const ButtonStyle = styled.TouchableOpacity<{
  marginTop?: number;
  smallButton?: boolean;
  mediumButton?: boolean;
  lightBlue?: boolean;
  orange?: boolean;
  centered?: boolean;
}>`
  border-radius: 25px;
  background-color: ${({theme, lightBlue, orange}) =>
    lightBlue
      ? theme.colors.lightBlue
      : orange
      ? theme.colors.orange
      : theme.colors.blue};
  padding: 15px;
  align-items: center;
  ${props => props.centered && 'align-self: center'}
  width: ${props =>
    props.smallButton ? 100 : props.mediumButton ? 230 : 320}px;
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)}px;
`;

export const ButtonTitleStyle = styled(CustomText)<{
  blue: boolean;
}>`
  color: ${({theme, blue}) => (blue ? theme.colors.blue : theme.colors.white)};
  font-size: 15px;
  font-weight: 700;
`;
