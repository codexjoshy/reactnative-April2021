import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import Task from '../components/Task'
const todoData = [
  {
    id:1,
    text: 'Wash My clothe by 10am',
  },

   
]
export default class TodoScreen extends Component {
  state={
    task:"",
    data:todoData
  }
  handleChangeText = (value)=>{
    this.setState({task:value})
  }
  addTask = ()=>{
    if(!this.state.task){
      alert('enter a task')
    }else{
      let anId = this.state.data.length + 1;
      const newTask = {id:anId, text:this.state.task};
      this.setState({
        task:'',
        data:[
          ...this.state.data,
          newTask
        ]
      })
    }
  }
  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>TODO APP</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.inputParent}>
              <View style={styles.inputCont}>
                <TextInput 
                  style={styles.textInput} 
                  placeholder="Add Task"
                  onChangeText={(text)=>this.handleChangeText(text)}
                  defaultValue={this.state.task}
                />
              </View>
              <TouchableOpacity onPress={()=>this.addTask()} style={{ width:'30%',height:60 }}>
                <View style={styles.buttonCont}>
                  <Text style={styles.buttonText}>ADD TASK</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.tasksParent}>
              <ScrollView  style={styles.taskListContainer}>
                {
                  this.state.data.map((item)=>{
                    return(
                      <View key={item.id}  style={styles.taskContainer}>

                        <View style={styles.textContainer}>
                          <Text style={styles.text}>{item.text} </Text>
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
                  })
                }
              </ScrollView>
            </View>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'whitesmoke'
  },
  header:{
    flex:0.1,
    backgroundColor:"red",
    justifyContent:'center',
    alignItems:'center'
  },
  headerText:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold'
  },
  body:{
    flex:0.9,
  },
  inputParent:{
    flex:0.2,
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:5
  },
  inputCont:{
    width:'70%',
    backgroundColor:"#fff",
    height:60,
  
  },
  buttonCont:{
    width:'100%',
    backgroundColor:'blue',
    height:60,
    justifyContent:'center',
    alignItems:'center'
  },
  textInput:{
    flex:1,
    paddingHorizontal:10
  },
  buttonText:{
    color:'#fff',
    fontSize:15,
    fontWeight:'700'
  },
  tasksParent:{
    flex:0.8,
  },
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
