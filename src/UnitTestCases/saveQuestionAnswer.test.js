import {_saveQuestionAnswer} from '../_DATA'
test('success test for saveQuestionAnswer', async() => {
//if all arguments are present it will resolve the promise  
    let data={
      authedUser:'sarahedo',
      qid:'loxhs1bqm25b708cmbf3g',
      answer:'optionOne'
    }
    const response=await _saveQuestionAnswer(data)
    expect(response).toEqual(true)
   
}),
test('failed test for saveQuestionAnswer', async() => {
  //if one argument will be missing it will reject the promise
  let data={
    authedUser:'sarahedo',
    qid:'loxhs1bqm25b708cmbf3g',
  }
    await expect(_saveQuestionAnswer(data)).rejects.toEqual("Please provide authedUser, qid, and answer")
   
})
  