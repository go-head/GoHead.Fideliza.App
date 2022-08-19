import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes() {
    return (
        <Navigator
             screenOptions={{
                //headerShown: false
                 //tabBarActiveTintColor: 'red',
                 //tabBarInactiveTintColor: 'green'
            }}
        >
            <Screen 
                name='screenA' 
                component={ScreenA}
                options={{
                    title: 'Extrato',
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons 
                            name="analytics"
                            color={color}
                            size={size}>
                        </MaterialIcons>
                    )
                    //headerShown: false
                }}/>
            <Screen 
                name='screenB' 
                component={ScreenB} 
                options={{
                    title: 'Carteira',
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons 
                            name="account-balance-wallet" 
                            color={color}
                            size={size} />
                    )
                }}
            />
            <Screen 
                name='screenC' 
                component={ScreenB} 
                options={{
                    title: 'Parceiros',
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons 
                            name="search" 
                            color={color}
                            size={size} />
                    )
                }}
            />
            <Screen 
                name='screenD' 
                component={ScreenA} 
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons 
                            name="person" 
                            color={color}
                            size={size} />
                    )
                }}
            />
        </Navigator>
    );
}