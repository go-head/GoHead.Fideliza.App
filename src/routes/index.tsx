import React, {useContext} from 'react';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { AuthContext } from '../contexts/Auth';
import { NavigationContainer } from '@react-navigation/native';

export function Routes(){
    const {signed} = useContext(AuthContext);
    return signed ? <AppRoutes /> : <AuthRoutes /> 
}