import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../components/Button';
import { useAuth } from '../contexts/Auth';

export function Account() {
  const {signOut} = useAuth();

  function handleSignOut(){
    signOut();
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'orange', justifyContent: 'center'}}>
        <Text>Perfil</Text>
        <Button title='Sair' onPress={handleSignOut} />
    </View>
  );
}