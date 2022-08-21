import React from 'react';
import { Button } from '../../components/Button';
import { useAuth } from '../../contexts/Auth';

import { 
  Container, 
  Header, 
  Image, 
  Content, 
  NameText, 
  DescriptionText 
} from './styles'
import userImg from '../../assets/user.png'

export function Person() {
  const {signOut} = useAuth();

  function handleSignOut(){
    signOut();
  }

  return (
    <Container>
        <Header>
          <Image source={userImg} />
          <NameText>Mauricio Onofre Pereira</NameText>
          <DescriptionText>057.070.099-06</DescriptionText>
        </Header>
        <Content>
          <Button style={{
            width: '90%',
            alignItems: 'center'
          }} title='Sair' onPress={handleSignOut} />
        </Content>
    </Container>
  );
}