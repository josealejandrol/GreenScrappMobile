import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '@components/Header/Header'

const Stack = createStackNavigator();

//screens
import SplashScreen from '@screens/SplashScreen';

const AppNavigator = () => {
   const headerConfig = {
                    icoback: require('../assets/close.png'),
                    title: title,
                    alternativeText: 'Iniciar sesión',
                    logo: require('../assets/logo.png'),
                    back: previous ? navigation.goBack : undefined
   };
    return (
    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen 
            name={'SplashScreen'} 
            component={SplashScreen} 
            options={{
                header: ({ navigation,scene, previous, }) => {
                  const { options } = scene.descriptor;
                  const title =
                    options.headerTitle !== undefined
                      ? options.headerTitle
                      : options.title !== undefined
                      ? options.title
                      : scene.route.name; 
                  return <Header {...headerConfig } />
                }
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
