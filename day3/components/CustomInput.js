import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { AntDesign, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';

export default function CustomInput(props) {
  return (
    <View style={styles.input}>
      <View style={styles.inputIcon}>
          <SimpleLineIcons name={props.iconName} size={32} color="#2470cf" />
      </View>
      <TextInput 
        style={styles.inputText} 
        placeholder={props.placeholder}
      />
      <View style={styles.inputIcon}>
          <MaterialIcons name="keyboard-arrow-right" size={32} color="#2470cf" />
      </View>
    </View>
        
  )
}

const styles = StyleSheet.create({
    input:{
    width:'70%',
    flex:0.3,
    backgroundColor:'#fff',
    borderRadius:10,
    flexDirection:'row',
    marginVertical:5
  },
  inputIcon:{
    width:'20%',
    height:'100%',
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  inputText:{
    width:'60%',
    height:'100%',
    marginHorizontal:5
  }
})
