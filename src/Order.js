import React from "react";

import "./Order.css";
import Mobile from "./Mobile";
import Form from "./Form";
import Footer from "./Footer";
import Success from "./Success";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

export default function Order() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/pizza">
          <div className="orderPart">
            <div className="menuPart">
              <Link to="/mainpage">
                <button className="secondButton">ANASAYFA</button>
              </Link>
              <h1 className="mainHeading">YEMEK DÜNYASI</h1>
            </div>

            <div className="mobileAppPart">
              <Mobile />
            </div>

            <div className="orderPart">
              <Form />
            </div>

            <div className="footerPart">
              <a href="https://www.google.com/maps">
                <img
                  alt="map"
                  className="map"
                  src="https://julian.digital/wp-content/uploads/2017/12/istanbul_moves.jpg"
                />
              </a>
              <Footer />
            </div>
          </div>
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
