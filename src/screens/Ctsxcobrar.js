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
import { Card } from 'react-native-elements';

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

  textodeuda = (deudatotal, npropietarios) => (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Se deben {deudatotal / npropietarios} BsS por propietario
      </Text>
      <Text style={styles.paragraph}>Total por cobrar: {deudatotal} BsS</Text>
    </View>
  );

  /* Este componente nos permitira implementar la tarjeta de las cuentas por cobrar*/
  renderCard = (apt, deuda, monto) => (
    <View style={styles.containerCard}>
      <Card>
        <View style={{ alignItems: 'center' }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.paragraph2}>
              {apt} {deuda} {monto} BsS
            </Text>
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
          <View style={{ marginBottom: 100 }}>
            {this.textodeuda(75000, 5)}
            <View style={{ marginTop: 30 }}>
              <View style={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                  <FontAwesome name="home" size={35} color="#1bb98f" />
                  <Text style={styles.paragraph2}> </Text>
                  <FontAwesome name="warning" size={35} color="#4458b4" />
                  <Text style={styles.paragraph2}> </Text>
                  <FontAwesome name="dollar" size={35} color="#1bb98f" />
                </View>
              </View>
            </View>
            {this.renderCard('MH-30', 'Agua', 50000)}
            {this.renderCard('MH-31', 'Agua', 30000)}
            {this.renderCard('MH-32', 'Agua', 20000)}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 30,
  },
  paragraph: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
  },
  paragraph2: {
    fontSize: 20,
    color: 'black',
    marginTop: 10,
    textAlign: 'left',
  },
});
