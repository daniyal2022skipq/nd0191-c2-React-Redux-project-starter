import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { questionThunk } from "../slices/questionSlice";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const NewPoll = () => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const authUser = useSelector((state) => state.auth.authUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNewPoll = (e) => {
    e.preventDefault();
    const obj = {
      author: authUser,
      optionOneText: optionOne,
      optionTwoText: optionTwo,
    };
    dispatch(questionThunk(obj));
    navigate("/dashboard");
  };

  return (
    <>
      <h1>New Poll</h1>
      <Form onSubmit={handleNewPoll}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Write Option One"
            onChange={(e) => setOptionOne(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="Write Option Two"
            onChange={(e) => setOptionTwo(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          disabled={!optionOne || !optionTwo}
        >
          Create Poll
        </Button>
      </Form>
    </>
  );
};
export default NewPoll;
