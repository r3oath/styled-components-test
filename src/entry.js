import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import * as Routes from "./routes";

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Route exact={true} path="/" component={Routes.Home} />
      <Route path="/r/:postId" component={Routes.View} />
    </React.Fragment>
  </Router>,
  document.getElementById("app")
);
