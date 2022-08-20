import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Button } from '../components/Button';
import { InputText } from '../components/InputText';
import { AuthContext } from '../contexts/Auth'

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }  
})

export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signed, user, signIn } = useContext(AuthContext);

    async function handleSignIn(){
      signIn(email, password);
    };

  return (

    <View style={styles.container}>
        <InputText placeholder='e-mail' textContentType='emailAddress' value={email} onChangeText={setEmail} />
        <InputText 
          secureTextEntry
          placeholder='password' 
          textContentType='password' 
          value={password} 
          onChangeText={setPassword}
        />
        <Button title='Entrar' onPress={handleSignIn} />
    </View>
  );
}