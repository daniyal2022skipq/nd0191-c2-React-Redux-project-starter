import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import Navbar from "./Navbar/Navbar";
const Leaderboard = () => {
  const usersList = useSelector((state) => state.user.users);
  const userRanking = Object.keys(usersList)
    .map((user) => {
      return {
        name: usersList[user].name,
        answers: Object.keys(usersList[user].answers).length,
        questions: usersList[user].questions.length,
        avatarURL: usersList[user].avatarURL,
      };
    })
    .sort((a, b) => {
      return b.answers + b.questions - (a.answers + a.questions);
    });
  return (
    <>
      <Navbar />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Users</th>
            <th>Created</th>
            <th>Answerd</th>
          </tr>
        </thead>
        <tbody>
          {userRanking.map((user) => (
            <tr key={user.name}>
              <td>
                <div>
                  <span>
                    <img
                      src={user.avatarURL}
                      className="tableimg"
                      alt="tableImages"
                    ></img>
                  </span>
                  <span style={{ paddingLeft: ".5rem" }}>{user.name}</span>
                </div>
              </td>
              <td>{user.questions}</td>
              <td>{user.answers}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
export default Leaderboard;
