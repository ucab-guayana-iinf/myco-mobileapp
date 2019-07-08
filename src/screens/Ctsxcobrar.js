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

export default class CtasxCobrar extends React.Component {
  /* Configuraciones del Sidebar*/
  static navigationOptions = {
    drawerLabel: 'Cuentas por Cobrar',
    drawerIcon: () => <FontAwesome name="euro" size={20} color="#1bb98f" />,
  };

  Header = (
    <View style={{ backgroundColor: '#1bb98f' }}>
      <View style={{ flexDirection: 'row', marginTop: 40, marginBottom: 10 }}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.openDrawer())
          }>
          <FontAwesome
            name="bars"
            size={25}
            color="white"
            style={{ marginLeft: 20 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
            marginLeft: 55,
          }}>
          Cuentas por Cobrar
        </Text>
        <View style={{ marginLeft: 58 }}>
          <Modal />
        </View>
      </View>
    </View>
  );

  render() {
    return <View>{this.Header}</View>;
  }
}
