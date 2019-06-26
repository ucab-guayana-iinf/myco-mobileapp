import React from 'react';
import { Platform, StatusBar, StyleSheet, View,Text } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import Sidebar from './src/components/Sidebar/Sidebar';
import Login from './src/screens/Login';


export default class App extends React.Component {
  render(){
    return(
      <Login />
  );}

}
