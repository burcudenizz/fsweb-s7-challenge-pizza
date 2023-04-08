import React from "react";
import "./FirstPage.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import MainPage from "./MainPage";
export default function FirstPage() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="firstPageContainer">
            <div className="heading">
              <h1>YEMEK DÜNYASI</h1>
              <h5>BİR DİLİM LEZZET BİNLERCE MUTLULUK :)</h5>
              <Link to="/mainpage">
                <button className="firstButton">MUTLU OL!</button>
              </Link>
            </div>
            <img
              alt="pizzaphoto"
              className="firstPhoto"
              src="https://www.eauclairesbestpizza.com/wp-content/uploads/2022/06/pizza-6-speciality-1-1fx9ae.png"
            />
          </div>
        </Route>
        <Route exact path="/mainpage">
          <MainPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
