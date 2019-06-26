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
import Modal from '../components/Modal'

export default class PyP extends React.Component {
  /* Configuraciones del Sidebar*/
  static navigationOptions = {
    drawerLabel: 'Propiedades y Propietarios',
    drawerIcon: () => (
     <FontAwesome name="users" size={20} color="#1bb98f"/>
    ),
  }

  Header = (
    <View style={{ backgroundColor: '#1bb98f', }}>
      <View style = {{flexDirection: 'row', marginTop: 40, marginBottom: 10 }}>
        <TouchableOpacity onPress = { () => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
          <FontAwesome name="bars" size={25} color="white" style={{ marginLeft: 20 }}/>
        </TouchableOpacity>
        <Text style = {{ fontSize: 20, color:'white', fontWeight: 'bold', marginLeft: 22}}>
          Propiedades y Propietarios
        </Text>
        <View style={{ marginLeft: 25 }}>
          <Modal/>
        </View> 
      </View>
    </View> 
  );
  
  render() {
    return (
     <View>
        {this.Header}
     </View>
    );
  }
}


