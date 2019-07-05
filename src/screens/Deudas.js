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
import { Card } from 'react-native-elements';
import Modal from '../components/Modal';
import ModalEst from '../components/ModalEstadoDeudas';

var admin = 'true';

export default class Deudas extends React.Component {
  /* Configuraciones del Sidebar*/
  static navigationOptions = {
    drawerLabel: 'Deudas',
    drawerIcon: () => <FontAwesome name="money" size={20} color="#1bb98f" />,
  };

  HeaderAdmin = (
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
            marginLeft: 90.6,
          }}>
          Deudas
        </Text>
        <View style={{ marginLeft: 130 }}>
          <Modal />
        </View>
      </View>
    </View>
  );

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
            marginLeft: 90.6,
          }}>
          Deudas
        </Text>
      </View>
    </View>
  );

  /* Componente que nos permitira escribir en la tarjeta*/
  renderText = (propiedad, motivo, monto) => (
    <View style={{ flexDirection: 'column', marginLeft: 10, width: 220 }}>
      <Text style={styles.paragraph1}>{propiedad}</Text>
      <Text style={styles.paragraph2}>{motivo}</Text>
      <Text style={styles.paragraph3}>{monto}</Text>
    </View>
  );

  /* Este componente nos permitira implementar la tarjeta informativa*/
  renderCard = (propiedad, motivo, monto) => (
    <View style={styles.containerCard}>
      <Card>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'column' }}>
            <FontAwesome
              style={{ marginTop: 5 }}
              name="home"
              size={20}
              color="#1bb98f"
            />
            <FontAwesome
              style={{ marginTop: 7 }}
              name="warning"
              size={20}
              color="#4458b4"
            />
            <FontAwesome
              style={{ marginTop: 10 }}
              name="money"
              size={20}
              color="#1bb98f"
            />
          </View>

          {this.renderText(propiedad, motivo, monto)}
          <ModalEst />
        </View>
      </Card>
    </View>
  );

  renderContent = (
    <ScrollView>
      <View style={{ marginBottom: 100 }}>
        {this.renderCard('MH-30', 'Agua', 'Bs. 13.000')}
        {this.renderCard('MH-31', 'Agua', 'Bs. 13.000')}
        {this.renderCard('MH-31', 'Luz', 'Bs. 13.000')}
      </View>
    </ScrollView>
  );

  render() {
    if (admin == 'true'){
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
  containerCard: {
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
    fontSize: 15,
    color: 'black',
  },
});
