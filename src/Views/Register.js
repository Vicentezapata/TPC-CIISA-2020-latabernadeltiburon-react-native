import React from 'react';
import { View,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard } from 'react-native';
import {styles} from '../Styles/Styles';
import RegisterCard from '../Components/RegisterCard';
export default class Register extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <KeyboardAvoidingView behavior="padding" style={styles.containerCard}>
            <RegisterCard></RegisterCard>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}