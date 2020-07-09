import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './src/Controller/NavigationService';
import Login from './src/Views/Login';
import Register from './src/Views/Register';
import Home from './src/Views/Home';
import HomeAdmin from './src/Views/HomeAdmin';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer  ref={navigationRef}>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomeAdmin" component={HomeAdmin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


