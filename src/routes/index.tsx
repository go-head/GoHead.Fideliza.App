import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { StackRoutes } from './stack.routes'
import { TabRoutes } from './tab.routes';

export function Routes(){
    const auth = false;
    return (
        <NavigationContainer>
            {auth ? <AppRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    );
}