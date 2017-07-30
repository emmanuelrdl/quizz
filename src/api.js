
import FileSystem from 'react-native-filesystem';
import questions from './quizz_questions.json'


export default () => {
  // console.log(questions)
  return new Promise((resolve, reject) => {
    return resolve(questions)
  })
}
