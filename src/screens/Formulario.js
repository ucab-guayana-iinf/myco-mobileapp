import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import { DrawerActions } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';
import { Card, Header } from 'react-native-elements';
import Modal from '../components/Modal';

export default class Formulario extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: () => <FontAwesome name="address-card" size={20} color="#1bb98f" />,
  };

  Header = (
    <View>
      <Header
        innerContainerStyles={{ flexDirection: 'row' }}
        backgroundColor="#1bb98f"
        leftComponent={
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}>
            <FontAwesome name="arrow-left" size={25} color="white" />
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
                Formulario de Pago
            </Text>
          </View>
        }
      />
    </View>
  );

  renderEscribir = iconname => (
    <View style={{ flexDirection: 'row', marginTop: '5%' }}>
      <Ionicons name={iconname} size={25} color="#1bb98f" />
      {/* Ingresar Dato*/}
      <TextInput
        style={{
          width: '83%',
          borderBottomColor: 'dimgrey',
          borderBottomWidth: 1,
          marginLeft: '3%',
          fontSize: 18,
          color: 'black',
        }}
      />
    </View>
  );

  renderFormulario = (text, iconname) => (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <Text
          style={{
            color: '#2F6FD6',
            fontSize: 18,
            marginTop: '7%',
          }}>
          {text}
        </Text>
        {this.renderEscribir(iconname)}
      </View>
    </View>
  );

  renderButton = onPress => (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={{ color: 'white' }}>Enviar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  renderTitulo = (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text
          style={{
            color: 'black',
            fontSize: 21,
            fontWeight: 'bold',
            marginTop: '7%',
          }}>
          Ingresar datos indicados
        </Text>
      </View>
    </View>
  );

  renderDivider = (
    <View
      style={{
        marginTop: '7%',
        borderBottomWidth: 1,
        borderBottomColor: 'dimgrey',
        width: 250,
      }}
    />
  );

  render() {
    return (
      <View>
        {this.Header}
        <ScrollView>
          {this.renderTitulo}
          <Card>
            {this.renderFormulario('Fecha', 'md-calendar')}
            {this.renderFormulario('Método', 'ios-card')}
            {this.renderFormulario('Número de referencia', 'md-medical')}
            {this.renderFormulario('Banco', 'md-business')}
            {this.renderFormulario('Concepto', 'ios-warning')}
            {this.renderFormulario('Monto', 'logo-usd')}
          </Card>
          {this.renderButton(null)}

          <View style={{ marginBottom: 150 }} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
  },
  containerInput: {
    marginTop: '2.5%',
    marginLeft: '8.8%',
  },
  button: {
    backgroundColor: '#1bb98f',
    padding: 12,
    marginTop: 60,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});
