import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect, HashRouter } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/content/LandingPage.js";
import RegisterPage from "views/content/RegisterPage.js";
import ProfilePage from "views/content/ProfilePage.js";
import SchedulePage from "views/content/SchedulePage.js";
import Team from "views/content/Team";
import Winner from "views/content/Winner";
import Contact from "views/content/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <Switch>
      <Route path="/home" render={(props) => <Index {...props} />} />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path={"/schedule"}
        render={(props) => <SchedulePage {...props} />}
      />
      <Route
        path="/register"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/profile"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route 
        path={"/leaderboard"}
        render={(props) => <Winner {...props} />}
      />
      <Route 
        path={"/team"}
        render={(props) => <Team {...props} />}
      />
      <Route 
        path={"/contact"}
        render={(props) => <Contact {...props} />}
      />
      {/* <Redirect from="/" to="/home" /> */}
      <Redirect from="*" to="/home" />
    </Switch>
  </HashRouter>
);