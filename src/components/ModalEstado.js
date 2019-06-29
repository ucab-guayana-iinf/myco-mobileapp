import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-elements';

var estado = 'orange';
var valor = '';

export default class CustomModal extends Component {
  state = {
    visibleModal: null,
  };

  renderModalButton = (onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.containerCard}>
      <Card>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons name='md-radio-button-on' size={23} color={estado} />
          <Text style={styles.paragraph1}>
             Estado
          </Text>
          <Text style={styles.paragraph2}>
             {valor}
          </Text>
        <Image source = {require('../assets/images/btnlogin.png')} style = {{width: 25, height: 25}} />
        </View>
      </Card>
      </View>
    </TouchableOpacity>
  );

  renderButton = (text, onPress, color) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Ionicons name='md-radio-button-on' size={25} color={color} />
        <Text style={{color: 'black', fontSize: 15, marginLeft: 50}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  renderModalContent = (
    <View style={styles.modalContent}>
      {this.renderButton('Rechazado', () => this.setState({ visibleModal: null }), 'red')}
      {this.renderButton(' Pendiente', () => this.setState({ visibleModal: null }), 'orange')}
      {this.renderButton('Cancelado', () => this.setState({ visibleModal: null }), 'green')}
    </View>
  );

  render() {
    switch (estado){
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
  containerCard: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  button: {
    flexDirection: 'row',
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