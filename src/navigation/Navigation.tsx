import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screen/LoginScreen';
import { TabsBottomNavigation } from './TabsBottomNavigation';
import { HomeScreen } from '../screen/HomeScreen';

export const Navigation = () => {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    // headerShown: false,
                    headerStyle: {
                        // headerMode: 'screen',                    
                    },
                }}
            >
                <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
                <Stack.Screen options={{ headerShown: false }} name="TabsBottomNavigation" component={TabsBottomNavigation} />
            
            </Stack.Navigator>
        </NavigationContainer>

    )
}