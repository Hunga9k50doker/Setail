import "./App.scss";
import NavOnTop from "../components/NavOnTop/NavOnTop";
import Nav from "../components/Navigation/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeExotic from "./home/exoticDestinations/exotic";
import HomeTravel from "./home/travelAgency/travel";
import HomeWinter from "./home/winterHoliday/winter";

import  AboutUs from "./pages/aboutUs/about";
import  OurTeam from "./pages/ourTeam/ourTeam";
import  WhatWeOffer from "./pages/whatWeOffer/offer";

import Item from "./destinations/destinationsItem/item";
import List from "./destinations/destinationsList/list";
import Slider from "./destinations/destinationsSlider/slider";

import Gallery from "./tours/galleryList/gallery";
import Standard from "./tours/standardList/standard";
import Split from "./tours/splitList/split";

import Masonry from "./blog/masonry/masonry";
import BlogGallery from "./blog/postType/gallery";
import BlogLink from "./blog/postType/link";
import BlogStandard from "./blog/postType/standard";
import LeftStandard from "./blog/standard/leftStandard";
import RightStandard from "./blog/standard/rightStandard";
import WithoutStandard from "./blog/standard/withoutStandard";

import ShopList from "./shop/productList/list";
import ShopSingle from "./shop/productSingle/single";
import FourColumns from "./shop/shopLayout/fourColumns";
import ThreeColumns from "./shop/shopLayout/threeColumns";
import FullWidth from "./shop/shopLayout/fullWidth";

import ShopList from "./elements/productList/list";
import ShopList from "./elements/productList/list";
import ShopList from "./elements/productList/list";
import ShopList from "./elements/productList/list";
import ShopList from "./elements/productList/list";
import ShopList from "./elements/productList/list";
import ShopList from "./elements/productList/list";
import ShopList from "./elements/productList/list";
import ShopList from "./elements/productList/list";
import ShopList from "./elements/productList/list";
import ShopList from "./elements/productList/list";
import ShopList from "./elements/productList/list";


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
        <Route path="/destinations/list">
          <List />
        </Route>
        <Route path="/destinations/slider">
          <Slider />
        </Route>
        <Route path="/destinations/item">
          <Item />
        </Route>

        {/*=================== Tours================== */}
        <Route path="/tours/gallery-list">
          <Gallery />
        </Route>
        <Route path="/tours/standard-list">
          <Standard />
        </Route>
        <Route path="/tours/split-list">
          <Split />
        </Route>

        {/*=================== Blog================== */}
        <Route path="/blog/masonry">
          <Masonry />
        </Route>
        <Route path="/blog/gallery">
          <BlogGallery />
        </Route>
        <Route path="/blog/NavLink">
          <BlogLink />
        </Route>
        <Route path="/blog/standard">
          <BlogStandard />
        </Route>
        <Route path="/blog/right-sidebar">
          <RightStandard />
        </Route>
        <Route path="/blog/left-sidebar">
          <LeftStandard />
        </Route>
        <Route path="/blog/without-sidebar">
          <WithoutStandard />
        </Route>

        {/*=================== Shop================== */}
        <Route path="/shop/product-list">
          <ShopList />
        </Route>
        <Route path="/shop/product-single">
          <ShopSingle />
        </Route>
        <Route path="/shop/three-columns">
          <ThreeColumns />
        </Route>
        <Route path="/shop/four-columns">
          <FourColumns />
        </Route>
        <Route path="/shop/full-width">
          <FullWidth />
        </Route>
        {/*=================== Elements================== */}
      </Switch>
    </Router>
  );
}

export default App;
