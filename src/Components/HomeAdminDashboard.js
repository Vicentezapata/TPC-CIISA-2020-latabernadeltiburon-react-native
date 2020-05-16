import React from 'react';
import { View,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,Text } from 'react-native';
import {styles} from '../Styles/Styles';
import LoginCard from '../Components/LoginCard';
export default class HomeAdmin extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <Text h1>Hola administrador</Text>
            </View>
        );
      }
}