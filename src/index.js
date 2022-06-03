import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App.js";
import "./styles/global.scss";
import "./styles/responsive.scss";
import "./assets/font/fontawesome-free-5.15.3-web/css/all.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import reportWebVitals from "./reportWebVitals";
AOS.init({
  duration: 1000,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
