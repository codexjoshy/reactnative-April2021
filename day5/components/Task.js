import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Task(props) {
  return (
    <View  style={styles.taskContainer}>

      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.text} </Text>
      </View>
      
      <View style={styles.editContainer}>
          <TouchableOpacity >
            <Text style={[styles.btnText, {color: 'blue'}]}>EDIT</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.delContainer}>
        <TouchableOpacity>
          <Text style={[styles.btnText, {color:'red'}]}>Delete</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  taskListContainer:{
    backgroundColor:'#fafafa'
  },
  taskContainer:{
    width:'100%',
    height:60,
    flexDirection:'row',
    marginVertical:10
  },
  textContainer:{
    backgroundColor:'#fff',
    width:'50%',
    alignItems:'flex-start',
    paddingHorizontal:10,
    justifyContent:'center'
  },
  editContainer:{
    width:'25%',
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  delContainer:{
    width:'25%',
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  btnText:{
    fontSize:20,
    fontWeight:'800',
  }
})
