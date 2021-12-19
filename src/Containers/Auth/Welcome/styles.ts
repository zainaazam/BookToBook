import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {Title, MediumText} from '../../../Components/CustomText';

export const MainContainer = styled.View`
  background-color: ${({theme}) => theme.colors.backgroundGray};
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 50px;
`;

export const TitleWrapper = styled.View`
  /* align-self: flex-start; */
  /* flex-direction: column; */
  align-self: center;
  /* margin: 25px 20px; */
`;

export const Wrapper = styled.View`
  align-items: center;
`;

export const ManImage = styled.Image`
  width: 300px;
  height: 220px;
  margin-top: 35px;
`;

export const Logo = styled.Image`
  width: 400px;
  height: 400px;
  align-self: center;
`;

export const GetStarted = styled(MediumText)`
  align-self: flex-start;
  margin: 25px 20px 8px;
  color: ${({theme}) => theme.colors.lightGray};
`;

export const ClearSpace = styled(Title)`
  margin: 0px 20px;
  width: 300px;
  align-self: flex-start;
  font-family: 'Lato-Bold';
`;

// export const Visitor = styled.TouchableOpacity`
//   margin-top: 20px;
// `;

// export const VisitorText = styled(MediumText)`
//   color: ${({theme}) => theme.colors.lightGray};
// `;

export const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
  },
});
