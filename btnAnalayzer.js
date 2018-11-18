import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const btnAnalyzer = (props) => {

    return(
        <View>
            <TouchableOpacity style = {styles.design} value='Analyzer'/>
        </View>

    );
}


const styles = StyleSheet.create ({

    design:{
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        textAlign: 'center',
        fontSize: 20
    }

});

export default btnAnalyzer;