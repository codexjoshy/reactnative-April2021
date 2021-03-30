import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import CustomInput from '../components/CustomInput';
class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Header</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.icon}>
            <Image 
              source={require('../assets/christmas4.jpg')}
              style={{ width:'100%',height:'100%', resizeMode:"contain", borderRadius:200 }}
            />
          </View>
          <View style={styles.profile}>
             <Image 
              source={require('../assets/women/3.jpg')}
              style={{ width:'100%',height:'100%', resizeMode:"cover", borderRadius:100}}
            />
          </View>
          <View style={styles.icon}>
            <Image 
              source={require('../assets/christmas4.jpg')}
              style={{ width:'100%',height:'100%', resizeMode:"contain", borderRadius:200 }}
            />
          </View>
        </View>

        <View style={styles.contact}>
          <TouchableOpacity style={{ width:'70%',height:50, }} >
            <View style={styles.button}>
              <Text style={styles.text}>Book Appointment</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          <CustomInput
            placeholder="ENTER YOUR NAME"
            iconName = "user"
          />
          <CustomInput 
            placeholder="ENTER YOUR EMAIL"
            iconName = "envelope" 
          />
          <CustomInput 
            placeholder="ENTER YOUR PHONE"
            iconName="screen-smartphone" 
          />
         
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  header:{
    flex:0.1,
    backgroundColor:'#2470cf',
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  body:{
    flex:0.3,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  icon:{
    width:100,
    height:100,
    borderRadius:75,
    backgroundColor:'grey',
    elevation:5,
    shadowRadius:20,
    shadowColor:'blue',
    
  },
  profile:{
    width: 170,
    height: 170,
    borderRadius:100
  },
  contact:{
    flex:0.2,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:'100%',
    height:'100%',
    backgroundColor:"#2470cf",
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    color: '#fff',
    fontWeight:'bold',
    fontSize:20
  },
  form:{
    flex:0.3,
    backgroundColor:'whitesmoke',
    alignItems:'center',
  },

})

export default Login