import React from 'react';
import { Alert,View,ActivityIndicator } from 'react-native';
import { Card,Button,Input,Text,Icon } from 'react-native-elements'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Image from 'react-native-scalable-image';
import {styles,Colors} from '../Styles/Styles';
import * as NavigationService from '../Controller/NavigationService';


export default class RegisterCard extends React.Component {
    constructor(props){ 
        super(props) 
        this.state = { 
          email: '', 
          password: '', 
          name: '', 
          displayErrorPass:'none',
          displayErrorUsername:'none',
          displayErrorName:'none',
        }     
    } 
    

    //METODO QUE VALIDA LA CLAVE Y EL USUARIO
    _handlePress() { 
        var bodyEnviar = JSON.stringify({"email": this.state.email,"password" : this.state.password,"name":this.state.name,"type_user":'user'})
        console.log(bodyEnviar);
        /*NavigationService.navigate('Dashboard')*/
        if (this.state.username=="") {
            this.setState({displayErrorUsername:'flex'});
          }
          else{
            this.setState({displayErrorUsername:'none'});
          }
          if (this.state.password=="") {
            this.setState({displayErrorPass:'flex'});
          }
          else{
            this.setState({displayErrorPass:'none'});
          }
          //ENVIAMOS VALORES
          let data = 
          {
            method: 'POST',
            headers:{Accept:'application/json','Content-Type':'application/json'},
            body:bodyEnviar
          }
          fetch('http://192.168.0.18:8300/users/store',data)
          .then((response) => response.json())
          .then(
            (responseJson) => 
            {
              console.log(responseJson) 
              NavigationService.navigate('Login');
              /*if (responseJson.permission=="1" && responseJson.type_user=="user") {
                this.setState({displayErrorUsername:'none'});
                this.setState({displayErrorPass:'none'});
                NavigationService.navigate('Home');
              }
              else if (responseJson.permission=="1" && responseJson.type_user=="admin") {
                this.setState({displayErrorUsername:'none'});
                this.setState({displayErrorPass:'none'});
                NavigationService.navigate('HomeAdmin');
              }*/
            }
          )
          .catch(
            (error) => console.error(error) 
          )
        //console.log(this.state.username); 
        //console.log(this.state.password);
    } 
    //METODO QUE MUESTRA POP UP DE RECORDAR CLAVE
    _forgotPass() 
          {
        Alert.alert("¿Deseas recuperar tu clave?");
          }
    //METODO QUE MUESTRA POP UP DE REGISTRARSE
    _signup() {
        Alert.alert("¿Deseas registrarse?");
    }
    render() {
      const { navigation } = this.props;
      return (
        <View style={styles.container} navigation = {navigation}>
          <Card
            wrapperStyle={styles.containerCardLogin}
            containerStyle={{width:'90%', height: '90%'}}
            >
            <Image
                  width={width= wp('70%')} // height will be calculated automatically
                  height={width= wp('70%')}
                  source={require('../../assets/logo.png')}
                  PlaceholderContent={<ActivityIndicator />}
              />
            <Input
                  labelStyle={{color:'black'}}
                  label='Correo'
                  ref={component => this._username = component}
                  placeholder='Correo'
                  rightIcon={{ type: 'font-awesome', name: 'user' }}
                  errorStyle={{ color: 'red',display:this.state.displayErrorUsername }}
                  onChangeText={(text) => this.setState({email:text})}
                  errorMessage='Usuario invalido'
                  containerStyle={{marginLeft:'3%',width: wp('80%')}}
            />
            <Input
                  labelStyle={{color:'black'}}
                  label='Nombre'
                  ref={component => this._username = component}
                  placeholder='Nombre'
                  rightIcon={{ type: 'font-awesome', name: 'user' }}
                  errorStyle={{ color: 'red',display:this.state.displayErrorUsername }}
                  onChangeText={(text) => this.setState({name:text})}
                  errorMessage='Usuario invalido'
                  containerStyle={{marginLeft:'3%',width: wp('80%')}}
            />
            <Input
                  labelStyle={{color:'black'}}
                  label='Contraseña'
                  secureTextEntry={true}
                  ref={component => this._password = component}
                  placeholder='Contraseña'
                  rightIcon={{ type: 'font-awesome', name: 'lock' }}
                  errorStyle={{ color: 'red',display:this.state.displayErrorPass }}
                  onChangeText={(text) => this.setState({password:text})}
                  errorMessage='Clave invalida'
                  containerStyle={{marginLeft:'3%',width: wp('80%')}}
            />
            <Button
                //iconRight ={{ type: 'font-awesome-5', name: 'sign-in-alt' }}
                buttonStyle={{backgroundColor:Colors.darkPrimary,width: wp('40%'), marginBottom: 0, marginTop: 20}}
                title='Registrarse' 
                onPress={() => this._handlePress()}
            />
          </Card>         
        </View>
      );
    }
  }