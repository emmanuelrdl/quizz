//https://medium.com/react-native-training/redux-4-ways-95a130da0cdc

import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'
import QuestionForm  from './components/questionForm.js'
import { connect } from 'react-redux'
import { fetchData } from './actions'
import configureStore from './configureStore'

const store = configureStore()

let styles

const App = (props) => {
  const {
    container,
    text,
    button,
    buttonText,
    mainContent
  } = styles

  return (
    <View style={container}>
      <Text style={text}>Redux Quizz Exemple</Text>
      <QuestionForm store={store}/>
    </View>
  )
}

styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  },
  mainContent: {
    margin: 10,
  }
})

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
