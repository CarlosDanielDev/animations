import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
import { FirstExample } from '../pages/FirstExample';
import { PanAnimation } from '../pages/PanAnimation';
import { HorizontalSlider } from '../pages/HorizontalSlider';
import { Transitions } from '../pages/Transitions';

const Stack = createNativeStackNavigator();

export const AppRoutes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FirstExample" component={FirstExample}/>
      <Stack.Screen name="HorizontalSlider" component={HorizontalSlider}/>
      <Stack.Screen name="PanAnimation" component={PanAnimation}/>
      <Stack.Screen name="Transitions" component={Transitions}/>
    </Stack.Navigator>
  )
}
