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
import { Card, Header } from 'react-native-elements';

var admin = 'true';

export default class Facturas extends React.Component {
  /* Configuraciones del Sidebar*/
  static navigationOptions = {
    drawerLabel: 'Facturas',
    drawerIcon: () => (
      <FontAwesome name="file-text-o" size={20} color="#1bb98f" />
    ),
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
              Facturas
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
              Facturas
            </Text>
          </View>
        }
      />
    </View>
  );

  renderText = (a, b, c) => (
    <View style={{ flexDirection: 'column', marginLeft: 20, width: 180 }}>
      <Text style={styles.paragraph1}>{a}</Text>
      <Text style={styles.paragraph2}>{b}</Text>
      <Text style={styles.paragraph3}>Bs. {c}</Text>
    </View>
  );

  renderCard = (a, b, c) => (
    <View style={styles.container}>
      <Card>
        <View style={{ width: 300 }}>
          <View style={{ flexDirection: 'row' }}>
            <FontAwesome
              name="file"
              size={55}
              color="#1bb98f"
              style={{ marginTop: 14 }}
            />
            {this.renderText(a, b, c)}
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('DFactura')}>
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

  renderContent2 = prop => (
    <ScrollView>
      {this.renderCard(prop, '13/06/2019', '13000')}
      {this.renderCard(prop, '05/07/2019', '5000')}
      {this.renderCard(prop, '16/07/2019', '300')}
      <View style={{ marginBottom: 100 }}>
        {this.renderCard(prop, '19/08/2019', '500')}
      </View>
    </ScrollView>
  );

  renderContent1 = (
    <ScrollView>
      {this.renderCard('Agua', '13/06/2019', '13000')}
      {this.renderCard('Luz', '05/07/2019', '5000')}
      {this.renderCard('Condominio', '16/07/2019', '300')}
      <View style={{ marginBottom: 100 }}>
        {this.renderCard('Agua', '19/08/2019', '500')}
      </View>
    </ScrollView>
  );

  render() {
    var prop = 'MH-30';
    if (admin == 'true') {
      return (
        <View>
          {this.HeaderAdmin}
          {this.renderContent2(prop)}
        </View>
      );
    } else {
      return (
        <View>
          {this.Header}
          {this.renderContent1}
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
