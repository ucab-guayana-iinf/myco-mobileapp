import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ListView,
  Alert,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import { DrawerActions } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import { Card, Header } from 'react-native-elements';
import Modal from '../components/Modal';

export default class PyP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  /* Configuraciones del Sidebar*/
  static navigationOptions = {
    drawerLabel: 'Propiedades y Propietarios',
    drawerIcon: () => <FontAwesome name="users" size={20} color="#1bb98f" />,
  };

  /* Configuraciones del Header*/
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
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',
                alignContent: 'center',
              }}>
              Propiedades y Propietarios
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

  /* Componente que nos permitira escribir en la tarjeta*/
  renderText = (propiedad, nombre, email) => (
    <View style={{ flexDirection: 'column', marginLeft: 10, width: 235 }}>
      <Text style={styles.paragraph1}>{propiedad}</Text>
      <Text style={styles.paragraph2}>{nombre}</Text>
      <Text style={styles.paragraph3}>{email}</Text>
    </View>
  );

  /* Este componente nos permitira implementar la tarjeta informativa*/
  renderCard = (propiedad, nombre, email) => (
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
              name="users"
              size={20}
              color="#4458b4"
            />
            <FontAwesome
              style={{ marginTop: 13 }}
              name="comment"
              size={20}
              color="#1bb98f"
            />
          </View>

          {this.renderText(propiedad, nombre, email)}

          <View style={{ marginLeft: 8 }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('DPropiedad')}>
              <Image
                source={require('../assets/images/botonverde.png')}
                style={{ width: 33, height: 33 }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('DPropietario')}>
              <Image
                source={require('../assets/images/botonazul.png')}
                style={{ width: 33, height: 33 }}
              />
            </TouchableOpacity>
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
            {this.renderCard(
              'Manzana 18',
              'Miguel  Andres Valdez Duarte',
              'miguelandres9@hotmail.es'
            )}
            {this.renderCard(
              'Manzana 15',
              'Miguel Valdez',
              'miguelandres9@hotmail.es'
            )}
            {this.renderCard(
              'Manzana 14',
              'Miguel Valdez',
              'miguelandres9@hotmail.es'
            )}
            {this.renderCard(
              'Manzana 13',
              'Miguel Valdez',
              'miguelandres9@hotmail.es'
            )}
            {this.renderCard(
              'Manzana 14',
              'Miguel Valdez',
              'miguelandres9@hotmail.es'
            )}
            {this.renderCard(
              'Manzana 16',
              'Miguel Valdez',
              'miguelandres9@hotmail.es'
            )}
            {this.renderCard(
              'Manzana 12',
              'Miguel Valdez',
              'miguelandres9@hotmail.es'
            )}
            {this.renderCard(
              'Manzana 11',
              'Miguel Valdez',
              'miguelandres9@hotmail.es'
            )}
            {this.renderCard(
              'Manzana 19',
              'Miguel Valdez',
              'miguelandres9@hotmail.es'
            )}
            {this.renderCard(
              'Manzana 10',
              'Miguel Valdez',
              'miguelandres9@hotmail.es'
            )}
          </View>
        </ScrollView>
      </View>
    );
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
