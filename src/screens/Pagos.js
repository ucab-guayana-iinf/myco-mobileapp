import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { DrawerActions } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import { Card } from 'react-native-elements';
import Modal from '../components/Modal';

export default class Pagos extends React.Component {
  /* Configuraciones del Sidebar*/
  static navigationOptions = {
    drawerLabel: 'Pagos',
    drawerIcon: () => (
      <FontAwesome name="credit-card-alt" size={20} color="#1bb98f" />
    ),
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
            marginLeft: 102,
          }}>
          Pagos
        </Text>
        <View style={{ marginLeft: 130 }}>
          <Modal />
        </View>
      </View>
    </View>
  );

  renderText = (propiedad, fecha, servicio) => (
    <View style={{ flexDirection: 'column', marginLeft: 20, width: 190 }}>
      <Text style={styles.paragraph1}>{propiedad}</Text>
      <Text style={styles.paragraph2}>{fecha}</Text>
      <Text style={styles.paragraph3}>{servicio}</Text>
    </View>
  );

  renderCard = (propiedad, fecha, servicio) => (
    <View style={styles.container}>
      <Card>
        <View style={{ width: 300 }}>
          <View style={{ flexDirection: 'row' }}>
            <FontAwesome
              name="dollar"
              size={55}
              color="#1bb98f"
              style={{ marginTop: 14 }}
            />
            {this.renderText(propiedad, fecha, servicio)}
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('DPago')}>
              <Image
                source={require('../assets/images/btnlogin.png')}
                style={{ width: 60, height: 60, marginTop: 12 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </View>
  );

  render() {
    var prop = 'MH-30';
    return (
      <View>
        {this.Header}
        <ScrollView>
          {this.renderCard(prop, '13/06/2019', 'Agua')}
          {this.renderCard(prop, '05/07/2019', 'Luz')}
          {this.renderCard(prop, '16/07/2019', 'Condominio')}
          <View style={{ marginBottom: 100 }}>
            {this.renderCard(prop, '19/08/2019', 'Agua')}
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
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  paragraph2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  paragraph3: {
    fontSize: 20,
    color: 'black',
  },
});
