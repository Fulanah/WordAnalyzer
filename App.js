/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//Balqis create - 18/11
import React, {Component} from 'react';
import {Platform, TouchableOpacity, StyleSheet, Text, View, TextInput} from 'react-native';
import {Analyzer, styles} from './Analayzer';


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
      char: []
    }

  }
  
  updateWord(){

  //  var vowels = ["a", "e", "i", "o", "u"];
    let counter = 0;
    let counterCon = 0;
    var i;
    var isVowel = false;

    this.setState({char: this.state.word.split("")});
    
      for (i = 0; i < this.state.word.length; i++){
       if(this.state.word[i].match(/[aeiou]/gi, '')){
         counter++;
         this.setState({vow: counter});
       }else if(!(this.state.word[i].match(/[aeiou]/gi, ''))){
         counterCon++;
         this.setState({con: counterCon});

       }
      }
  
    }

render(){
    return (
      <View style={styles.container}>
        <Text>Word:</Text>
        <TextInput placeholder = 'text here' onChangeText = {(word) => this.setState({word})}/>
        <TouchableOpacity style = {styles.design} onPress = {() => this.updateWord()}><Text>Analyzer</Text></TouchableOpacity>

        <Text>Word: {this.state.word}</Text>
      
        
        <Text>No Of Characters: {this.state.char.length}</Text>
        <Text>No Of Vowel: {this.state.vow}</Text>
        <Text>No Of Consonant: {this.state.con}</Text>
      </View>
    );
  }
    }

