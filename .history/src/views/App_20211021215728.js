import './App.scss';
import NavOnTop from '../components/NavOnTop/NavOnTop';
import Nav from '../components/Navigation/Nav';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import homeExotic from '../views/home/exoticDestinations/exotic';
import homeT from "../views/home/exoticDestinations/exotic";
import home from "../views/home/exoticDestinations/exotic";



function App() {
 
  return (
    <Router>
      <div className="App">
        <NavOnTop />
        <Nav />
      </div>

      {/* <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch> */}
    </Router>
  );
}

export default App;
