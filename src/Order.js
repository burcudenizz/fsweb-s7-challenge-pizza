import React from "react";
import "./Order.css";
import Mobile from "./Mobile";
import Form from "./Form";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";

export default function Order() {
  const history = useHistory();
  const toMainPage = () => {
    history.push("/mainpage");
  };

  return (
    <div className="orderPart">
      <div className="menuPart">
        <button className="secondButton" onClick={toMainPage}>
          ANASAYFA
        </button>

        <h1 className="mainHeading">
          {" "}
          <img
            alt="logo"
            src="https://seeklogo.com/images/P/pizza-logo-42816D88BE-seeklogo.com.png"
            style={{ width: "100px" }}
          />
          PİZZA DÜNYASI
        </h1>
      </div>

      <div className="mobileAppPart">
        <Mobile />
      </div>

      <div className="orderPart">
        <Form />
      </div>

      <div className="footerPart2">
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
  );
}
