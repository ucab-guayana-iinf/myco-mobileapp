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

var admin = 'true';

export default class Perfil extends React.Component {
  /* Configuraciones del Sidebar*/
  static navigationOptions = {
    drawerLabel: 'Perfil',
    drawerIcon: () => (
      <FontAwesome name="user-circle-o" size={20} color="#1bb98f" />
    ),
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
            marginLeft: 110,
          }}>
          Perfil
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
            marginLeft: 110,
          }}>
          Perfil
        </Text>
      </View>
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
            <FontAwesome name="location-arrow" size={25} color="#1bb98f" />
            <Text style={styles.paragraph3}>{valor}</Text>
          </View>
        </View>
      </Card>
    </View>
  );

  renderContent = (
    <ScrollView>
      <View style={{ marginBottom: 100 }}>
        {this.renderCard('Nombre', 'user-circle', '#1bb98f', 'Miguel')}
        {this.renderCard('Apellido', 'id-card', '#1bb98f', 'Valdez')}
        {this.renderCard('Nro.Social', 'list-ol', '#1bb98f', '1552')}
        {this.renderCard('Email', 'comment', '#1bb98f', 'miguel@hotmail.es')}
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
  );

  render() {
    if (admin == 'true') {
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
