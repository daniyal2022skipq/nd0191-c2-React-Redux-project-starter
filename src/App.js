import "./App.css";
import ErrorPage from "./components/ErrorPage";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import {useSelector} from 'react-redux'
import NewPoll from "./components/NewPoll";
import Leaderboard from "./components/Leaderboard";
import Pollpage from "./components/Pollpage";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar/Navbar";
import NoQuestion from "./components/NoQuestion";
function App() {
  let authuser=useSelector(state=>state.auth.authUser)
  
  return (
      <BrowserRouter>  
      {authuser && <Navbar/>}
     <Routes>
                <Route path="/" exact element={<Login/>}/>
                <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
                <Route path="/leaderboard" exact element={<PrivateRoute><Leaderboard/></PrivateRoute>}/>
                <Route path="/questions/:question_id" element={<PrivateRoute><Pollpage/></PrivateRoute>}/>
                <Route path="/add" exact element={<PrivateRoute><NewPoll/></PrivateRoute>}/>
                <Route path="/404" exact element={<NoQuestion/>}/>
                <Route path="*" exact element={<ErrorPage/>}/>
            </Routes>
    
   </BrowserRouter>
      
  );
}

export default App;
