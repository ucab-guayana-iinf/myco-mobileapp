import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {DrawerActions} from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

export default class Home extends React.Component {
  /* Configuraciones del Sidebar*/
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: () => (
      <FontAwesome name="home" size={20} color="#1bb98f"/>
    ),
  }
  
  render() {
    return (
     <View  style = {{flexDirection: 'column',alignItems: 'center'}}>
        {/* Este boton permite mostrar el sidebar*/}
        <TouchableOpacity onPress = { () => this.props.navigation.dispatch(DrawerActions.openDrawer())} style ={{alignItems:'center'}}>
          <FontAwesome name="bars" size={100} color="black"/>
        </TouchableOpacity>
        <Text style = {{fontSize: 50}}>HOME</Text>
     </View>
    );
  }
}
