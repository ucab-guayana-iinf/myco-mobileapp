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
import Pie from 'react-native-pie';
import { Card, Header } from 'react-native-elements';
import ModalEst from '../components/ModalEstadoDeudas';

var usuario = 'Admin';

export default class Home extends React.Component {
  /* Configuraciones del Sidebar*/
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: () => <FontAwesome name="home" size={20} color="#1bb98f" />,
  };

  HeaderAdmin = (
    <View>
      <Header
        innerContainerStyles={{ flexDirection: 'row' }}
        backgroundColor="#1bb98f"
        leftComponent={
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.dispatch(DrawerActions.openDrawer())
            }>
            <FontAwesome name="bars" size={25} color="white" />
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
              Home
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
            onPress={() =>
              this.props.navigation.dispatch(DrawerActions.openDrawer())
            }>
            <FontAwesome name="bars" size={25} color="white" />
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
              Home
            </Text>
          </View>
        }
      />
    </View>
  );

  /* Este componente nos permitira implementar la tarjeta de las cuentas por cobrar*/
  renderCard = (apt, monto) => (
    <View style={styles.containerCard}>
      <Card>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.paragraph2}>{apt}</Text>
          <Text style={styles.paragraph2}> </Text>
          <Text style={styles.paragraph2}>{monto}</Text>
          <Text style={styles.paragraph2}> </Text>
          <ModalEst />
        </View>
      </Card>
    </View>
  );

  /* Mensajes */
  renderCardMsj = (persona, msj) => (
    <View style={styles.containerCard}>
      <Card>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.paragraph4}>
            {persona}: {msj}
          </Text>
        </View>
      </Card>
    </View>
  );

  /* Pie para la gráfica de deudores y no deudores para el administrador */
  renderPieAdmin = (deudores, nodeudores) => (
    <Card>
      <View style={{ alignItems: 'center' }}>
        <Pie
          radius={120}
          innerRadius={60}
          series={[
            (deudores * 100) / (deudores + nodeudores),
            (nodeudores * 100) / (deudores + nodeudores),
          ]}
          colors={['#b2355b', '#3a2d58']}
        />
        <View style={styles.gauge}>
          <Text style={styles.gaugeText}>
            {deudores} deudores, {nodeudores} no deudores
          </Text>
        </View>
      </View>
    </Card>
  );

  /* Pie para la gráfica de las deudas del propietario */
  renderPie = (agua, electri, manten, segu) => (
    <Card>
      <View style={{ alignItems: 'center' }}>
        <Pie
          radius={120}
          innerRadius={60}
          series={[
            (agua * 100) / (agua + electri + manten + segu),
            (electri * 100) / (agua + electri + manten + segu),
            (manten * 100) / (agua + electri + manten + segu),
            (segu * 100) / (agua + electri + manten + segu),
          ]}
          colors={['#ff9e13', '#f71f60', '#9c3454', '#3a2d58']}
        />
        <Text style={styles.paragraph4}>
          Agua: {agua} BSS ({(agua * 100) / (agua + electri + manten + segu)}%)
        </Text>
        <Text style={styles.paragraph4}>
          Electricidad: {electri} BSS (
          {(electri * 100) / (agua + electri + manten + segu)}%)
        </Text>
        <Text style={styles.paragraph4}>
          Mantenimiento: {manten} BSS (
          {(manten * 100) / (agua + electri + manten + segu)}%)
        </Text>
        <Text style={styles.paragraph4}>
          Seguridad: {segu} BSS (
          {(segu * 100) / (agua + electri + manten + segu)}%)
        </Text>
      </View>
    </Card>
  );

  pantalla = miusuario =>
    miusuario == 'Admin'
      ? (<Text style={styles.paragraph3}>Lomas del Caroní</Text>,
        (
          <View style={{ marginBottom: 100 }}>
            <View style={styles.container}>
              <View style={{ marginTop: 30 }}>
                <Text style={styles.paragraph}>Deudores</Text>
              </View>
              <View style={{ marginTop: 20 }}>
                {this.renderPieAdmin(7, 3)}
                <View style={{ marginTop: 30 }}>
                  <Text style={styles.paragraph}>Cuentas por cobrar</Text>
                </View>
                <View style={{ marginTop: 30 }}>
                  <Text style={styles.paragraph}>Apt Monto</Text>
                </View>
                {this.renderCard('A-1', '300.000 BSS')}
                {this.renderCard('A-2', '600.000 BSS')}
                {this.renderCard('A-3', '900.000 BSS')}
                {this.renderCard('A-4', '50.000 BSS')}
                <View style={{ marginTop: 30 }}>
                  <Text style={styles.paragraph}>
                    Mensajes de la residencia
                  </Text>
                </View>
                {this.renderCardMsj('Erick Rozas', 'Esto es un mensaje')}
              </View>
            </View>
          </View>
        ))
      : (<Text style={styles.paragraph3}>Lomas del Caroní</Text>,
        (
          <View style={{ marginBottom: 100 }}>
            <View style={styles.container}>
              <View style={{ marginTop: 30 }}>
                <Text style={styles.paragraph}>Deudas</Text>
              </View>
              <View style={{ marginTop: 20 }}>
                {this.renderPie(1, 1, 1, 1)}
                <View style={{ marginTop: 30 }}>
                  <Text style={styles.paragraph}>
                    Mensajes de la residencia
                  </Text>
                </View>
                {this.renderCardMsj('Erick Rozas', 'Esto es un mensaje')}
              </View>
            </View>
          </View>
        ));

  render() {
    if (usuario == 'Admin') {
      return (
        <View>
          {this.HeaderAdmin}
          <ScrollView>{this.pantalla('Admin')}</ScrollView>
        </View>
      );
    } else {
      return (
        <View>
          {this.Header}
          <ScrollView>{this.pantalla('propietario')}</ScrollView>
        </View>
      );
    }
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
  containerCard: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
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
  paragraph3: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
  },
  paragraph4: {
    fontSize: 15,
    color: 'black',
    marginTop: 10,
    textAlign: 'left',
  },
  gauge: {
    position: 'absolute',
    width: 100,
    left: 90,
    top: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
  },
});
