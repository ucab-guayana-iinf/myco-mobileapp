import * as React from 'react';
import { 
  Text,
  View, 
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image
} from 'react-native';

import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems
} from 'react-navigation';
import { Constants } from 'expo';
{/* Importacion de Componentes*/}
import LoginScreen from '../../screens/Login';
import Ctsxcobrar from '../../screens/Ctsxcobrar';
import HomeScreen from '../../screens/home';
import PerfilScreen from '../../screens/perfil';
import DeudasScreen from '../../screens/Deudas';
import FacturasScreen from '../../screens/Factura';
import PagosScreen from '../../screens/Pagos';
import PypScreen from '../../screens/PropiedadesyProp'


export default class Admin extends React.Component { 
  render(){  
    return(
      <AdminSidebar/>
    );
  }
}


const customNav = (props) => (
  <SafeAreaView style = {{flex: 1}}>
    
    <View style = {styles.container}>
      <Image source = {require('../../Imagenes/logo.png')} style = {{width:110, height: 110}}/>
        <View style = {{alignItems: 'center'}}>
          <Text style = {{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Nombre de Usuario</Text>
          <Text style = {{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Admin</Text>
          <Text style = {{color: '#2F6FD6', fontSize: 15, fontWeight: 'bold'}}>usuario@hotmail.com</Text>
        </View>
    </View>
    
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)


const AdminContainerDrawer = createDrawerNavigator(
  {
    Perfil:PerfilScreen,
    Home: HomeScreen,
    Pyp: PypScreen,
    Cuentas_por_Cobrar: Ctsxcobrar,
    Deudas: DeudasScreen,
    Facturas: FacturasScreen,
    Pagos: PagosScreen,   
  },
  {
    contentComponent: customNav
  }
);
const AdminSidebar = createAppContainer(AdminContainerDrawer);

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: '35%',
    alignItems: 'center',
    backgroundColor: '#1bb98f',
    justifyContent: 'center',
  },
});

