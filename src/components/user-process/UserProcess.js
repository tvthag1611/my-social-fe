import { Typography } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import Login from "./items/Login";
import Signup from "./items/Signup";
import "./UserProcess.scss";
const { Title } = Typography;

export default function UserProcess() {
  const history = useHistory();
  const path = history.location.pathname;
  const title = path === "/login" ? "LOGIN" : "SIGN UP";
  const more = path === "/login" ? "sign up >" : " < login";
  const link = path === "/login" ? "/register" : "/login";
  return (
    <div className="user-process">
      <Title>{title}</Title>
      {path === "/login" ? <Login title={title} /> : <Signup title={title} />}
      <a className="more-login" href={link}>
        {more}
      </a>
    </div>
  );
}
