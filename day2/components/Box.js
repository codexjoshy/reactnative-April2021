import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Box(props) {
  return (
    <View style={[
      styles.box, 
      {backgroundColor:props.bgColor ? props.bgColor : 'black' }
    ] }></View>
  )
}

const styles = StyleSheet.create({
  box:{
    width:200,
    height:200,
    backgroundColor:'red'
  }
})
