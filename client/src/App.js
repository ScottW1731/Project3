
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Admin from "./pages/Admin/Admin";
import TaskPage from "./pages/TaskPage";
import Mentor from "./pages/Mentor";
import About from "./pages/About";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          {/* <Route exact path="/landingpage" component={LandingPage} /> */}
          <Route exact path="/Admin0" component={Admin} />
          <Route exact path="/mentor" component={Mentor} />
          <Route exact path="/task" component={TaskPage} />
          <Route exact path="/Admin2" component={About}/>
          {/* <Route exact path="/task/:id" component={Detail} />
          <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;