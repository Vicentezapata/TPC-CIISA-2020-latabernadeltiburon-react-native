import * as React from 'react';
import {View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text,Icon } from 'react-native-elements'
import {styles,Colors,Sizes} from '../Styles/Styles';
import Ingredientes from './Ingredientes';
import Cocteles from './Cocteles';
import VideoCallBarTender from './VideoCallBarTender';

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Cocteles"
      tabBarOptions={{
        activeTintColor: Colors.accent,
        inactiveTintColor: Colors.accent,
        inactiveBackgroundColor: Colors.primary,
        activeBackgroundColor: Colors.darkPrimary,
        style: { backgroundColor: Colors.darkPrimary },
      }}>
      <Tab.Screen name="Cocteles" component={Cocteles} 
        options={{tabBarLabel: 'Cocteles',
            tabBarIcon: ({ color, size }) => (
              <Icon name='cocktail'
              type='font-awesome-5' 
              color={Colors.accent} size={Sizes.icon} />
            ),
          }} 
        />
      <Tab.Screen name="Ingredientes" component={Ingredientes} 
        options={{
          tabBarLabel: 'Ingredientes',
          tabBarIcon: () => (
              <Icon name='lemon'
              type='font-awesome-5' 
              color={Colors.accent} size={Sizes.icon} />
            ),
          }} 
      />
      <Tab.Screen name="VideoCallBarTender" component={VideoCallBarTender} 
        options={{
          tabBarLabel: 'VideoCallBarTender',
          tabBarIcon: () => (
              <Icon name='lemon'
              type='font-awesome-5' 
              color={Colors.accent} size={Sizes.icon} />
            ),
          }} 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (

      <MyTabs />
  );
}
