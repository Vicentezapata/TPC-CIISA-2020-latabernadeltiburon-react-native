import React from 'react';
import { View,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,Text,Picker } from 'react-native';
import {styles,Colors} from '../Styles/Styles';
import { FlatList } from 'react-native';
import * as NavigationService from '../Controller/NavigationService';
import * as GlobalValues from '../Controller/GlobalValues';
import AsyncStorage from '@react-native-community/async-storage';
import { ListItem,Card,SearchBar } from 'react-native-elements';
export default class HomeAdmin extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            listUsers: '', 
            searchItem:'',
            user:'',
            permission:'',
            userValues:[],
        }   
    }
    componentDidMount = async()=>{
        user_email = await GlobalValues.obtener('user_email');
        this.setState({user:user_email})
        type_user = await GlobalValues.obtener('type_user');
        this.setState({permission:type_user})
        this.getUsers()
        console.log(this.props)
    }
    getUsers = async() =>{
        const url = 'http://192.168.0.10:8300/users/index'
        let data = 
          {
            method: 'POST',
            headers:{Accept:'application/json','Content-Type':'application/json'},
          }
        fetch(url,data).then((response) => response.json()).then((responseJson) =>{
                console.log(responseJson)
                this.setState({listUsers:responseJson})
                this.setState({userValues:responseJson})
            } 
        )
    }
    render() {
        let myUsers = this.state.userValues.map((myValue,myIndex)=>{
            return(
            <Picker.Item label={myValue.name + ' - ' + myValue.email} value={myIndex} key={myIndex}/>
            )
            });
        return (
            <View style={styles.listDash}>
                <Card wrapperStyle={styles.containerCardList} containerStyle={{width:'97%', height: '98%',paddingTop:'20%'}} >
                <Text h1>Hola {this.state.user} permiso {this.state.permission}</Text>
                <View style={{width:'100%',height:'100%'}}>
                <Picker selectedValue={this.state.selectedValue} onValueChange={(value)=>this.setState({selectedValue:value})} >
                {myUsers}
                </Picker>
                    <FlatList 
                        ListHeaderComponent={
                            <SearchBar 
                                    placeholder="Buscar por nombre" 
                                    containerStyle = {{backgroundColor:Colors.darkPrimary}}
                                    inputContainerStyle  = {{backgroundColor:Colors.primary}}
                                    placeholderTextColor = {Colors.accent}
                                    underlineColorAndroid = {Colors.darkPrimary}
                                    onChangeText={(text)=>this.setState({searchItem:text})}
                                    value={this.state.searchItem}
                                />
                        }
                        data = {this.state.listUsers.slice(0,this.state.visible)}
                        renderItem = {
                            ({item}) => 
                            <ListItem
                                key = {item.id} 
                                title = {item.name+' '+item.email}
                                chevron
                                topDivider={true}
                                bottomDivider={true}
                                onPress={ () => NavigationService.navigate('Home',{ paramValue: item.id })}
                            />
                        }
                        keyExtractor={item => String(item.id)}
                    />
                </View>
                </Card>
                
                
            </View>
        );
      }
}