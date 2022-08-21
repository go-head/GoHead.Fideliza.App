import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'

import { Statement } from '../screens/Statement';
import { Wallet } from '../screens/Wallet';
import { Partner } from '../screens/Partner';
import { Person } from '../screens/Person';

const { Screen, Navigator } = createBottomTabNavigator();

export function AppRoutes() {
    return (
        <Navigator
            screenOptions={{
                //headerShown: false
                //tabBarActiveTintColor: 'red',
                //tabBarInactiveTintColor: 'green'
            }}
        >
            <Screen
                name='Statement'
                component={Statement}
                options={{
                    title: 'Extrato',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="analytics"
                            color={color}
                            size={size}>
                        </MaterialIcons>
                    )
                    //headerShown: false
                }} />
            <Screen
                name='Wallet'
                component={Wallet}
                options={{
                    title: 'Carteira',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="account-balance-wallet"
                            color={color}
                            size={size} />
                    )
                }}
            />
            <Screen
                name='Parceiro'
                component={Partner}
                options={{
                    title: 'Parceiros',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="search"
                            color={color}
                            size={size} />
                    )
                }}
            />
            <Screen
                name='Perfil'
                component={Person}
                options={{
                    headerShown: false,
                    title: 'Perfil',
                    tabBarIcon: ({ color, size }) => (
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