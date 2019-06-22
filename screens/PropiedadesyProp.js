import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {DrawerActions} from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

export default class PyP extends React.Component {
  /* Configuraciones del Sidebar*/
  static navigationOptions = {
    drawerLabel: 'Propiedades y Propietarios',
    drawerIcon: () => (
     <FontAwesome name="users" size={20} color="#1bb98f"/>
    ),
  }
  
  render() {
    return (
     <View  style = {{flexDirection: 'column',alignItems: 'center'}}>
        {/* Este boton permite mostrar el sidebar*/}
        <TouchableOpacity onPress = { () => this.props.navigation.dispatch(DrawerActions.openDrawer())} style ={{alignItems:'center'}}>
          <FontAwesome name="bars" size={100} color="black"/>
        </TouchableOpacity>
        <Text style = {{fontSize: 50}}>PROPIEDADES Y PROPIETARIOS</Text>
     </View>
    );
  }
}


