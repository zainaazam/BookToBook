import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      backgroundGray: string;
      lightGray: string;
      darkGray: string;
      blue: string;
      lightBlue: string;
      lightBlue2: string;
      white: string;
      black: string;
      alertRed: string;
      inputGray: string;
      placeholder: string;
      orange: string;
      green: string;
      transparent: string;
    };
  }
}
