import React from "react";
import "./FirstPage.css";
import { useHistory } from "react-router-dom";

export default function FirstPage() {
  const history = useHistory();
  const toMainPage = () => {
    history.push("/mainpage");
  };
  return (
    <div className="firstPageContainer">
      <div className="heading">
        <h1 className="mainHeadingFirst">YEMEK DÜNYASI</h1>
        <h5 className="happy">BİR DİLİM LEZZET BİNLERCE MUTLULUK :)</h5>
        <button className="firstButton" onClick={toMainPage}>
          MUTLU OL!
        </button>
      </div>
      <img
        alt="pizzaphoto"
        className="firstPhoto"
        src="https://www.eauclairesbestpizza.com/wp-content/uploads/2022/06/pizza-6-speciality-1-1fx9ae.png"
      />
    </div>
  );
}
