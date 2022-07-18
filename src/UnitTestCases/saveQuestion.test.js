import {_getQuestions, _saveQuestion} from '../_DATA'
test('success test for saveQuestion', async() => {
//if all arguments are present it will resolve the promise  
const oldQuestionLength=await _getQuestions()
    let data={
      author:'sarahedo',
      optionOneText:'Hey',
      optionTwoText:'Hello'
    }
    const response=await _saveQuestion(data)
 const newQuesLen=await _getQuestions()
 expect(Object.keys(newQuesLen).length).toEqual(Object.keys(oldQuestionLength).length+1)  
})

test('failed test for saveQuestion', async() => {
  //if one argument will be missing it will reject the promise
    let data={
      author:'sarahedo',
      optionOneText:'Hey',
    }
    await expect(_saveQuestion(data)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author")
   
})
  