import * as React from 'react';
import { 
  Text,
  View, 
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView
} from 'react-native';
import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems
} from 'react-navigation';
import { Constants } from 'expo';
{/* Importacion de Componentes*/}
import HomeScreen from '../../screens/home';
import PerfilScreen from '../../screens/perfil';
import DeudasScreen from '../../screens/Deudas';
import FacturasScreen from '../../screens/Factura';


export default class Propietario extends React.Component { 
  render(){    
    return(
      <PropSidebar/>
    );
  }
}

const customNav = (props) => (
  <SafeAreaView style = {{flex: 1}}>
    
    <View style = {styles.container}>
      <Image source = {require('../../Imagenes/logo.png')} style = {{width:110, height: 110}}/>
        <View style = {{alignItems: 'center'}}>
          <Text style = {{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Nombre de Usuario</Text>
          <Text style = {{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Propietario</Text>
          <Text style = {{color: '#2F6FD6', fontSize: 15, fontWeight: 'bold'}}>usuario@hotmail.com</Text>
        </View>
    </View>
    
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const PropContainerDrawer = createDrawerNavigator(
  {
    Perfil: PerfilScreen,
    Home: HomeScreen,
    Deudas: DeudasScreen,
    Facturas: FacturasScreen,  
  },
  {
    contentComponent: customNav
  }
);
const PropSidebar = createAppContainer(PropContainerDrawer);


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: '35%',
    alignItems: 'center',
    backgroundColor: '#1bb98f',
    justifyContent: 'center',
  },
});