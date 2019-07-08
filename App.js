import React from 'react';
import { Platform, StatusBar, StyleSheet, View,Text } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { Provider } from 'react-redux';
import Sidebar from './src/screens/Deudas';
import Login from './src/screens/perfil';
import NavigatorMain from './src/components/Navigator';
import { store } from './src/_helpers';


export default class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <NavigatorMain />
      </Provider>
  );}

}
