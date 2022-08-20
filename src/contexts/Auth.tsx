import React, { FunctionComponent } from 'react'
import { createContext, useState } from 'react'
import {authService} from '../services/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextData {
    signed: boolean;
    user: object | null
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<object | null>(null);

    async function signIn(email: string, password: string){
        const auth = await authService.signIn(email, password);
        console.log(auth);
        setUser(auth);
        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(auth.user));
        await AsyncStorage.setItem('@RNAuth:token', JSON.stringify(auth.token));
    }

    function signOut() {
        setUser(null);
    }

    return(
        <AuthContext.Provider value= {{signed: !!user, user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
        
    )
}