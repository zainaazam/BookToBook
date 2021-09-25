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
  mediumButton?: boolean;
  centered?: boolean;
  blueTitle?: boolean;
}

const Button = ({
  onPress,
  title,
  marginTop,
  //   loading,
  smallButton,
  lightBlue,
  mediumButton,
  centered,
  blueTitle,
}: ButtonProps) => {
  //   const {colors} = useTheme();
  return (
    <ButtonStyle
      lightBlue={lightBlue}
      smallButton={smallButton}
      activeOpacity={0.5}
      marginTop={marginTop}
      onPress={onPress}
      mediumButton={mediumButton}
      centered={centered}
      //   disabled={loading}
    >
      {/* {loading ? (
        <ActivityIndicator size="small" color={colors.white} />
      ) : ( */}
      <ButtonTitleStyle blue={blueTitle}>{title}</ButtonTitleStyle>
      {/* )} */}
    </ButtonStyle>
  );
};
export default Button;
