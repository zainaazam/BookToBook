import React from 'react';
import {ButtonStyle, ButtonTitleStyle} from './styles';
// import {ActivityIndicator} from 'react-native';
// import {useTheme} from 'styled-components/native';

interface ButtonProps {
  onPress?: () => void;
  title?: string;
  marginTop?: number;
  //   loading?: boolean;
  smallButton?: boolean;
  lightBlue?: boolean;
  orange?: boolean;
  mediumButton?: boolean;
  centered?: boolean;
  blueTitle?: boolean;
  buttonDisabled?: boolean;
}

const Button = ({
  onPress,
  title,
  marginTop,
  //   loading,
  smallButton,
  lightBlue,
  orange,
  mediumButton,
  centered,
  blueTitle,
  buttonDisabled,
}: ButtonProps) => {
  //   const {colors} = useTheme();
  return (
    <ButtonStyle
      lightBlue={lightBlue}
      orange={orange}
      smallButton={smallButton}
      activeOpacity={0.5}
      marginTop={marginTop}
      onPress={onPress}
      mediumButton={mediumButton}
      centered={centered}
      // disabled={loading}
      disabled={buttonDisabled}>
      {/* {loading ? (
        <ActivityIndicator size="small" color={colors.white} />
      ) : ( */}
      <ButtonTitleStyle blue={blueTitle}>{title}</ButtonTitleStyle>
      {/* )} */}
    </ButtonStyle>
  );
};
export default Button;
