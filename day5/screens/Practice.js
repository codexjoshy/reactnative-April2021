import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import CustomText from '../components/CustomText'
import { changeNameAction } from '../redux/action/changeDetailsAction'

class Practice extends Component {
  state={
    name:""
  }
  handleChangeText=(value)=>{
    this.setState({
      name: value
    })
  }
  click = ()=>{
    this.props.updateName(this.state.name);
  }
  render() {
    // console.log(this.props);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        </View>
        <View style={styles.main}>
          <CustomText />
          <View style={styles.inputCont}>
            <TextInput 
              style={styles.input} 
              placeholder="Enter New Name"
              placeholderTextColor="#fff"
              defaultValue={this.state.name}
              onChangeText={(text)=>this.handleChangeText(text)}
            />
          </View>
          <Button
            onPress={()=>this.click()} 
           title="Change" color="red" />
        </View>
      </View>
    )
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    updateName:(data)=>dispatch(changeNameAction(data))
  }
}
export default connect(null, mapDispatchToProps)(Practice)


const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
    flex:0.1,
    backgroundColor:'red'
  },
  main:{
    flex:0.8,
    backgroundColor:'whitesmoke',
    justifyContent:'center',
    alignItems:'center'
  },
  inputCont:{
    width:'80%',
    backgroundColor:'blue',
    flex:0.1,
    borderRadius:5,
    marginVertical:10,
    paddingVertical:5
  },
  input:{
    flex:1,
    marginHorizontal:5,
    color:'#fff'
  }
})
