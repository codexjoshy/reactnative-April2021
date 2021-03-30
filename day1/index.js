import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Box from './components/Box'
export default function App() {
  return (
    <View style={styles.container1} >
      <View style={styles.top} >
        <Box name="Godwin" />
        <Box name="Josh" color="blue" />
        <Box name="Fred" color="grey" />
        
      </View>


      <View style={styles.mid} />
      <View style={styles.bottom} />

    </View >
    
  );
}

const styles = StyleSheet.create({
  container1: {
    backgroundColor: 'grey',
    flex: 1
  },
  top:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent:'space-evenly',
    backgroundColor:'green',
  },
  
  top2:{
    backgroundColor: 'white',
    width: 100,
    height:100,
    justifyContent:'center',
    alignItems:'center'
  },
  top3:{
    backgroundColor: 'brown',
    width: 100,
    height:100
  },
  mid:{
    flex:1,
    backgroundColor:'red'
  },
  bottom:{
    flex: 1,
    backgroundColor: "#fff"
  }
});
