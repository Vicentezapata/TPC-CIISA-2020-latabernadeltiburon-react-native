import React, { Component } from 'react';
import { View,Alert,ActivityIndicator,FlatList } from 'react-native';
import { ListItem,SearchBar, Card } from 'react-native-elements';
import * as NavigationService from '../Controller/NavigationService';
import {styles,Colors} from '../Styles/Styles';

// create a component
export default class Cocteles extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            text: '' ,
            textSearchIngredient:'',
            visible: 10,
            ArrayIngredientes:[],
            jsonSearch:[],
            refreshing: false,
            loading:true,
        }
        this.onPress = this.onPress.bind(this);
      }
      componentDidMount = () => {
        this.getData()
      }
      getData = async()=>{
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
        fetch(url, {
            method: 'GET',
            headers: {
                      'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((responseJson) => {
           //console.log('RESPONSE --> '+JSON.stringify(responseJson));
           //Filtramos y asignamos datos
            this.setState({ ArrayIngredientes: responseJson.drinks  })
            this.setState({refreshing: false})
            this.setState({loading: false})
            this.setState({visible: 10})
        })
        .catch((error) => {
           console.error(error);
        });
      }

      onPress(value) {
        console.log('Value: ' + value);
        if(value.length > 0){
          NavigationService.navigate('Details',{ paramValue: value.toUpperCase() });
        }else{
          Alert.alert('Sin datos, reintente!');
        }
      }

      handleRefresh = () => {
        this.setState(
          {
            refreshing: true
          },
        );
        this.getData()
      };

      getFilteredBySimil(array, key, value, key2, value2) {
        return array.filter(function(e) {
          return (e[key].toLowerCase().indexOf(value.toLowerCase()) > -1 && e[key2] == value2);
        });
      }

      searchElement = (variable) => {
            this.setState({textSearchIngredient: variable});
            this.setState({ jsonSearch: this.getFilteredBySimil(this.state.ArrayIngredientes,"hh",variable,"p_status","0")})
            console.log(this.state.textSearchIngredient)
      };
    
      handleLoadMore = () => {
        console.log(this.state.ArrayIngredientes.length)
        if(this.state.visible < this.state.ArrayIngredientes.length ){
            this.setState({loading: true});
            this.setState(
              {
                visible: this.state.visible + 10
              },
              console.log(this.state.visible)
            );
            setTimeout(()=>this.setState({loading: false}),5000)
        }

      };

      renderFooter = () => {
        if (!this.state.loading) return null;    
        return (
          <View style={styles.IndicatorIcon} >
            <ActivityIndicator animating size="large" />
          </View>
        );
      }

    render() {
        return (
            <View style={styles.listDash}>
              <Card wrapperStyle={styles.containerCardList} containerStyle={{width:'97%', height: '98%'}} >
                    <View style={{width:'100%',height:'100%'}}>
                        <FlatList
                            ListHeaderComponent={
                                <SearchBar 
                                    placeholder="Buscar por nombre" 
                                    containerStyle = {{backgroundColor:Colors.darkPrimary}}
                                    inputContainerStyle  = {{backgroundColor:Colors.primary}}
                                    placeholderTextColor = {Colors.accent}
                                    underlineColorAndroid = {Colors.darkPrimary}
                                    onChangeText={(text)=>this.searchElement(text)}
                                    value={this.state.textSearchIngredient}
                                />
                            }
                            initialNumToRender={10}
                            maxToRenderPerBatch={10}
                            data={this.state.ArrayIngredientes.slice(0,this.state.visible)}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item}) =>
                                <ListItem
                                    containerStyle={{backgroundColor: 'rgba(225,225,225,0.2)'}}
                                    key={item.strIngredient1}
                                    title={item.strIngredient1}
                                    titleStyle={{color:'black'}}
                                    leftAvatar={{ source: { uri: 'https://www.thecocktaildb.com/images/ingredients/'+item.strIngredient1+'.png' },size:'large' }}
                                    chevron
                                    topDivider={true}
                                    bottomDivider={true}
                                    onPress={ () => NavigationService.navigate('Home',{ paramValue: item.strIngredient1 })}
                                />
                            }
                            onRefresh={this.handleRefresh}
                            refreshing={this.state.refreshing}
                            onEndReached={this.handleLoadMore}
                            onEndReachedThreshold={0.3}
                            keyExtractor={item => item.strIngredient1}
                            ListFooterComponent={this.renderFooter()}
                        />
                    </View>
                </Card>
            </View>
        );
    }
}