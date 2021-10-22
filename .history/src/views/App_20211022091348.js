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

import Item from "../views/destinations/destinationItem/item";
import List from "../views/destinations/destinationList/list";
import Slider from "../views/destinations/destinationSilder/slider";


function App() {
  return (
    <Router>
      <div className="App">
        <NavOnTop />
        <Nav />
      </div>
      <Switch>
        {/*=================== Home================== */}

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
          <OurTeam />
        </Route>
        <Route path="/pages/what-we-offer">
          <WhatWeOffer />
        </Route>

        {/*=================== Destinations================== */}
        <Route path="/desti/about-us">
          <AboutUs />
        </Route>
        <Route path="/desti/our-team">
          <OurTeam />
        </Route>
        <Route path="/desti/what-we-offer">
          <WhatWeOffer />
        </Route>
        {/*=================== Tours================== */}

        {/*=================== Blog================== */}
        {/*=================== Shop================== */}
        {/*=================== Elements================== */}
      </Switch>
    </Router>
  );
}

export default App;
