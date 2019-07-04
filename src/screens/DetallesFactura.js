import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {DrawerActions} from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import Modal from '../components/Modal'

export default class DetallesFactura extends React.Component {
  Header = (
    <View style={{ backgroundColor: '#1bb98f', }}>
      <View style = {{flexDirection: 'row', marginTop: 40, marginBottom: 10 }}>
        <TouchableOpacity onPress = { () => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
          <FontAwesome name="arrow-left" size={25} color="white" style={{ marginLeft: 20 }}/>
        </TouchableOpacity>
        <Text style = {{ fontSize: 20, color:'white', fontWeight: 'bold', marginLeft: 50}}>
          Detalles de Factura
        </Text>
        <View style={{ marginLeft: 66 }}>
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