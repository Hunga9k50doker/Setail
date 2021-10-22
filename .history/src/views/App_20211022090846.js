import "./App.scss";
import NavOnTop from "../components/NavOnTop/NavOnTop";
import Nav from "../components/Navigation/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeExotic from "../views/home/exoticDestinations/exotic";
import HomeTravel from "../views/home/travelAgency/travel";
import HomeWinter from "../views/home/winterHoliday/winter";

import  AboutUs from "../views/pages/aboutUs/about";
import  OurTeam from "../views/pages/ourTeam/ourTeam";
import  WhatWeOffer from "../views/pages/whatWeOffer/offer";


function App() {
  return (
    <Router>
      <div className="App">
        <NavOnTop />
        <Nav />
      </div>
      <Switch>
        <Route path="/" exact>
          <HomeTravel />
        </Route>
        <Route path="/home/winter-holidays">
          <HomeWinter />
        </Route>
        <Route path="/home/exotic-destinations">
          <HomeExotic />
        </Route>
{/*=================== Pages================== */}
        <Route path="/pages/about-us">
          <AboutUs />
        </Route>
        <Route path="/pages/our-team">
          <AboutUs />
        </Route>
        <Route path="/pages/what-we-offer">
          <AboutUs />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
