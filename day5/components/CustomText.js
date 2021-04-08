import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

function CustomText(props) {
  // console.log(props);
  return (
    <View style={styles.main1}>
      <Text>{props.myname}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main1:{
    backgroundColor:'green',
    width:100,
    height:100,
    justifyContent:'center',
    alignItems:'center'
  }
})
const mapStateToProps = (state)=>{
  return {
    myname :state.name
  }
}
const mapDispatchToProps = null;
export default connect(mapStateToProps, null)(CustomText)

