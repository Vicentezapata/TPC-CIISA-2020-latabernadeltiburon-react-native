//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button ,StyleSheet ,StatusBar} from 'react-native';

import NavigationService from '../Controller/NavigationService';

import {styles} from '../Styles/Styles';


// create a component
class Search extends Component {

    constructor(props) {
        super(props)
        this.state = { text: '' }
        this.onPress = this.onPress.bind(this);
      }

      onPress(value) {
        console.log('Value: ' + value);
        if(value.length > 0){
          NavigationService.navigate('Details',{ paramValue: value.toUpperCase() });
        }else{
          Alert.alert('Sin datos, reintente!');
        }
      }

      /*onButtonPress = () => {
        Alert.alert('Button has been pressed!');
        this.setState({
          text: this.state.text
        })
        console.log('Valor a buscar: '+ this.state.text);
        NavigationService.navigate('Details',{ value: '' });
      };*/

    render() {
        return (
            <View style={styles.formContainer}>
                <StatusBar barStyle="light-content"/>
                <TextInput  onChangeText={(text) => this.setState({text})}
                            style = {styles.input} 
                            autoCapitalize="none" 
                            onSubmitEditing={() => this.passwordInput.focus()} 
                            autoCorrect={false} 
                            keyboardType='numbers-and-punctuation' 
                            returnKeyType="search" 
                            placeholder='HH o Serie' 
                            placeholderTextColor='rgba(225,225,225,0.7)'/>


                 {/*   <Button onPress={onButtonPress} title = 'Login' style={styles.loginButton} /> */}
              <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onPress(this.state.text)}>
                    <Text  style={styles.buttonText}>BUSCAR</Text>
                </TouchableOpacity> 
            </View>
        );
    }
}

// define your styles
const styles2 = StyleSheet.create({
    container: {
     flex: 1,
     padding: 50,
     backgroundColor: '#000',
        flexGrow: 1,
        justifyContent: 'center'
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer:{
        backgroundColor: '#ce2e0a',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }, 
    loginButton:{
      backgroundColor:  '#2980b6',
      color: '#fff'
    }
   
});

//make this component available to the app
export default Search;