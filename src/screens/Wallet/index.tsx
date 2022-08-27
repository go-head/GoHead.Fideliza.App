import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Card } from '../../components/Card';
import { Container } from './styles'
const { width } = Dimensions.get('window');

export function Wallet() {
  return (
    <Container>
      <Card 
        style={{ width: width - 10 }} 
        title='Mercearia da Tia Chica'
        description='Coisarada'
        logoSrc='../../assets/jabacule.png'
        value='R$: 150'
        />
    </Container>
  );
}