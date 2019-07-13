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
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Card, Header } from 'react-native-elements';
import Modal from '../components/Modal';

export default class DetallesPropiedad extends React.Component {
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
              Detalles de Propiedad
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
          <View style={{ width: 140 }}>
            <Text style={styles.paragraph1}>{text}</Text>
          </View>
          <Text style={styles.paragraph2}>{valor}</Text>
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
              'Propietario',
              'user-circle',
              '#1bb98f',
              'Alejandro Chacin'
            )}
            {this.renderCard('Nombre', 'id-card', '#1bb98f', 'MH-30')}
            {this.renderCard('Nro.Residencia', 'list-ol', '#1bb98f', '15')}
            {this.renderCard('Area', 'globe', '#1bb98f', 'Av.Atlantico')}
            {this.renderCard('Tipo', 'home', '#1bb98f', 'Duplex')}
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
    marginRight: 20,
    fontSize: 15,
    textAlign: 'center',
  },
});
