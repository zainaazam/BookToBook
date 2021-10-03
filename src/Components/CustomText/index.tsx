import styled from 'styled-components/native';

export const CustomText = styled.Text`
  font-size: 10px;
  text-align: left;
  font-family: 'Lato-Regular';
`;

export const Title = styled(CustomText)<{
  color?: string;
}>`
  font-size: 32px;
  color: ${props => (props?.color ? props?.color : '#000000')};
`;

export const SubTitle = styled(CustomText)`
  font-size: 28px;
`;

export const LargeText = styled(CustomText)`
  font-size: 22px;
`;

export const AboveMediumText = styled(CustomText)`
  font-size: 17px;
`;

export const MediumText = styled(CustomText)`
  font-size: 14px;
`;

export const SmallText = styled(CustomText)`
  font-size: 10px;
`;
