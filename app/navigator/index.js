import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

//screens
import SplashScreen from '@screens/SplashScreen';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
