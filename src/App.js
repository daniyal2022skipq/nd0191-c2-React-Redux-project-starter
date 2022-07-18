import "./App.css";
import ErrorPage from "./components/ErrorPage";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import {useSelector} from 'react-redux'
import NewPoll from "./components/NewPoll";
import Leaderboard from "./components/Leaderboard";
import Pollpage from "./components/Pollpage";
import LoginFirst from "./components/LoginFirst";
function App() {
  let authuser=useSelector(state=>state.auth.authUser)
  return (
      <BrowserRouter>
     <Routes>          
      {!authuser && <Route exact path="/" element={<Login />}/>}
       {authuser ? <Route exact path="/dashboard" element={<Dashboard />} />:<Route path="/dashboard" element={<LoginFirst/>} />}
       {authuser ? <Route exact path="/add" element={<NewPoll />} />:<Route path="/add" element={<LoginFirst/>} />}
       {authuser ? <Route exact path="/questions/:question_id" element={<Pollpage />} />:<Route path="/questions/:question_id" element={<LoginFirst/>} />}
       {authuser ? <Route exact path="/leaderboard" element={<Leaderboard />} />   :<Route path="/leaderboard" element={<LoginFirst/>} />}  
        <Route path="*" element={<ErrorPage/>}/>
     </Routes>
   
     
   </BrowserRouter>
      
  );
}

export default App;
