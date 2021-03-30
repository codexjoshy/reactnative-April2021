import React from 'react'
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity } from 'react-native'

export default function Forms() {
  return (
    <View style={styles.container}>
      <View style={styles.inputCont}>
        <TextInput placeholder="Enter Email" placeholderTextColor="#fff" style={styles.input} />
      </View>

      <TouchableOpacity style={{ width:'70%', height:40 }}>
        <View style={styles.btnCont}>
          <Text style={styles.text}>Submit</Text>
        </View>
      </TouchableOpacity>
      
    </View>
  )
}
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  input: {
    flex:1,
    width:'100%',
  },
  inputCont:{
    width: '70%',
    height: 40,
    backgroundColor: 'grey',
    borderRadius:50,
    paddingHorizontal:15,
    marginVertical:10
  },
  btnCont:{
    width:'100%',
    height: null,
    flex:1,
    backgroundColor:'blue',
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    color:'#fff',
    fontSize:18,
    fontWeight:'bold'
  }
})
