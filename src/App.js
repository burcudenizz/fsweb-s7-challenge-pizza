import React from "react";
import FirstPage from "./FirstPage";
import MainPage from "./MainPage";
import Order from "./Order";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Success from "./Success";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <FirstPage />
        </Route>
        <Route exact path="/mainpage">
          <MainPage />
        </Route>
        <Route exact path="/order-pizza">
          <Order />
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
