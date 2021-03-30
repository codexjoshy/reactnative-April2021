import React from 'react'
import { Image, ImageBackground, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import Box from '../components/Box'
export default function Layout() {
  return (
    <SafeAreaView 
      style={{ 
        flex:1, 
        marginTop:Platform.OS =='android'? StatusBar.currentHeight :0 
      }}
    >
      <ScrollView 
        style={{ flex:1 }}
        scrollEnabled={true}
        showsVerticalScrollIndicator={true}
      >
        <ImageBackground 
          resizeMode="cover"
          source={require('../assets/christmas4.jpg')} style={styles.container}
        >

          <View style={styles.boxImage}>
            <Image  style={styles.image} source={require('../assets/women/1.jpg')} />
          </View>

          <View style={styles.boxImage2}>
            <ImageBackground 
              style={styles.image} source={require('../assets/christmas4.jpg')}>
                <Text>HELLO</Text>
            </ImageBackground>
          </View>

          <Box />
          <Box bgColor="blue" />
          <Box bgColor="green" />
          <Box bgColor="white" />
          <Box bgColor="grey" />
          {/* <View style={[styles.box, {backgroundColor:'blue'}]}></View>
          <View style={[styles.box, {backgroundColor:'green'}]}></View>
          <View style={[styles.box, {backgroundColor:'white'}]}></View>
          <View style={[styles.box, {backgroundColor:'grey'}]}></View> */}
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'orange',
    justifyContent:'center',
    alignItems:'center'
  },
  box:{
    width:200,
    height:200,
    backgroundColor:'red'
  },
  boxImage:{
    width:200,
    height:200,
    backgroundColor:'red',
    borderRadius:100
  },
  image:{
    width:'100%',
    height:'100%',
    borderRadius:100
  },
  boxImage2:{
    width:200,
    height:200
  }
})
