import React from 'react';
import {styles,Colors} from '../Styles/Styles';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeAdminDashboard from '../Components/HomeAdminDashboard';
import Home from './Home';
import UploadCocktail from '../Components/UploadCocktail';
import LeerCodigo from '../Components/LeerCodigo';
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
            <Drawer.Screen name="Subir recetas" component={UploadCocktail} />
            <Drawer.Screen name="Escanear codigo" component={LeerCodigo} />
    </Drawer.Navigator>
  )
}
export default function App() {
    return (
        <MyDrawer />
    );
  }
  