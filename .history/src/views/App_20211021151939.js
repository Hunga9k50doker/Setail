import './App.scss';
import NavOnTop from '../components/NavOnTop/NavOnTop';
import Nav from '../components/Navigation/Nav';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
 
  return (
    <Router>
      <div className="App">
        <NavOnTop />
        <Nav />
      </div>

      <Switch>
        <Route path="/Home">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
