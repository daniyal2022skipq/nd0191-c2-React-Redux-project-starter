import { useDispatch, useSelector } from "react-redux";
import SinglePoll from "./SinglePoll";
import { useEffect, useState } from "react";
import { getquestionThunk } from "../slices/questionSlice";
const Polls = () => {
  const [radioButtonValue,setRadioButton]=useState('new')
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.question.allQuestions);
  const authUser = useSelector((state) => state.auth.authUser);
  const users = useSelector((state) => state.user.users);
  const newQ = Object.keys(questions)
    .map((user) => {
      return {
        image: users[questions[user].author].avatarURL,
        timestamp: questions[user].timestamp,
        author: questions[user].author,
        id: questions[user].id,
        key: questions[user].id,
      };
    })
    .sort((a, b) => {
      return b.timestamp - a.timestamp;
    });
const questionLength=Object.keys(questions).length
const handleRadio=(e)=>{
  setRadioButton(e.target.value)

}
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      dispatch(getquestionThunk());
    }
    return () => {
      mounted = false;
    };
  }, [questionLength,dispatch]);
  return (
    <div>
      <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value='new'checked={radioButtonValue==='new'} onChange={handleRadio}/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    New Questions
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value='old' checked={radioButtonValue==='old'} onChange={handleRadio}/>
  <label className="form-check-label" htmlFor="flexRadioDefault2">
  Old Questions
  </label>
</div>
      {radioButtonValue==='new' && (<div className="allPolls">
        <h2>New</h2>  
        <div className="newDiv">
          {newQ.map((question) => {
            if (!users[authUser]?.answers[question.id]) {
              return (
                <SinglePoll
                  image={users[question.author].avatarURL}
                  date={question.timestamp}
                  author={question.author}
                  id={question.id}
                  key={question.id}
                />
              );
            }
            return null;
          })}
        </div>
      </div>)}
      {radioButtonValue==='old' && (
        <div>
        <h2>Done</h2>

        <div className="oldDiv">
          {newQ.map((question) => {
            if (users[authUser]?.answers[question.id]) {
              return (
                <SinglePoll
                  image={users[question.author].avatarURL}
                  date={question.timestamp}
                  author={question.author}
                  id={question.id}
                  key={question.id}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
      )}
    </div>
  );
};

export default Polls;
