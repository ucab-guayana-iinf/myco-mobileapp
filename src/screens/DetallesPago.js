import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { DrawerActions } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Card, Header } from 'react-native-elements';
import Modal from '../components/Modal';
import Estado from '../components/ModalEstado';

var color = 'red';
var valor = 'Rechazado';

export default class DetallesPago extends React.Component {
  static navigationOptions = {
    drawerLabel: () => null,
  };
  Header = (
    <View>
      <Header
        innerContainerStyles={{ flexDirection: 'row' }}
        backgroundColor="#1bb98f"
        leftComponent={
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Pagos')}>
            <FontAwesome
              name="arrow-left"
              size={25}
              color="white"
            />
          </TouchableOpacity>
        }
        centerComponent={
          <View style={{ alignItems: 'center' }}>
            <Text
              style={{
                justifyContent: 'center',
                fontSize: 20,
                color: 'white',
                fontWeight: 'bold',
                alignContent: 'center',
              }}>
              Detalles de Pago
            </Text>
          </View>
        }
        rightComponent={
          <View style={{ alignContent: 'center', alignItems: 'center' }}>
            <Modal />
          </View>
        }
      />
    </View>
  );

  renderCard = (text, iconname, color, valor) => (
    <View style={styles.container}>
      <Card>
        <View style={{ width: 300 }}>
          <View style={{ flexDirection: 'row' }}>
            <Ionicons name={iconname} size={23} color={color} />
            <View style={{ width: 130 }}>
              <Text style={styles.paragraph1}>{text}</Text>
            </View>
            <View style={{ width: 130 }}>
              <Text style={styles.paragraph2}>{text}</Text>
            </View>
          </View>
        </View>
      </Card>
    </View>
  );

  render() {
    return (
      <View>
        {this.Header}
        <ScrollView>
          {this.renderCard(
            'Propietario',
            'ios-person',
            '#1bb98f',
            'Alejandro Chacin'
          )}
          {this.renderCard('Fecha', 'md-calendar', '#2F6FD6', '19/06/2019')}
          {this.renderCard('Monto', 'logo-usd', '#1bb98f', 'Bs 50000')}
          {this.renderCard('Concepto', 'ios-warning', '#2F6FD6', 'Condominio')}
          {this.renderCard('Método', 'ios-card', '#1bb98f', 'Depósito')}
          {this.renderCard('N° de Referencia', 'md-medical', '#2F6FD6', '1234')}
          {this.renderCard(
            'Banco Destino',
            'md-business',
            '#1bb98f',
            'Venezuela'
          )}
          <View style={{ marginBottom: 100 }}>
            <Estado />
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
    marginLeft: 30,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2F6FD6',
  },
  paragraph2: {
    marginLeft: 30,
    marginRight: 20,
    fontSize: 15,
    textAlign: 'center',
    color: 'gray',
  },
});
