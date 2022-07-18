import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Navigate} from "react-router-dom";
import { login } from "../slices/authSlice";
function Login(props) {
  const [nameError, setNameError] = useState("");
  const [passError, setPassError] = useState("");
  const [name, setName] = useState();
  const [password, setPassword] = useState();
const authUser=useSelector(state=>state.auth.authUser)
const dispatch = useDispatch();
const usersList = useSelector((state) => state.user.users);
if (authUser) {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get('redirectTo');
    return <Navigate to={redirectUrl ? redirectUrl : "/dashboard"}/>;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (usersList[name] === undefined) {
      setNameError("Incorrect Name");
      setPassError("");
      return;
    }
    if (usersList[name].password !== password) {
      setPassError("Incorrect Password");
      setNameError("");
      return;
    }
    if (usersList[name].password === password) {
      dispatch(login(name));
    }
  };


  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <img
            className="login-Img"
            src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?t=st=1657876432~exp=1657877032~hmac=7ec8670dc6a18ca1d8961eeb0ecb1d6f132c026fd7f8691d707d15440c3d281f&w=826"
            alt='userimage'
          />
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div data-testid="nameError">{nameError}</div>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div data-testid="passError">{passError}</div>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!name || !password}
              data-testid="btn"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
