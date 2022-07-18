import { useSelector } from "react-redux";
import { useNavigate, useParams ,Navigate} from "react-router-dom";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { answerThunk } from "../slices/answerSlice";

const Pollpage = () => {
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  const { question_id } = useParams();
  const authUser = useSelector((state) => state.auth.authUser);
  const users = useSelector((state) => state.user.users);
  const questions = useSelector((state) => state.question.allQuestions);
  if (!authUser || !questions[question_id] ) {
    return <Navigate to="/404"/>;
}
  const buttonhandlerOne = () => {
    const obj = { qid: question_id, authedUser: authUser, answer: "optionOne" };

    dispatch(answerThunk(obj));
    naviagte(-1);
  };
  const buttonhandlerTwo = () => {
    const obj = {
      qid: question_id,
      authedUser: users[authUser].id,
      answer: "optionTwo",
    };
    dispatch(answerThunk(obj));
    naviagte(-1);
  };

  return (
    <div>
      <Card
        style={{
          width: "30rem",
          paddingRight: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card.Header>Poll By {questions[question_id].author}</Card.Header>
        <Card.Img
          variant="top"
          src={users[questions[question_id].author].avatarURL}
        />
        <Card.Body>
          <Card.Text>Would You Rather?</Card.Text>
          <Button
            variant={
              users[authUser].answers[question_id] === "optionOne"
                ? "primary"
                : "secondary"
            }
            onClick={buttonhandlerOne}
          >
            {questions[question_id].optionOne.text}
          </Button>
          {users[authUser].answers[question_id] ? (
            <p>
              No Of People Who Votes For This Option:{" "}
              <span style={{ fontWeight: "bold" }}>
                {questions[question_id].optionOne.votes.length}
              </span>
              <br></br>
              <span style={{ fontWeight: "bold" }}>
                Percentage{" "}
                {(questions[question_id].optionOne.votes.length /
                  Object.keys(users).length) *
                  100}
                %
              </span>
            </p>
          ) : null}

          <Button
            variant={
              users[authUser].answers[question_id] === "optionTwo"
                ? "primary"
                : "secondary"
            }
            onClick={buttonhandlerTwo}
          >
            {questions[question_id].optionTwo.text}
          </Button>
          {users[authUser].answers[question_id] ? (
            <p>
              {" "}
              No Of People Who Votes For This Option:{" "}
              <span style={{ fontWeight: "bold" }}>
                {questions[question_id].optionTwo.votes.length}
              </span>
              <br></br>
              <span style={{ fontWeight: "bold" }}>
                Percentage{" "}
                {(questions[question_id].optionTwo.votes.length /
                  Object.keys(users).length) *
                  100}
                %
              </span>
            </p>
          ) : null}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Pollpage;
