import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';

import db from '../config';

export default class AddLink extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:"",
      url:""
    }
  }
 addLink=()=>{
  const id="link" + Math.random() .toString(36).slice(2)
  const today=new Date()
  const time=today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  const date=today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

  db.ref('/'+id).set({
    name:this.state.name,
    url:this.state.url,
    time:time,
    date:date
  })
  this.props.navigation.navigate("Home")
 console.log(id)
 
  
 }

  render(){
    return(
      <View style={styles.container}>
       <TextInput style={styles.textinput}
                  placeholder={"Name Your Link"}
                  onChangeText={name=>this.setState({name})}
       />
       <TextInput style={styles.textinput}
                  placeholder={"Paste Your Link"}
                  onChangeText={url=>this.setState({url})}
       /> 
      <TouchableOpacity
       onPress={()=>this.addLink()}
      >
       <Icon 
         name={"add-outline"}
         size={RFValue(40)}
         color="red"
       />
      </TouchableOpacity>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    padding:10,
  },
  textinput: {
    width: "90%",
    height: 50,
    padding: 10,
    
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: "",
    color: "Black"
  },

  
})