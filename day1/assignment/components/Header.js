import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header(props) {
  console.log(props);

  return (
    <View style={[styles.header, {...props.style}]}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    flex:0.1,
    backgroundColor:'orange',
    marginBottom:10,
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold'
  }
})
