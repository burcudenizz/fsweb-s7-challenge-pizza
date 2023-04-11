import React from "react";

export default function Footer() {
  return (
    <div>
      <div class="FooterMenu">
        <ul className="footer">
          <li>Menü</li>
          <li>İletişim</li>
          <li>Adres:Bahçelievler, İstanbul</li>
          <li>İş Birlikleri</li>
        </ul>
        <div className="logoPart">
          <h1
            style={{
              color: "black",
              fontSize: "2.5rem",
              fontFamily: "Barlow, sans-serif",
            }}
          >
            {" "}
            BİZE ULAŞIN
          </h1>
          <a href="https://www.instagram.com/burcuu.deniiz/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
              className="logo"
              alt="logo"
            />
          </a>
          <a href="https://www.linkedin.com/in/burcu-deniz-b336aa181/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
              className="logo"
              alt="logo"
            />
          </a>
          <a href="https://github.com/burcudenizz">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              className="logo"
              alt="logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
