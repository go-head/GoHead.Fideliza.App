import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Button } from '../components/Button';
import { InputText } from '../components/InputText';

export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (

    <View style={{ flex: 1, justifyContent: 'center'}}>
        <InputText placeholder='e-mail' value={email} onChange={setEmail} />
        <InputText placeholder='password' value={password} onChange={setPassword} />
        <Button title='Entrar' />
    </View>
  );
}