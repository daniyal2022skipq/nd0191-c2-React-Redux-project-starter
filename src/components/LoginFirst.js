import React from "react";
import { useSelector } from "react-redux";

function LoginFirst(props) {
  const authUser = useSelector((state) => state.auth.authUser);
  return <div>{!authUser && <h1>Please Login To Continue</h1>}</div>;
}

export default LoginFirst;
