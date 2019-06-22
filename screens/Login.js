import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  ImageBackground, 
  TextInput, 
  KeyboardAvoidingView,
  Alert
  } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Constants } from 'expo';


export default class LoginClass extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showPass: true, 
      press: false,
    }
  }

  /* Esta funcion nos permitira poder observar la contraseña*/
  showPass(){
    if(this.state.press == false){
      this.setState({ press: true, showPass: false})
    }else{
      this.setState({ press: false, showPass: true})
    }
  }
  
  verificarDatos(){
    const usuario = 'prop';

    if(usuario == 'admin'){
      Alert.alert('Admin');
    }else{
      Alert.alert('Propietario');
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
          {/* Container Logo*/}
          <View style = {styles.containerLogo}>
            <Image source = {require('../Imagenes/logo.png')} style = {{width: 100, height: 100}} />
          </View>

          {/* Container Entrada de Datos*/}
          <View style = {styles.containerInput}>
            <Text style = {{color: 'white', fontSize: 35, fontWeight: 'bold'}}>Iniciar sesión</Text>
          
           {/* Usuario */}
           <Text style = {{color: 'white', fontSize: 10, marginTop: '7%'}}>USUARIO</Text>
              
            <View style = {{flexDirection: 'row', marginTop: '5%'}}>
              <FontAwesome name="user" size={25} color="white"/>
            {/* Ingresar Usuario*/}
              <TextInput  
              style={{width: '83%', borderBottomColor: 'white',borderBottomWidth: 1, marginLeft: '3%', fontSize: 18, color: 'white'}} 

              />
            </View>

           {/* Contraseña*/}
          <View style= {{ flexDirection: 'row'}}> 
            <Text style = {{color: 'white', fontSize: 10, marginTop: '7%'}}>CONTRASEÑA</Text>
            
             {/* Mostrar contraseña*/}
            <TouchableOpacity style = {{marginTop: '6.8%', marginLeft: '60%'}} onPress = {this.showPass.bind(this)}>
               <FontAwesome name={this.state.press == false ? 'eye':'eye-slash'} size={25} color="white"/>
            </TouchableOpacity>
          </View> 

            <View style = {{flexDirection: 'row', marginTop: '5%'}}>
              <FontAwesome name="lock" size={25} color="white"/>
            {/* Ingresar Contraseña*/}
              <TextInput  style={{width: '83%', borderBottomColor: 'white',borderBottomWidth: 1, marginLeft: '3%', fontSize: 18, color: 'white'}} secureTextEntry = {this.state.showPass}/>
            </View>     
          </View>

          {/* Boton de ingreso*/}
          <View style = {{marginTop: '5.5%', marginLeft: 280}}>
            <TouchableOpacity onPress = {this.verificarDatos}>
                <Image source = {require('../Imagenes/btnlogin.png')} style = {{width: 70, height: 70}} />
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#1bb98f',
    flexDirection: 'column',
  },
  containerLogo: {
    marginTop: '2.5%',
    alignItems: 'center',
  },
  containerInput: {
    marginTop: '2.5%',
    marginLeft: '8.8%'
  },
});
