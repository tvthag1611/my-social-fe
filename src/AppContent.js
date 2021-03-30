import Main from "components/main/Main";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserProcess from "components/user-process/UserProcess";
export default function AppContent() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={UserProcess} />
        <Route path="/register" component={UserProcess} />
        <Route path="/" exact component={Main} />
        <Route component={() => <div>Not Found</div>} />
      </Switch>
    </Router>
  );
}
