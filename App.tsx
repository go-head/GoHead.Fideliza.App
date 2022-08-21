import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { 
  useFonts, 
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
  } from '@expo-google-fonts/roboto';
import { AuthProvider } from './src/contexts/Auth';
import { Routes } from './src/routes';
import { View, ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import THEME from './src/screens/theme';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
      );
  }

  return (
    <ThemeProvider theme={THEME}>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;