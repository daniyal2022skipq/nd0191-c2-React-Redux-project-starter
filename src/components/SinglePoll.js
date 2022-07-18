import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { formatDate } from "../helper/FormatDate";
const SinglePoll = ({ image, author, date, id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/questions/${id}`);
  };
  return (
    <Card style={{ width: "10rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{author}</Card.Title>
        <Card.Text>{formatDate(date)}</Card.Text>
        <Button variant="primary" onClick={handleClick}>
          View Poll
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SinglePoll;
