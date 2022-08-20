import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { Button } from '../components/Button';
import { AuthContext } from '../contexts/Auth';

export function Account() {
  const {signOut} = useContext(AuthContext);

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