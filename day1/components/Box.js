import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Box(props) {
  console.log(props);
  return (
    <View 
    style={[
      styles.top1, 
      {backgroundColor: props.color ? props.color : 'black'}
      ]} 
    >
      <Text style={{  color:'#fff' }}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  top1:{
    backgroundColor: 'blue',
    width: 100,
    height:100
  },
})
