import React from "react";
import { Link } from "react-router-dom";
import "./Order.css";
export default function Order() {
  return (
    <div className="orderPart">
      <div className="menuPart">
        <Link to="/mainpage">
          <button className="secondButton">ANASAYFA</button>
        </Link>
        <Link to="/orderpizza">
          <button className="secondButton">SİPARİŞ VER</button>
        </Link>
      </div>
      <form></form>
    </div>
  );
}
