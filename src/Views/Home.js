import React , { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card,Input,Button,Icon } from 'react-native-elements'


//CREACION DEL COMPONENTE
class Login extends Component{
    render(){
        return (
            
            <View style={styles.container}>
                <Card containerStyle = {styles.card}>
                <Text>PANTALLA 2</Text>
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
