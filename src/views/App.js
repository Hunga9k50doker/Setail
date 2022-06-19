import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

import { PublishRoute, PrivateRoute } from "../routes/routes";
import NotFound from "./NotFound/notfound";

import "./App.scss";

function App() {
  // handleEvent btn back top
  // The back-to-top button is hidden at the beginning

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // console.clear();
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
      <BrowserRouter>
        <Switch>
          <Route exact path={PublishRoute.map((e) => e.path)}>
            <MainLayout>
              {showButton && (
                <button className="backToTop" onClick={() => scrollToTop()}>
                  <i className="fas fa-arrow-up"></i>
                </button>
              )}
              {PublishRoute.map((route, key) => {
                return (
                  <Route
                    exact
                    key={key}
                    path={route.path}
                    component={route.component}
                  ></Route>
                );
              })}
            </MainLayout>
          </Route>

          <Route exact path={PrivateRoute.map((e) => e.path)}>
            <AdminLayout>
              {PrivateRoute.map((route, key) => {
                return (
                  <Route
                    exact
                    key={key}
                    path={route.path}
                    component={route.component}
                  ></Route>
                );
              })}
            </AdminLayout>
          </Route>

          <MainLayout>
            <Route path="*">
              <NotFound />
            </Route>
          </MainLayout>
        </Switch>
        <ToastContainer autoClose={1000} />
      </BrowserRouter>
    </div>
  );
}

export default App;
