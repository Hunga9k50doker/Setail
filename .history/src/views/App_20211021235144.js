import "./App.scss";
import NavOnTop from "../components/NavOnTop/NavOnTop";
import Nav from "../components/Navigation/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeExotic from "../views/home/exoticDestinations/exotic";
import HomeTravel from "../views/home/travelAgency/travel";
import HomeWinter from "../views/home/winterHoliday/winter";

function App() {
  return (
    <Router>
      <div className="App">
        <NavOnTop />
        <Nav />
      </div>
      <Switch>
        <Route path="/" exact>
          <homeTravel />
        </Route>
        <Route path="/home/winter-holidays">
          <homeWinter />
        </Route>
        <Route path="/home/exotic-destinations">
          <homeExotic />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
