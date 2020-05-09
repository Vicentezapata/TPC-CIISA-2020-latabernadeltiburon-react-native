import React , { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card,Input,Button,Icon } from 'react-native-elements'
import NavigationService from '../Components/NavigationService';


//CREACION DEL COMPONENTE
class Login extends Component{

    onButtonPress(){
        console.log('Boton login presionado');
        NavigationService.navigate('Home');
    }
    render(){
        return (
            
            <View style={styles.container}>
                <Card containerStyle = {styles.card}>
                <Text>Bienvenido a La teberna del tiburon</Text>
                <Input
                label= 'Email'
                placeholder='Email' 
                inputContainerStyle={{width: '80%'}}
                leftIcon={{ type: 'font-awesome', name: 'user' }}
                />
                <Input
                label= 'Clave'
                placeholder='Clave'
                inputContainerStyle={{width: '80%'}}
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                />
                <Button
                icon={
                    <Icon
                    name="lock"
                    size={15}
                    color="white"
                    />
                }
                onPress= {() =>this.onButtonPress()}
                title="Iniciar sesion"
                />
                </Card>
            </View>
            
            
        );
    }
}
//make this component available to the app
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
});
