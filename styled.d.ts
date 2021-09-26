import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      backgroundGray: string;
      lightGray: string;
      blue: string;
      lightBlue: string;
      white: string;
      alertRed: string;
      inputGray: string;
      placeholder: string;
    };
  }
}
