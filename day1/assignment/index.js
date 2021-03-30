import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import Header from './components/Header'
export default function index() {
  const changeArticle = {backgroundColor:'purple'}
  const myStyle = {backgroundColor:'red', marginBottom:20}

  return (
    <View style={styles.container}>
      <Header 
        title="My Header" 
        style={{backgroundColor:'grey', marginBottom:20}}  
      />


      <View style={styles.articleCont}>
        <View style={[styles.article, {...changeArticle}]}>
          <Text style={styles.text}>Article</Text>
        </View>
        <View style={styles.side}>
          <View style={styles.side1}>
            <Text style={styles.text}>SIDE 1</Text>
          </View>
          <View style={styles.side2}>
            <Text style={styles.text}>SIDE 2</Text>
          </View>
        </View>
      </View>
      <View style={styles.mainCont}>
        <Text style={styles.text}>Main</Text>
      </View>
      <View style={styles.footerCont}>
        <Text style={styles.text}>Footer</Text>
      </View>

      <Header 
        title="My Header" 
        style={{backgroundColor:'grey', marginBottom:20}}  
      />


      <View style={styles.articleCont}>
        <View style={[styles.article, {...changeArticle}]}>
          <Text style={styles.text}>Article</Text>
        </View>
        <View style={styles.side}>
          <View style={styles.side1}>
            <Text style={styles.text}>SIDE 1</Text>
          </View>
          <View style={styles.side2}>
            <Text style={styles.text}>SIDE 2</Text>
          </View>
        </View>
      </View>
      <View style={styles.mainCont}>
        <Text style={styles.text}>Main</Text>
      </View>
      <View style={styles.footerCont}>
        <Text style={styles.text}>Footer</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:StatusBar.currentHeight
  },
  
  articleCont:{
    flex:0.5,
    marginBottom:10,
    flexDirection:'row',

  },

  article:{
    backgroundColor:'black',
    flex:1,
    marginRight:10,
    alignItems:'center',
    justifyContent:'center'
  },
  side:{
    flex:1,
    width:'40%'
  },
  side1:{
    flex:0.5,
    backgroundColor:'green',
    marginBottom:10,
    alignItems:'center',
    justifyContent:'center'
  },
  side2:{
    flex:0.5,
    backgroundColor:'brown',
    alignItems:'center',
    justifyContent:'center'
  },
  mainCont:{
    flex:0.2,
    backgroundColor:'blue',
    marginBottom:20,
    alignItems:'center',
    justifyContent:'center'
  },
  footerCont:{
    flex:0.1,
    backgroundColor:'orange',
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold'
  }

})
