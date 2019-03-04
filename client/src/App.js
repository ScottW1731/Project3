
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TaskPage from "./pages/TaskPage";
import LandingDummy from "./pages/LandingDummy";
import Mentor from "./pages/Mentor";
import LandingPage from "./pages/LandingPage";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/landingpage" component={LandingPage} />
          <Route exact path="/dummy" component={LandingDummy} />
          {/* <Route exact path="/" component={TaskPage} /> */}
          <Route exact path="/mentor" component={Mentor} />
          <Route exact path="/task" component={TaskPage} />
          {/* <Route exact path="/task/:id" component={Detail} />
          <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;