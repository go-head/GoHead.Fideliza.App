import React, { useContext } from 'react'
import { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authService } from '../services/authService';
import api from '../services/api';

type Props = {
  children?: React.ReactNode
};
export interface User {
  email: string;
  name: string;
}
interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers.common['Authorization'] = `Bearer ${storagedToken}`
        setLoading(false);
      }
    }
    loadStorageData();
  }, [])

  async function signIn(email: string, password: string) {
    const response = await authService.signIn(email, password);    
    setUser(response.user);

    api.defaults.headers.common['Authorization'] = `Bearer ${response.token}`

    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@RNAuth:token', JSON.stringify(response.token));
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    })

  }

  return (
    <AuthContext.Provider value={{ signed: !!user, loading, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>

  )
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}