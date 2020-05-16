import React from 'react';
import { View,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,Text } from 'react-native';
import {styles,Colors} from '../Styles/Styles';
import HomeAdminDashboard from '../Components/HomeAdminDashboard';
import Home from './Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName=""
        drawerStyle={{
            backgroundColor: Colors.darkPrimary,
            width: 240,
        }}
        drawerContentOptions={{
            activeTintColor: Colors.lightPrimary,
            itemStyle: { marginVertical: 0 },
        }}
    >
            <Drawer.Screen name="Menu principal" component={HomeAdminDashboard} />
            <Drawer.Screen name="Vista Usuario" component={Home} />
    </Drawer.Navigator>
  )
}
export default function App() {
    return (
        <MyDrawer />
    );
  }
  