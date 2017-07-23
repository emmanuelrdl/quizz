import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, FETCH_QUESTIONS } from './constants'
import getPeople from './api'

export function getData() {
  return {
    type: FETCHING_DATA
  }
}

export function getDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data,
  }
}

export function getDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE
  }
}

export function fetchQuestions(){
  return {
    type: FETCH_QUESTIONS
  }
}

export function fetchData() {
  return (dispatch) => {
    dispatch(getData())
    getPeople()
      .then((data) => {
        dispatch(getDataSuccess(data))
      })
      .catch((err) => console.log('err:', err))
  }
}


export function submitAnswer(){

}
