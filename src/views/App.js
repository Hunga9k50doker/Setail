import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import NavOnTop from "../containers/NavOnTop/NavOnTop";
import Nav from "../containers/Navigation/Nav";
import Footer from "../containers/Footer/footer";

import HomeExotic from "./home/exoticDestinations/exotic";
import HomeTravel from "./home/travelAgency/travel";
import HomeWinter from "./home/winterHoliday/winter";

import AboutUs from "./pages/aboutUs/about";
import OurTeam from "./pages/ourTeam/ourTeam";
import WhatWeOffer from "./pages/whatWeOffer/offer";

import Item from "./destinations/destinationsItem/item";
import List from "./destinations/destinationsList/list";
import Slider from "./destinations/destinationsSlider/slider";

import Gallery from "./tours/galleryList/gallery";
import Standard from "./tours/standardList/standard";
import Split from "./tours/splitList/split";

import Masonry from "./blog/masonry/masonry";
import BlogGallery from "./blog/postType/gallery";
import BlogLink from "./blog/postType/link";
import TypeStandard from "./blog/postType/standard";
import BlogStandard from "./blog/standard/BlogStandard";
import { BlogItem } from "../components/blogItem/BlogItem";

import ShopList from "./shop/productList/list";
import ShopSingle from "./shop/productSingle/single";
import ShopLayout from "./shop/shopLayout/shopLayout";

import ElementAccordions from "./elements/classic/accordions";
import Buttons from "./elements/classic/buttons";
import Tabs from "./elements/classic/tabs";
import Carousel from "./elements/featured/carousel";
import Filter from "./elements/featured/filter";
import TourList from "./elements/featured/tourList";
import ElementShop from "./elements/presentation/shop";
import ElementBlog from "./elements/presentation/blog";
import ElementsTeam from "./elements/presentation/team";
import TypographyHeadings from "./elements/typography/headings";
import TypographyColumns from "./elements/typography/columns";
import TypographySectionTitle from "./elements/typography/sectionTitle";

import ItemDetail from "../components/tourItem/item";
import NotFound from "../views/NotFound/notfound";

import "./App.scss";

function App() {
  // handleEvent btn back top
  // The back-to-top button is hidden at the beginning

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    console.clear();
    window.addEventListener("scroll", () => {
      scrollFunction();
    });
    return window.removeEventListener("scroll", () => {
      scrollFunction();
    });
  }, []);
  function scrollFunction() {
    if (window.scrollY > 30) {
      document.querySelector(".nav.nav__category").style.top = "0";
      document.querySelector(
        ".nav__list-item-Elements .nav__list-item-selections"
      ).style.top = "75px";
    } else {
      document.querySelector(".nav.nav__category").style.top = "42px";
      document.querySelector(
        ".nav__list-item-Elements .nav__list-item-selections"
      ).style.top = "117px";
      setShowButton(false);
    }
    if (window.scrollY > 300) {
      setShowButton(true);
    }
  }
  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="App">
      <Router>
        <NavOnTop />
        <Nav />
        <>
          {showButton && (
            <button className="backToTop" onClick={() => scrollToTop()}>
              <i className="fas fa-arrow-up"></i>
            </button>
          )}
        </>
        <Switch>
          {/*=================== Home================== */}
          <Route exact path="/">
            <HomeTravel />
          </Route>
          <Route exact path="/:slug">
            <TypeStandard />
          </Route>
          <Route exact path="/home/winter-holidays">
            <HomeWinter />
          </Route>
          <Route exact path="/home/exotic-destinations">
            <HomeExotic />
          </Route>

          {/*=================== Pages================== */}
          <Route exact path="/pages/about-us">
            <AboutUs />
          </Route>
          <Route exact path="/pages/our-team">
            <OurTeam />
          </Route>
          <Route exact path="/pages/what-we-offer">
            <WhatWeOffer />
          </Route>

          {/*=================== Destinations================== */}
          <Route exact path="/destinations/list">
            <List />
          </Route>
          <Route exact path="/destinations/slider">
            <Slider />
          </Route>
          <Route exact path="/destinations/:slug">
            <Item />
          </Route>

          {/*=================== Tours================== */}
          <Route exact path="/tours/gallery-list">
            <Gallery />
          </Route>
          <Route exact path="/tours/standard-list">
            <Standard />
          </Route>
          <Route exact path="/tours/split-list">
            <Split />
          </Route>
          <Route exact path="/tour-item/:slug">
            <ItemDetail />
          </Route>

          {/*=================== Blog================== */}
          <Route exact path="/blog/masonry">
            <Masonry />
          </Route>
          <Route exact path="/blog/gallery">
            <BlogGallery />
          </Route>
          <Route exact path="/blog/NavLink">
            <BlogLink />
          </Route>
          <Route exact path="/blog/standard">
            <TypeStandard />
          </Route>
          <Route exact path="/blog/right-sidebar">
            <BlogStandard />
          </Route>
          <Route exact path="/blog/left-sidebar">
            <BlogStandard />
          </Route>
          <Route exact path="/blog/without-sidebar">
            <BlogStandard />
          </Route>
          <Route exact path="/blog/category/:slug">
            <BlogStandard />
          </Route>

          {/*=================== Shop================== */}
          <Route exact path="/shop/product-list">
            <ShopList />
          </Route>
          <Route exact path="/shop/product-single">
            <ShopSingle />
          </Route>
          <Route exact path="/shop/three-columns">
            <ShopLayout />
          </Route>
          <Route exact path="/shop/four-columns">
            <ShopLayout />
          </Route>
          <Route exact path="/shop/full-width">
            <ShopLayout />
          </Route>

          {/*=================== Elements================== */}
          <Route exact path="/elements/tour-carousel">
            <Carousel />
          </Route>
          <Route exact path="/elements/tour-list">
            <TourList />
          </Route>
          <Route exact path="/elements/tour-filter">
            <Filter />
          </Route>
          <Route exact path="/elements/team">
            <ElementsTeam />
          </Route>
          <Route exact path="/elements/blog-list">
            <ElementBlog />
          </Route>
          <Route exact path="/elements/shop-list">
            <ElementShop />
          </Route>
          <Route exact path="/elements/accordions">
            <ElementAccordions />
          </Route>
          <Route exact path="/elements/tabs">
            <Tabs />
          </Route>
          <Route exact path="/elements/buttons">
            <Buttons />
          </Route>
          <Route exact path="/elements/columns">
            <TypographyColumns />
          </Route>
          <Route exact path="/elements/headings">
            <TypographyHeadings />
          </Route>
          <Route exact path="/elements/section-title">
            <TypographySectionTitle />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
