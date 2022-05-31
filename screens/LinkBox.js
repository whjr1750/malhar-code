import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ToastAndroid, Linking } from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import * as Clipboard from 'expo-clipboard';
import db from '../config';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RFValue} from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class LinkBox extends React.Component{
  constructor(props){
    super();
    this.state={
      links:[]
    }
  }
  componentDidMount(){
    this.fetchLinks()
  }
  fetchLinks=()=>{
    db
      .ref("/")
      .on(
        "value",
        snapshot => {
          let linkDetail = [];
          if (snapshot.val()) {
            Object.keys(snapshot.val()).forEach(function (key) {
              linkDetail.push({
                key: key,
                value: snapshot.val()[key]
              });
            });
            
          }
          this.setState({ links: linkDetail });
         
        },
        function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        }
        );
  }
  deleteLink=(id)=>{
   
    db.ref('/'+id).remove()
    ToastAndroid.show("Link Deleted",ToastAndroid.SHORT)
  }
  copyLink=(url)=>{
   
    Clipboard.setString(url)
    ToastAndroid.show("Link Copied",ToastAndroid.SHORT)
  }
  keyExtractor=(item,index)=>index.toString()
  renderItem=({item})=>{
  
   return(
     <View style={styles.container}>
      <View style={styles.row}>
          <Text style={styles.nameStyle}>{item.value.name}</Text>
          <Text style={styles.date}>{item.value.date}</Text>
          <Text style={styles.time}>{item.value.time}</Text>
          <View style={styles.del}>
         
           <TouchableOpacity onPress={()=>this.deleteLink(item.key)}>
               
             <Icon 
          name={"delete"}
          size={RFValue(30)}
          color="black"
            />
            </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.copyLink(item.value.url)}>
                 <Ionicons 
                  name={"copy"}
                  size={RFValue(25)}
                  color="black"
                 />
            </TouchableOpacity>
          
              
             
          </View>
          </View>
          <TouchableOpacity
           onPress={()=>Linking.openURL(item.value.url)}
          >
           <Text style={styles.url}>{item.value.url}</Text>
          </TouchableOpacity>
     </View>
   )
  }
  render(){
    return(
      <View>
       
        <FlatList
         data={this.state.links}
         renderItem={this.renderItem}
         keyExtractor={this.keyExtractor}
         />
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    padding:10,
    backgroundColor:'#ddd',
  },
  row:{
    flexDirection:'row'
  },
  nameStyle:{
    flex:1.5,
    fontSize:20,
    backgroundColor:"violet",
  },
  date:{
    flex:1,
    backgroundColor:"coral"
  },
  time:{
    flex:1,
    backgroundColor:"skyblue"
  },
  url:{
    backgroundColor:"white",
    color:"blue"
  },
  del:{
    flex:1,
    backgroundColor:"white",
    flexDirection:'row'
  },
 
})