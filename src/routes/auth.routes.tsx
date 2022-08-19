import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../screens/SignIn';

const { Screen, Navigator } = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator>
            <Screen 
                name='SignIn' 
                component={SignIn} 
                options={{
                    title: 'SignIn',
                    headerTitleAlign: 'center',
                    //headerShown: false
                }}/>
        </Navigator>
    );
}