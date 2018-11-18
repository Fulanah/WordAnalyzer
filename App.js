/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import btnAnalyzer from './btnAnalayzer';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//type Props = {};
export default class App extends Component{

  constructor(){
    super();
    this.state = {
      word: '',
      con: 0,
      vow: 0,
      char: 0
    }

  }

  updateWord(){
    this.setState({char: String.split().length}, ()=>
    {


    })
  }  
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder = 'Word:' onChangeText = {(word) => this.setState({word})}/>
        <btnAnalyzer onPress = {() => this.updateWord()}/>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

