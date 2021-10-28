import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
import { FirstExample } from '../pages/FirstExample';

const Stack = createNativeStackNavigator();

export const AppRoutes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FirstExample" component={FirstExample}/>
    </Stack.Navigator>
  )
}
