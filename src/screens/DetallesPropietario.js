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
import { Card, Header } from 'react-native-elements';
import Modal from '../components/Modal';

export default class DetallesPropietario extends React.Component {
  static navigationOptions = {
    drawerLabel: () => null,
  };

  Header = (
    <View>
      <Header
        innerContainerStyles={{ flexDirection: 'row' }}
        backgroundColor="#1bb98f"
        leftComponent={
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Pyp')}>
            <FontAwesome
              name="arrow-left"
              size={25}
              color="white"
            />
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
              Detalles de Propietario
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

  renderCard = (text, iconname, color, valor) => (
    <View style={styles.container}>
      <Card>
        <View style={{ flexDirection: 'row', width: 300 }}>
          <FontAwesome name={iconname} size={25} color={color} />
          <View style={{ width: 95 }}>
            <Text style={styles.paragraph1}>{text}</Text>
          </View>

          <View style={{ width: 200 }}>
            <Text style={styles.paragraph2}>{valor}</Text>
          </View>
        </View>
      </Card>
    </View>
  );

  renderPropiedades = (text, valor) => (
    <View style={styles.container}>
      <Card>
        <View style={{ flexDirection: 'row', width: 300 }}>
          <View style={{ width: 100 }}>
            <Text style={styles.paragraph1}>{text}</Text>
          </View>

          <View style={{ width: 200, flexDirection: 'row' }}>
            <FontAwesome name="globe" size={25} color="#1bb98f" />
            <Text style={styles.paragraph3}>{valor}</Text>
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
            {this.renderCard('Nombre', 'user-circle', '#1bb98f', 'Miguel')}
            {this.renderCard('Apellido', 'id-card', '#1bb98f', 'Valdez')}
            {this.renderCard('Nro.Social', 'list-ol', '#1bb98f', '1552')}
            {this.renderCard(
              'Email',
              'comment',
              '#1bb98f',
              'miguel@hotmail.es'
            )}
            <View
              style={{
                marginTop: 18,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <FontAwesome name="home" size={25} color="#1bb98f" />
              <Text style={styles.paragraph1}>Propiedades</Text>
            </View>
            {this.renderPropiedades('Duplex', 'Av.Atlantico')}
            {this.renderPropiedades('Duplex', 'Av.Atlantico')}
            {this.renderPropiedades('Duplex', 'Av.Atlantico')}
            {this.renderPropiedades('Duplex', 'Av.Atlantico')}
            {this.renderPropiedades('Duplex', 'Av.Atlantico')}
            {this.renderPropiedades('Duplex', 'Av.Atlantico')}
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
    marginLeft: 12,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4458b4',
  },
  paragraph2: {
    marginLeft: 5,
    fontSize: 15,
  },
  paragraph3: {
    marginLeft: 13,
    fontSize: 15,
  },
});
