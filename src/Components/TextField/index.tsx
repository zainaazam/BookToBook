import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  styles,
  TextFieldStyle,
  TextFieldView,
  ErrorText,
  TextFieldWrapper,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useTheme} from 'styled-components/native';
import CheckedIcon from 'react-native-vector-icons/AntDesign';
import CloseIcon from 'react-native-vector-icons/AntDesign';

interface TextFieldProps {
  onChange?: (text: string) => void;
  placeHolder?: string;
  eyeIcon?: boolean;
  marginTop?: number;
  value?: string;
  error?: string;
  editable?: boolean;
  arrowIcon?: boolean;
  width?: number;
  onTouchStart?: () => void;
  number?: boolean;
  confirmedIcon?: boolean;
  notConfirmedIcon?: boolean;
  onBlur?: () => void;
}

const TextField = ({
  onChange,
  placeHolder,
  eyeIcon,
  marginTop,
  value,
  error,
  editable,
  width,
  onTouchStart,
  number,
  confirmedIcon,
  notConfirmedIcon,
  onBlur,
}: TextFieldProps) => {
  const {colors} = useTheme();
  const [focus, setFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextFieldWrapper marginTop={marginTop}>
      {error ? <ErrorText>{error}</ErrorText> : null}
      <TextFieldView width={width}>
        <TextFieldStyle
          onTouchStart={onTouchStart}
          editable={editable}
          autoCapitalize={'none'}
          placeholder={placeHolder}
          onChangeText={onChange}
          secureTextEntry={!showPassword}
          value={value}
          error={error}
          placeholderTextColor={colors.placeholder}
          keyboardType={number ? 'number-pad' : 'default'}
          caretHidden={true}
          onFocus={() => setFocus(true)}
          onBlur={() => {
            setFocus(false);
            onBlur && onBlur();
          }}
          focus={focus}
        />

        <TouchableOpacity
          style={{
            ...styles.icon,
          }}
          onPress={() => setShowPassword(!showPassword)}>
          {eyeIcon && showPassword && (
            <Icon name="eye" size={20} color={'gray'} />
          )}
          {!showPassword && eyeIcon && (
            <Icon name="eye-slash" size={20} color={'gray'} />
          )}
          {confirmedIcon && (
            <CheckedIcon name={'checkcircle'} size={20} color={colors.blue} />
          )}
          {notConfirmedIcon && (
            <CloseIcon name={'closecircle'} size={20} color={colors.alertRed} />
          )}
        </TouchableOpacity>
      </TextFieldView>
    </TextFieldWrapper>
  );
};

export default TextField;
