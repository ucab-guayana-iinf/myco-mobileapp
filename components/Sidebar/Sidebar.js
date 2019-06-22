import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Alert 
} from 'react-native';
import PropSidebar from './Propsidebar';
import AdminSidebar from './AdminSidebar';

export default class Sidebar extends React.Component {
  render() {
    const usuario = this.props.usuario;
    return (
      usuario == 'Admin' ? (<AdminSidebar/>) : (<PropSidebar/>)
    );
  }
}
