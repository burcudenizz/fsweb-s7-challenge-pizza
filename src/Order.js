import React from "react";
import { Link } from "react-router-dom";
import "./Order.css";
import Mobile from "./Mobile";
import Form from "./Form";
export default function Order() {
  return (
    <div className="orderPart">
      <div className="menuPart">
        <Link to="/mainpage">
          <button className="secondButton">ANASAYFA</button>
        </Link>
        <h1 className="mainHeading">YEMEK DÜNYASI</h1>
        <Link to="/pizza">
          <button className="secondButton">SİPARİŞ VER</button>
        </Link>
      </div>
      <div className="mobileAppPart">
        <Mobile />
      </div>
      <div className="formPart">
        <Form />
      </div>
    </div>
  );
}
