import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import store from './redux/store'
import Counter from './screens/Counter'
import Practice from './screens/Practice'
import TodoScreen from './screens/TodoScreen'

class Index extends React.Component {
  state={
    name:'Josh'
  }
  render(){
    return (
      <Provider store={store}>
        <Practice  />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({})

export default Index 
