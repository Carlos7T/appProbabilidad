import 'react-native-gesture-handler';

import React from 'react';
import { View, Text } from 'react-native';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './componentes/Home'
import Combinacion from './componentes/Combinacion'
import SplashSCreen from './componentes/SplashScreen'
import Permutacion from './componentes/Permutacion';




const Stack = createStackNavigator();

const App  = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashSCreen"
          screenOptions={{
             headerShown: false
          }}
        >
          <Stack.Screen
              name="SplashSCreen"
              screenOptions={{
                headerShown: false
              }}
              
              component={SplashSCreen}
          />
          <Stack.Screen
              name="Home"
              component={Home}
          />
          <Stack.Screen
              name="Combinacion"
              component={Combinacion}
              options={ ({route}) => ({
                
              }) }
          />
            <Stack.Screen
              name="Permutacion"
              component={Permutacion}
              options={ ({route}) => ({
                
              }) }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;
