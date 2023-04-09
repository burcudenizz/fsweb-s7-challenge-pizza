import React from "react";
import { Link } from "react-router-dom";
import "./Order.css";
import * as yup from "yup";
import { useState } from "react";
/* YUP ADIMLARI 
1.yup kurmak,import etmek,
2.şema oluşturmak,
3.hatalar için state oluşturmak,
4.hataları kontrol eden fonksiyon oluşturmak,
5.Bu fonksiyonu her değişiklik sonrası tekrar çalıştırmak
6.hata mesajlarını sayfada görüntülemek //<p> kısmına yazdık.
7.Hata varsa formun gönderilmesini engelle.
*/

export default function Form() {
  const [form, setForm] = useState({});

  return (
    <div className="form">
      <h1 className="formHeading">SİPARİŞİNİZİ OLUŞTURUN</h1>
      <form>
        <div className="pizza_type">
          <h3>Pizza Çeşitini Seçiniz</h3>

          <label>
            {" "}
            <select name="pizza_type">
              <option value="">Seçiniz</option>
              <option value="">Margarita</option>
              <option value="">Sucuklu Pizza</option>
              <option value="">Sebzeli Pizza</option>
              <option value="">Üç Peynirli Pizza</option>
              <option value="">Tavuklu & Sebzeli Pizza</option>
            </select>
          </label>
        </div>
        <div className="pizza_size">
          <h3>Pizza Boyutunu seçin</h3>
          <label>
            <input type="radio" value="small" name="size" /> Küçük Boy
          </label>
          <label>
            <input type="radio" value="medium" name="size" /> Orta Boy
          </label>
          <label>
            <input type="radio" value="big" name="size" /> Büyük Boy
          </label>
        </div>
        <div className="dough_size">
          <label>
            <input type="radio" value="thin" name="size" /> İnce
          </label>
          <label>
            <input type="radio" value="medium" name="size" /> Orta
          </label>
          <label>
            <input type="radio" value="thick" name="size" /> Kalın
          </label>
        </div>
        <div className="ingredients">
          <h3>Ek Malzemeleri seçin</h3>
          <label>
            <input type="checkbox" value="" name="cheddar_cheese" /> Cheddar
            Peyniri
          </label>
          <label>
            <input type="checkbox" value="" name="pepper" /> Kapya Biber
          </label>
          <label>
            <input type="checkbox" value="" name="tomato" /> Domates
          </label>
          <label>
            <input type="checkbox" value="" name="sucuk" /> Sucuk
          </label>
          <label>
            <input type="checkbox" value="" name="onion" /> Soğan
          </label>
          <label>
            <input type="checkbox" value="" name="chicken" /> Tavuk Izgara
          </label>
          <label>
            <input type="checkbox" value="" name="corn" /> Mısır
          </label>
          <label>
            <input type="checkbox" value="" name="pineapple" /> Ananas
          </label>
          <label>
            <input type="checkbox" value="" name="courgette" /> Kabak
          </label>
          <label>
            <input type="checkbox" value="" name="mushroom" /> Mantar
          </label>
          <label>
            <input type="checkbox" value="" name="tuna" /> Ton Balığı
          </label>
          <label>
            <input type="checkbox" value="" name="mint" /> Nane
          </label>
          <label>
            <input type="checkbox" value="" name="oregano" /> Kekik
          </label>
          <label>
            <input type="checkbox" value="" name="sausage" /> Sausage
          </label>
          <label>
            <input type="checkbox" value="" name="ham" /> Jambon
          </label>
          <label>
            <input type="checkbox" value="" name="olive" /> Zeytin
          </label>
        </div>
        <div className="order_quantity">
          <h3>Sipariş Adedini Seçiniz</h3>

          <label>
            {" "}
            <input type="number" name="quantity" min="1" max="5" />
          </label>
        </div>
        <div className="contact">
          <h3>İletişim Bilgilerinizi Giriniz</h3>

          <label>
            İsim Soyisim:
            <input type="text" value="" name="name_surname" />
          </label>
          <label>
            Adres:
            <input type="text" value="" name="address" />
          </label>
          <label>
            Email:
            <input type="email" value="" name="email" />
          </label>
        </div>
        <div className="order_note">
          <h3>Sipariş Notunuzu Giriniz</h3>
          <label>
            <input type="text" value="" name="order_note" />
          </label>
        </div>
        <Link to="/ordersubmit" id="order-submit">
          <button className="submitButton">SİPARİŞİ GÖNDER</button>
        </Link>
      </form>
    </div>
  );
}
