import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.COLORS.TEXT};
  height: 120px;
  border-radius: 15px;
  margin-bottom: 10px;
`;