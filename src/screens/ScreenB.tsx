import React from 'react';
import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function ScreenB() {
    const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: 'blue'}}>
        <Button 
            title='Voltar para A' 
            onPress={() => navigation.goBack()}
        />
    </View>
  );
}