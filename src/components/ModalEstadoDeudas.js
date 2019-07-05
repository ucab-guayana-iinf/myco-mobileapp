import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-elements';

var estado = 'orange';
var valor = 'Pendiente';

export default class CustomModal extends Component {
  state = {
    visibleModal: null,
  };

  renderModalButton = onPress => (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={require('../assets/images/btnlogin.png')}
        style={{ width: 60, height: 60}}
      />
    </TouchableOpacity>
  );

  renderButton = (text, onPress, color) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Ionicons name="md-radio-button-on" size={25} color={color} />
        <Text style={{ color: 'black', fontSize: 15, marginLeft: 20 }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );

  renderEstado = (
    <View style={{flexDirection: 'row', margin: 20}}>
      <Text style={{ color: 'black', fontSize: 15,}}>
          Estado Actual:   
      </Text>
      <Ionicons name="md-radio-button-on" size={25} color={estado} style={{marginLeft: 20}}/>
      <Text style={{ color: 'black', fontSize: 15, marginLeft: 20}}>
          {valor}      
      </Text>
      
    </View>
  );

  renderModalContent = (
    <View style={styles.modalContent}>
      {this.renderEstado}
      {this.renderButton(
        'Rechazado',
        () => this.setState({ visibleModal: null}),
        'red'
      )}
      {this.renderButton(
        'Pendiente',
        () => this.setState({ visibleModal: null}),
        'orange'
      )}
      {this.renderButton(
        'Cancelado',
        () => this.setState({ visibleModal: null}),
        'green'
      )}

      <TouchableOpacity onPress={() => this.setState({ visibleModal: null })}>
        <View style={styles.buttonClose}>
          <Text style={{color: 'white'}}>Cerrar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  render() {
    switch (estado) {
      case 'red':
        valor = 'Rechazado';
        break;
      case 'orange':
        valor = 'Pendiente';
        break;
      case 'green':
        valor = 'Cancelado';
        break;
    }
    return (
      <View>
        {this.renderModalButton(() => this.setState({ visibleModal: 1 }))}
        <View style={styles.container}>
          <Modal isVisible={this.state.visibleModal === 1}>
            {this.renderModalContent}
          </Modal>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    width: 250,
    backgroundColor: 'white',
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
   buttonClose: {
    backgroundColor: '#1bb98f',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});
