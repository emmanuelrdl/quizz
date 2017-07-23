import React, { Component } from 'react'
import { View, Text, TouchableHighlight,  StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import configureStore from './../configureStore'

export default class QuestionForm extends Component {
  constructor(props) {
    super(props);
    console.log(configureStore().getState())
    console.log(this.store)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello world!</Text>
      </View>
    );
  }

}



const styles = StyleSheet.create({
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
