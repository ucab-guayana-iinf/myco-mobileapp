import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { DrawerActions } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import Modal from '../components/Modal';
import { Header } from 'react-native-elements';

var admin = 'true';

export default class DetallesFactura extends React.Component {
  static navigationOptions = {
    drawerLabel: () => null,
  };

  HeaderAdmin = (
    <View>
      <Header
        innerContainerStyles={{ flexDirection: 'row' }}
        backgroundColor="#1bb98f"
        leftComponent={
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Facturas')}>
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
              Detalles de Factura
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

  Header = (
    <View>
      <Header
        innerContainerStyles={{ flexDirection: 'row' }}
        backgroundColor="#1bb98f"
        leftComponent={
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Facturas')}>
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
              Detalles de Factura
            </Text>
          </View>
        }
      />
    </View>
  );

  renderPersonal = (direccion, fecha, hora, propiedad) => (
    <View style={styles.container}>
      <Text
        style={{
          marginBottom: 10,
          fontSize: 20,
          color: 'dimgrey',
          fontWeight: 'bold',
        }}>
        {direccion}
      </Text>
      <Text style={styles.paragraph1}>{fecha}</Text>
      <Text style={styles.paragraph1}>{hora}</Text>
      <Text style={styles.paragraph1}>{propiedad}</Text>
    </View>
  );

  renderTextPago = (concepto, valor) => (
    <View style={{ flexDirection: 'row', marginBottom: 35 }}>
      <Text style={styles.paragraph2}>{concepto}</Text>
      <Text style={{ fontSize: 19, marginLeft: 30 }}>{valor}</Text>
    </View>
  );

  renderPago = (condicion, metodo, nro) => (
    <View style={styles.container}>
      {this.renderTextPago('Condiciones de Pago:', condicion)}
      {this.renderTextPago('Metódo de Pago:', metodo)}
      <Text style={styles.paragraph2}>Factura #{nro}</Text>
    </View>
  );

  renderMonto = monto => (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.paragraph2}>Condominio</Text>
        <Text style={{ fontSize: 19, marginLeft: 60 }}>Bs. {monto}</Text>
      </View>
    </View>
  );

  renderDivider = (
    <View style={styles.container}>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'dimgrey',
          width: 200,
        }}
      />
    </View>
  );

  renderContent = (
    <View style={{ marginTop: 20 }}>
      {this.renderPersonal('Las Orquideas', '31/05/2019', '11:52 AM', 'MH-30')}
      {this.renderDivider}
      {this.renderPago('Contado', 'Depósito', '12345')}
      {this.renderDivider}
      {this.renderMonto('13000')}
    </View>
  );

  render() {
    if (admin == 'true') {
      return (
        <View>
          {this.HeaderAdmin}
          {this.renderContent}
        </View>
      );
    } else {
      return (
        <View>
          {this.Header}
          {this.renderContent}
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 30,
  },
  paragraph1: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph2: {
    fontSize: 19,
    color: 'black',
    fontWeight: 'bold',
  },
});
