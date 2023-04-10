import React from "react";
import "./MainPage.css";
import FoodAdverts from "./FoodAdverts";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";

const foodAdverts = [
  {
    image: "https://images.deliveryhero.io/image/fd-tr/LH/t5vx-hero.jpg",
    type: "Sebzeli Pizza",
    ingredients: "Mantar,Kabak,Peynir,Soğan",
    time: "20-30 Dakika",
    forPeople: "4-6 Kişilik",
    cost: "100 TL ",
  },
  {
    image: "https://images.deliveryhero.io/image/fd-tr/LH/m6n3-listing.jpg",
    type: "Sucuklu Pizza",
    ingredients: "Sucuk,Domates Sosu,Fesleğen",
    time: "50-55 Dakika",
    forPeople: "4-6 Kişilik",
    cost: "150 TL",
  },
  {
    image:
      "https://i1.haber7.net//haber/haber7/photos/2020/44/qRhAC_1604058164_302.jpg",
    type: "Üç Peynirli Pizza",
    ingredients: "Mozarella,Cheddar,Parmesan  ",
    time: "20-25 Min",
    forPeople: "4-6 Kişilik",
    cost: "100 TL ",
  },
  {
    image:
      "https://cdn.yemek.com/mncrop/940/625/uploads/2014/09/cikolatali-sufle-yemekcom.jpg",
    type: "Sufle",
    ingredients: "Çikolata,Dondurma  ",
    time: "20-25 Min",
    forPeople: "1-2 Kişilik",
    cost: "50 TL ",
  },
];
export default function MainPage() {
  const history = useHistory();
  const toOrderPage = () => {
    history.push("/pizza");
  };
  const toMainPage = () => {
    history.push("/mainpage");
  };
  return (
    <div className="MainPageContainer">
      <div className="menuPart">
        <button className="secondButton" onClick={toMainPage}>
          ANASAYFA
        </button>

        <h1 className="mainHeading">
          {" "}
          <img
            src="https://seeklogo.com/images/P/pizza-logo-42816D88BE-seeklogo.com.png"
            style={{ width: "100px" }}
          />
          PİZZA DÜNYASI
        </h1>

        <button className="secondButton" onClick={toOrderPage}>
          SİPARİŞ VER
        </button>
      </div>
      <div className="pizzaPart">
        <img
          src="https://i.pinimg.com/originals/a3/e0/6c/a3e06c8f7b389ecacdbcd59f2b29fc17.jpg"
          alt="pizza"
          className="pizzaImg"
        />

        <div className="textPart">
          <h1 onClick={toOrderPage}>
            Bir Dilim Pizzadan Başka, İki Dilim Pizza Mutlu Eder...
          </h1>
        </div>
      </div>
      <div className="blackPart">
        <h1>Seçenekler</h1>
        <div className="AdvertsPart">
          {foodAdverts.map((event) => (
            <FoodAdverts foodAdverts={event} />
          ))}
        </div>
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
  );
}
