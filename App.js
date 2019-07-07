import React from 'react';
import { Platform, StatusBar, StyleSheet, View,Text } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import Sidebar from './src/screens/Deudas';
import Login from './src/screens/perfil';
import NavigatorMain from './src/components/Navigator';


export default class App extends React.Component {
  render(){
    return(
      <NavigatorMain />
  );}

}
