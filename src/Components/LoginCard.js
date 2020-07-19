import React from 'react';
import { Alert,View,ActivityIndicator } from 'react-native';
import { Card,Button,Input,Text,Icon } from 'react-native-elements'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Image from 'react-native-scalable-image';
import {styles,Colors} from '../Styles/Styles';
import * as NavigationService from '../Controller/NavigationService';
import * as GlobalValues from '../Controller/GlobalValues';



export default class LoginCard extends React.Component {
    constructor(props){ 
        super(props) 
        this.state = { 
         username: '', 
         password: '', 
         displayErrorPass:'none',
         displayErrorUsername:'none',
         permission:'',
        }     
    } 

   almacenar = async (key,value) => {
      try {
        await AsyncStorage.setItem(key, value);
      } catch (error) {
        console.log('error:'+error)
      }
  };
    

    //METODO QUE VALIDA LA CLAVE Y EL USUARIO
    _handlePress() { 
        var body = JSON.stringify({"email": this.state.username,"password" : this.state.password})
        console.log(body);
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
          let data = 
          {
            method: 'POST',
            headers:{Accept:'application/json','Content-Type':'application/json'},
            body:body
          }
          fetch('http://192.168.0.10:8300/users/login',data)
          .then((response) => response.json())
          .then(
            (responseJson) => 
            {
              console.log(responseJson) 
              console.log(responseJson.permission) 
              console.log(responseJson.type_user) 
              //SI REQUIERO USAR VARIABLE ESTADO SERIA
              GlobalValues.almacenar('user_email',this.state.username)
              if (responseJson.permission=="1" && responseJson.type_user=="user") {
                //SI REQUIERO OBTENER DE LA BASE DE DATOS SERIA COMO
                GlobalValues.almacenar('type_user','user')
                this.setState({displayErrorUsername:'none'});
                this.setState({displayErrorPass:'none'});
                NavigationService.navigate('Home');
              }
              else if (responseJson.permission=="1" && responseJson.type_user=="admin") {
                //SI REQUIERO OBTENER DE LA BASE DE DATOS SERIA COMO
                GlobalValues.almacenar('type_user','admin')
                this.setState({displayErrorUsername:'none'});
                this.setState({displayErrorPass:'none'});
                NavigationService.navigate('HomeAdmin');
              }
            }
          )
          .catch(
            (error) => console.error(error) 
          )
          if (this.state.username=="admin" && this.state.password=="admin") {
            this.setState({displayErrorUsername:'none'});
            this.setState({displayErrorPass:'none'});
            GlobalValues.almacenar('mail',this.state.username)
            NavigationService.navigate('HomeAdmin');
          }
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
      NavigationService.navigate('Register');
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
                  label='Usuario'
                  ref={component => this._username = component}
                  placeholder='Usuario'
                  rightIcon={{ type: 'font-awesome', name: 'user' }}
                  errorStyle={{ color: 'red',display:this.state.displayErrorUsername }}
                  onChangeText={(text) => this.setState({username:text})}
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
                title='Iniciar sesion' 
                onPress={() => this._handlePress()}
            />
            <Button  type="outline" buttonStyle={{marginBottom: 0,width: wp('30%'),borderColor:'black', marginTop: 20}} titleStyle={{color:'black'}} onPress={() => this._forgotPass()} title='Recuperar Contraseña'/>
            <Button  type="outline" buttonStyle={{marginBottom: 0,width: wp('30%'),borderColor:'black', marginTop: 10}} titleStyle={{color:'black'}} onPress={() => this._signup()} title='Registrarse'/>
          </Card>         
        </View>
      );
    }
  }