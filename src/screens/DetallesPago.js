import * as React from 'react';
import { 
  Text, 
  View,
  ScrollView, 
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {DrawerActions} from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Modal from '../components/Modal'
import { Card } from 'react-native-elements';
import Estado from '../components/ModalEstado'

var color = 'red';
var valor = 'Rechazado';

export default class DetallesPago extends React.Component {
  Header = (
    <View style={{ backgroundColor: '#1bb98f', }}>
      <View style = {{flexDirection: 'row', marginTop: 40, marginBottom: 10 }}>
        <TouchableOpacity onPress = { () => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
          <FontAwesome name="arrow-left" size={25} color="white" style={{ marginLeft: 20 }}/>
        </TouchableOpacity>
        <Text style = {{ fontSize: 20, color:'white', fontWeight: 'bold', marginLeft: 60}}>
          Detalles de Pago
        </Text>
        <View style={{ marginLeft: 78 }}>
          <Modal/>
        </View> 
      </View>
    </View> 
  );
  
  renderCard = (text, iconname, color, valor) => (
    <View style={styles.container}>
      <Card>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons name={iconname} size={23} color={color} />
          <Text style={styles.paragraph1}>
             {text}
          </Text>
          <Text style={styles.paragraph2}>
             {valor}
          </Text>
        </View>       
      </Card>
    </View>
  );
  
  render() {
    return (
     <View>
        {this.Header}
        <ScrollView>
          {this.renderCard('Propietario', 'ios-person', '#1bb98f', 'Alejandro Chacin')}
          {this.renderCard('Fecha', 'md-calendar', '#2F6FD6', '19/06/2019')}
          {this.renderCard('Monto', 'logo-usd', '#1bb98f', 'Bs 50000')}
          {this.renderCard('Concepto', 'ios-warning', '#2F6FD6', 'Condominio')}
          {this.renderCard('Método', 'ios-card', '#1bb98f', 'Depósito')}
          {this.renderCard('N° de Referencia', 'md-medical', '#2F6FD6', '1234')}
          {this.renderCard('Banco Destino', 'md-business', '#1bb98f', 'Venezuela')}
          <View style={{marginBottom: 100}}>
            <Estado/>
          </View>
        </ScrollView>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  paragraph1: {
    marginLeft: 20,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2F6FD6',
  },
  paragraph2: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 15,
    textAlign: 'center',
    color: 'gray',
  },
});