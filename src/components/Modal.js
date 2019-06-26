import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesome } from '@expo/vector-icons';

export default class CustomModal extends Component {
  state = {
    visibleModal: null,
  };

  renderModalButton = (onPress) => (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome 
        name="ellipsis-v" size={25} color="white"
      />        
    </TouchableOpacity>
  );

  renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={{color: 'white'}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  renderModalContent = () => (
    <View style={styles.modalContent}>
      {this.renderButton('Close', () => this.setState({ visibleModal: null }))}
    </View>
  );

  render() {
    return (
      <View>
          {this.renderModalButton(() => this.setState({ visibleModal: 1 }))}
        <View style={styles.container}>
          <Modal isVisible={this.state.visibleModal === 1}>
            {this.renderModalContent()}
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
    backgroundColor: '#1bb98f',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});