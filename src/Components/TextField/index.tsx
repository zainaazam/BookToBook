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
  onPress?: () => void;
  placeHolder?: string;
  eyeIcon?: boolean;
  marginTop?: number;
  password?: boolean;
  value?: string;
  error?: boolean;
  errorMessage?: string;
  editable?: boolean;
  arrowIcon?: boolean;
  width?: number;
  onTouchStart?: () => void;
  number?: boolean;
  confirmedIcon?: boolean;
  notConfirmedIcon?: boolean;
}

const TextField = ({
  onChange,
  onPress,
  placeHolder,
  eyeIcon,
  marginTop,
  password,
  value,
  error,
  errorMessage,
  editable,
  width,
  onTouchStart,
  number,
  confirmedIcon,
  notConfirmedIcon,
}: TextFieldProps) => {
  const {colors} = useTheme();
  const [focus, setFocus] = useState(false);
  return (
    <TextFieldWrapper marginTop={marginTop}>
      <TextFieldView width={width}>
        <TextFieldStyle
          onTouchStart={onTouchStart}
          editable={editable}
          autoCapitalize={'none'}
          placeholder={placeHolder}
          onChangeText={onChange}
          secureTextEntry={password}
          value={value}
          error={error} //TODO
          placeholderTextColor={colors.placeholder}
          keyboardType={number ? 'number-pad' : 'default'}
          caretHidden={true}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          focus={focus}
        />

        <TouchableOpacity
          style={{
            ...styles.icon,
          }}
          onPress={onPress}>
          {eyeIcon && password && <Icon name="eye" size={20} color={'gray'} />}
          {!password && eyeIcon && (
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
      {error ? <ErrorText>{errorMessage}</ErrorText> : null}
    </TextFieldWrapper>
  );
};

export default TextField;
