import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screen/LoginScreen';
import { TabsBottomNavigation } from './TabsBottomNavigation';
import { useAppSelector } from '../store/hooks';
import { RootState } from '../store/store';


export const Navigation = () => {

    const Stack = createStackNavigator();
    const loginResponse = useAppSelector((state: RootState) => state.AuthReducer);

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    // headerShown: false,
                    headerStyle: {                  
                    },
                }}
            >
                {
                    loginResponse.isLoggedIn
                        ? <Stack.Screen options={{ headerShown: false }} name="TabsBottomNavigation" component={TabsBottomNavigation} />
                        : <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
                }
            </Stack.Navigator>
        </NavigationContainer>

    )
}