import { Route, Switch, Redirect } from "react-router-dom";
// import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import SchedulePage from "views/content/SchedulePage.js";
import Team from "views/content/Team";
import Winner from "views/content/Winner";
import Contact from "views/content/Contact";
import Documents from "views/content/Documents";
import Sponsor from "views/content/Sponsor";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/home" render={(props) => <Index {...props} />} />
        <Route
          path={"/schedule"}
          render={(props) => <SchedulePage {...props} />}
        />
        <Route
          path={"/documents"}
          render={(props) => <Documents {...props} />}
        />
        <Route path={"/sponsors"} render={(props) => <Sponsor {...props} />} />
        <Route path={"/winners"} render={(props) => <Winner {...props} />} />
        <Route path={"/team"} render={(props) => <Team {...props} />} />
        <Route path={"/contact"} render={(props) => <Contact {...props} />} />
        <Redirect from="*" to="/home" />
      </Switch>
    </>
  );
}
