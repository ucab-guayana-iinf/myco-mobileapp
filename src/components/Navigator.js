import * as React from 'react';
import { 
  Text,
  View, 
} from 'react-native';
import {
  createAppContainer,
  createStackNavigator
} from 'react-navigation';
import LoginScreen from '../screens/Login';
import AdminSidebarScreen from './Sidebar/AdminSidebar';
import PropSidebarScreen from './Sidebar/Propsidebar';
import Login from '../screens/Deudas';

/* Estructuracion de nuestras pantallas*/
const MainNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    AdminSid: {
      screen: AdminSidebarScreen,
      navigationOptions: {
        header: null
      }
    },
     PropSid: {
      screen: PropSidebarScreen,
      navigationOptions: {
        header: null
      }
    }
  }
);

/* Creamos un container para nuestro navegador*/
const Container = createAppContainer(MainNavigator);

/* - - Esta es nuestra clase/container principal - - */
export default class App extends React.Component {
 
  render() {
    return <Container/>;
  }
}