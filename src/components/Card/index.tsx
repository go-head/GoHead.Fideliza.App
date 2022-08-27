import React from 'react';
import { View, ViewProps, Text } from 'react-native';
import { Container } from './styles';

interface CardProps extends ViewProps {
  title: string;
  logoSrc: string;
  value: string;
  description: string;
}

export function Card({ style, ...rest }: CardProps) {
  const { title, logoSrc, value, description } = rest;
  return (
    <Container {...rest} style={[style]}>
      <View style={{ flex: 1 }}>
        <View style={{ width: '100%', height: 30, backgroundColor: 'powderblue', marginTop: 10, alignItems: 'center' }} >
          <Text >{ title }</Text>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', height: '100%', margin: 10 }}>
          <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center' }}>
            <Text style={{ marginLeft: 5 }}>{value}</Text>
            <Text style={{ marginLeft: 5 }}>{description}</Text>
          </View>
          <View style={{ flex: 0.3, backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center' }}>
            <Text>{logoSrc}</Text>
          </View>
        </View>

      </View>
    </Container>
  );
}