import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinkBox from './LinkBox';

export default class Home extends React.Component{
  render(){
    return(
      <View>
        <Text>Home</Text>
        <LinkBox/>
      </View>
    )
  }
}