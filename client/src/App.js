import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TaskPage from "./pages/TaskPage";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav"; // error: module not found: Can't resolve './components/Nav'???

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={TaskPage} />
          <Route exact path="/task" component={TaskPage} />
          {/* <Route exact path="/task/:id" component={Detail} />
          <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;