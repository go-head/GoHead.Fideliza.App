import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
//import {useTheme} from 'styled-components/native';

export function InputText(props: TextInputProps) {
  //const {colors} = useTheme();
  return (
    <TextInput style={styles.input} {...props} />
  );
}

const styles = StyleSheet.create({
    input: {
      borderRadius: 8,
      paddingHorizontal: 8,
      borderWidth: 1,
      width: '80%',
      height: 50,
      marginBottom: 16,
    },
  });