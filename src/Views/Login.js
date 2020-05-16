import React from 'react';
import { View,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard } from 'react-native';
import {styles} from '../Styles/Styles';
import LoginCard from '../Components/LoginCard';
export default class Login extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <KeyboardAvoidingView behavior="padding" style={styles.containerCard}>
            <LoginCard></LoginCard>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}