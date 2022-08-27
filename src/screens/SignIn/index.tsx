import React, { useState } from 'react';
import { Dimensions, Image, View } from 'react-native';
import { Button } from '../../components/Button';
import { InputText } from '../../components/InputText';
import { useAuth } from '../../contexts/Auth'
import { KeyboardContainer } from './styles';
import logoImg from '../../assets/logo.png'
const window = Dimensions.get('window');

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signed, user, signIn } = useAuth();

  async function handleSignIn() {
    signIn(email, password);
  };

  return (

    <KeyboardContainer behavior="padding"  >
      <Image source={logoImg} resizeMode="contain" style={{ height: window.width / 3, marginBottom: 20 }} />
      <InputText placeholder='e-mail' textContentType='emailAddress' value={email} onChangeText={setEmail} />
      <InputText
        secureTextEntry
        placeholder='password'
        textContentType='password'
        value={password}
        onChangeText={setPassword}
      />
      <Button title='Entrar' onPress={handleSignIn} />
    </KeyboardContainer>
  );
}