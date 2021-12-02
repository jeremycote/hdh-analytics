import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import PrivacyPage from "views/PrivacyPage/PrivacyPage.js";
import HelpPage from "views/HelpPage/HelpPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/help" component={HelpPage} />
      <Route path="/" component={LandingPage} />
      <Route path="/index.html" component={LandingPage} />

    </Switch>
  </Router>,
  document.getElementById("root")
);
