import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import PrivacyPage from "views/PrivacyPage/PrivacyPage.js";
import HelpPage from "views/HelpPage/HelpPage.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/privacy" component={PrivacyPage} />
      <Route exact path="/help" component={HelpPage} />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/index.html" component={LandingPage} />

    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
