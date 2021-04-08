import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class Counter extends Component {

  state={
    number:0,
  }
  increaseNumber = ()=>{
    this.setState((prevState)=>{
      return{
        number : prevState.number + 1
      }
    })
  }
  decreaseNumber = ()=>{
    if(this.state.number > 0){
      this.setState((prevState)=>{
        return{
          number : prevState.number - 1
        }
      })
    }else{
      alert('number is already 0')
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> {this.state.number} </Text>
        <Button
          title="Increase" 
          onPress={()=>this.increaseNumber()}
        />

        <Button
          title="Decrease" 
          color="green"
          onPress={()=>this.decreaseNumber()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:25,
    fontWeight:'bold',
    marginBottom:10
  }
})
