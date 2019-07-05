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

var admin = 'true';

export default class Home extends React.Component {
  /* Configuraciones del Sidebar*/
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: () => (
      <FontAwesome name="home" size={20} color="#1bb98f"/>
    ),
  }

  HeaderAdmin = (
    <View style={{ backgroundColor: '#1bb98f', }}>
      <View style = {{flexDirection: 'row', marginTop: 40, marginBottom: 10 }}>
        <TouchableOpacity onPress = { () => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
          <FontAwesome name="bars" size={25} color="white" style={{ marginLeft: 20 }}/>
        </TouchableOpacity>
        <Text style = {{ fontSize: 20, color:'white', fontWeight: 'bold', marginLeft: 104.5}}>
          Home
        </Text>
        <View style={{ marginLeft: 130 }}>
          <Modal/>
        </View> 
      </View>
    </View> 
  );
  
  Header = (
    <View style={{ backgroundColor: '#1bb98f', }}>
      <View style = {{flexDirection: 'row', marginTop: 40, marginBottom: 10 }}>
        <TouchableOpacity onPress = { () => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
          <FontAwesome name="bars" size={25} color="white" style={{ marginLeft: 20 }}/>
        </TouchableOpacity>
        <Text style = {{ fontSize: 20, color:'white', fontWeight: 'bold', marginLeft: 104.5}}>
          Home
        </Text>
      </View>
    </View> 
  );

  render() {
    if (admin == 'true'){
      return (
        <View>
          {this.HeaderAdmin}
        </View>
      );
    } else {
      return (
        <View>
          {this.Header}
        </View>
      );
    }
  } 
}
