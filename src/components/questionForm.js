import React, { Component } from 'react'
import { View, Text, TouchableHighlight,  StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import configureStore from './../configureStore'
import { fetchQuestions } from '../actions'

class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.props = props
  }


  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
      <TouchableHighlight style={styles.button} onPress={() => fetchQuestions()}>
        <Text style={styles.buttonText}>GO</Text>
      </TouchableHighlight>
      <Text style={styles.text}>Hello world!</Text>
      </View>
    );
  }

}

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    // fetchData: () => dispatch(fetchData())
    fetchQuestion: () => dispatch(fetchQuestion())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionForm)



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
