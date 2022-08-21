import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
  align-items: center
`;

export const Header = styled.View`
  width: 100%;
  margin-top: 15%;
  align-items: center
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;  
  align-items: center
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({theme}) => theme.COLORS.TEXT};
`;

export const NameText = styled.Text`
  font-family: ${({theme}) => theme.FONTS.BOLD};
  font-size: 18px;
`;
export const DescriptionText = styled.Text`
  font-family: ${({theme}) => theme.FONTS.REGULAR};
`;