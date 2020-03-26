import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '@components/Header/Header'

const Stack = createStackNavigator();

//screens
import SplashScreen from '@screens/SplashScreen';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
            header: ({ navigation }) => {
                        return <Header
                        icoback={require('../assets/close.png')}
                        title={'Registrate'}
                        alternativeText={'Iniciar sesión'}
                        logo={require('../assets/logo.png')}
                        />
                    }
                }
            }
      >
        <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
