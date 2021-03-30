import React from "react";
import { useHistory } from "react-router-dom";
import Login from "./items/Login";
import Signup from "./items/Signup";
import "./UserProcess.scss";

export default function UserProcess() {
  const history = useHistory();

  const path = history.location.pathname;
  return (
    <div className="user-process">
      {path === "/login" ? <Login /> : <Signup />}
    </div>
  );
}
