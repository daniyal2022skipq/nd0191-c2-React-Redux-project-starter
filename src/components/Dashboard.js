import Navbar from "./Navbar/Navbar";
import Polls from "./Polls";
import { BallTriangle} from "react-loader-spinner";
import { useSelector } from "react-redux";
function Dashboard(props) {
  const isLoading = useSelector((state) => state.question.isLoading);
  const isLoadingAnswer = useSelector((state) => state.answer.isLoading);
  return (
    <div>
      {(isLoading || isLoadingAnswer) && (
        <div className="spinner">
          {" "}
          <BallTriangle />
        </div>
      )}
      {!isLoadingAnswer && !isLoading && <Navbar />}
      {!isLoading && !isLoadingAnswer && <Polls />}
    </div>
  );
}

export default Dashboard;
