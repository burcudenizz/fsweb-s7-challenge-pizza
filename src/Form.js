import React from "react";
import { Link } from "react-router-dom";
import "./Order.css";
import * as yup from "yup";
import { useState, useEffect } from "react";
import axios from "axios";

/* YUP ADIMLARI 
1.yup kurmak,import etmek,
2.şema oluşturmak,
3.hatalar için state oluşturmak,
4.hataları kontrol eden fonksiyon oluşturmak,
5.Bu fonksiyonu her değişiklik sonrası tekrar çalıştırmak
6.hata mesajlarını sayfada görüntülemek //<p> kısmına yazdık.
7.Hata varsa formun gönderilmesini engelle.
*/

const formSchema = yup.object().shape({
  pizza_type: yup.string().required("Seçim yapınız"),
  pizza_size: yup
    .string()
    .oneOf(["small", "medium", "big"], "Boyutlardan birini seçmelisiniz.")
    .required(),
  dough_size: yup
    .string()
    .oneOf(
      ["thin", "medium", "thick"],
      "Hamur boyutlarından birini seçmelisiniz."
    )
    .required(),
  cheddar: yup.boolean().oneOf([true, false], ""),
  pepper: yup.boolean().oneOf([true, false], ""),
  tomato: yup.boolean().oneOf([true, false], ""),
  sucuk: yup.boolean().oneOf([true, false], ""),
  onion: yup.boolean().oneOf([true, false], ""),
  chicken: yup.boolean().oneOf([true, false], ""),
  corn: yup.boolean().oneOf([true, false], ""),
  pineapple: yup.boolean().oneOf([true, false], ""),
  courgette: yup.boolean().oneOf([true, false], ""),
  mushroom: yup.boolean().oneOf([true, false], ""),
  tuna: yup.boolean().oneOf([true, false], ""),
  mint: yup.boolean().oneOf([true, false], ""),
  oregano: yup.boolean().oneOf([true, false], ""),
  sausage: yup.boolean().oneOf([true, false], ""),
  ham: yup.boolean().oneOf([true, false], ""),
  olive: yup.boolean().oneOf([true, false], ""),
  name_surname: yup
    .string()
    .min(2, "İsminiz en az 2 karakterden oluşmalıdır.")
    .required("İsim alanını doldurmak zorunludur."),
  address: yup
    .string()
    .required("Adres alanını doldurmak zorunludur")
    .min(10, "En az 10 karakter girilmelidir."),
  email: yup
    .string()
    .email()
    .required("Geçerli bir email giriniz."),
  quantity: yup.number().required("Lütfen sipariş adedini girin!"),
  order_note: yup.string(),
});

export default function Form() {
  const [form, setForm] = useState({
    pizza_type: "",
    pizza_size: "none",
    dough_size: "none",
    cheddar: false,
    pepper: false,
    tomato: false,
    sucuk: false,
    onion: false,
    chicken: false,
    corn: false,
    pineapple: false,
    courgette: false,
    mushroom: false,
    tuna: false,
    mint: false,
    oregano: false,
    sausage: false,
    ham: false,
    olive: false,
    quantity: "",
    name_surname: "",
    address: "",
    email: "",
    order_note: "",
  });

  const [error, setError] = useState({
    pizza_type: "",
    pizza_size: "none",
    dough_size: "none",
    cheddar: false,
    pepper: false,
    tomato: false,
    sucuk: false,
    onion: false,
    chicken: false,
    corn: false,
    pineapple: false,
    courgette: false,
    mushroom: false,
    tuna: false,
    mint: false,
    oregano: false,
    sausage: false,
    ham: false,
    olive: false,
    quantity: "",
    name_surname: "",
    address: "",
    email: "",
    order_note: "",
  });

  useEffect(() => {
    formSchema.isValid(form).then((valid) => setbuttonDisabledMı(!valid));
  }, [form]);

  const [buttonDisabledMı, setbuttonDisabledMı] = useState(false);
  const [newSiparis, setNewSiparis] = useState(null);

  function checkFormErrors(name, value) {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setError({
          ...error,
          [name]: "",
        });
      })
      .catch((error) => {
        setError({
          ...error,
          [name]: error.errors[0],
        });
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    checkFormErrors(name, value);
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", form)
      .then((response) => {
        console.log(response.data);
        setNewSiparis(response.data);
        setForm({
          pizza_type: "",
          pizza_size: "none",
          dough_size: "none",
          cheddar: false,
          pepper: false,
          tomato: false,
          sucuk: false,
          onion: false,
          chicken: false,
          corn: false,
          pineapple: false,
          courgette: false,
          mushroom: false,
          tuna: false,
          mint: false,
          oregano: false,
          sausage: false,
          ham: false,
          olive: false,
          quantity: "",
          name_surname: "",
          address: "",
          email: "",
          order_note: "",
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="formPart">
      <h1 className="formHeading">SİPARİŞİNİZİ OLUŞTURUN</h1>
      <form onSubmit={handleSubmit}>
        <div className="pizza_type">
          <h3>Pizza Çeşitini Seçiniz</h3>
          <label>
            {" "}
            <select
              name="pizza_type"
              value={form.pizza_type}
              onChange={handleChange}
            >
              <option value="">Seçiniz</option>
              <option value="margarita">Margarita</option>
              <option value="sucuklu">Sucuklu Pizza</option>
              <option value="sebzeli">Sebzeli Pizza</option>
              <option value="ucpeynirli">Üç Peynirli Pizza</option>
              <option value="tavuklu">Tavuklu & Sebzeli Pizza</option>
            </select>
          </label>
          {error.pizza_type && <p>{error.pizza_type}</p>}
        </div>
        <div className="pizza_size">
          <h3>Pizza Boyutunu seçin</h3>
          <label>
            <input
              type="radio"
              value="small"
              name="pizza_size"
              checked={form.pizza_size === "small"}
              onChange={handleChange}
            />{" "}
            Küçük Boy
          </label>
          <label>
            <input
              type="radio"
              value="medium"
              name="pizza_size"
              checked={form.pizza_size === "medium"}
              onChange={handleChange}
            />{" "}
            Orta Boy
          </label>
          <label>
            <input
              type="radio"
              value="big"
              name="pizza_size"
              checked={form.pizza_size === "big"}
              onChange={handleChange}
            />{" "}
            Büyük Boy
          </label>
          {error.pizza_size && <p>{error.pizza_size}</p>}
        </div>
        <div className="dough_size">
          <label>
            <input
              type="radio"
              value="thin"
              name="dough_size"
              checked={form.dough_size === "thin"}
              onChange={handleChange}
            />{" "}
            İnce
          </label>
          <label>
            <input
              type="radio"
              value="medium"
              name="dough_size"
              checked={form.dough_size === "medium"}
              onChange={handleChange}
            />{" "}
            Orta
          </label>
          <label>
            <input
              type="radio"
              value="thick"
              name="dough_size"
              checked={form.dough_size === "thick"}
              onChange={handleChange}
            />{" "}
            Kalın
          </label>
          {error.dough_size && <p>{error.dough_size}</p>}
        </div>
        <div className="ingredients">
          <h3>Ek Malzemeleri seçin</h3>
          <label>
            <input
              type="checkbox"
              name="cheddar"
              value={form.cheddar}
              onChange={handleChange}
            />{" "}
            Cheddar Peyniri
          </label>
          <label>
            <input
              type="checkbox"
              name="pepper"
              value={form.pepper}
              onChange={handleChange}
            />{" "}
            Kapya Biber
          </label>
          <label>
            <input
              type="checkbox"
              name="tomato"
              value={form.tomato}
              onChange={handleChange}
            />{" "}
            Domates
          </label>
          <label>
            <input
              type="checkbox"
              name="sucuk"
              value={form.sucuk}
              onChange={handleChange}
            />{" "}
            Sucuk
          </label>
          <label>
            <input
              type="checkbox"
              name="onion"
              value={form.onion}
              onChange={handleChange}
            />{" "}
            Soğan
          </label>
          <label>
            <input
              type="checkbox"
              name="chicken"
              value={form.chicken}
              onChange={handleChange}
            />{" "}
            Tavuk Izgara
          </label>
          <label>
            <input
              type="checkbox"
              name="corn"
              value={form.corn}
              onChange={handleChange}
            />{" "}
            Mısır
          </label>
          <label>
            <input
              type="checkbox"
              name="pineapple"
              value={form.pineapple}
              onChange={handleChange}
            />{" "}
            Ananas
          </label>
          <label>
            <input
              type="checkbox"
              name="courgette"
              value={form.courgette}
              onChange={handleChange}
            />{" "}
            Kabak
          </label>
          <label>
            <input
              type="checkbox"
              name="mushroom"
              value={form.mushroom}
              onChange={handleChange}
            />{" "}
            Mantar
          </label>
          <label>
            <input
              type="checkbox"
              name="tuna"
              value={form.tuna}
              onChange={handleChange}
            />{" "}
            Ton Balığı
          </label>
          <label>
            <input
              type="checkbox"
              name="mint"
              value={form.mint}
              onChange={handleChange}
            />{" "}
            Nane
          </label>
          <label>
            <input
              type="checkbox"
              name="oregano"
              value={form.oregano}
              onChange={handleChange}
            />{" "}
            Kekik
          </label>
          <label>
            <input
              type="checkbox"
              name="sausage"
              value={form.sausage}
              onChange={handleChange}
            />{" "}
            Sausage
          </label>
          <label>
            <input
              type="checkbox"
              name="ham"
              value={form.ham}
              onChange={handleChange}
            />{" "}
            Jambon
          </label>
          <label>
            <input
              type="checkbox"
              name="olive"
              value={form.olive}
              onChange={handleChange}
            />{" "}
            Zeytin
          </label>
        </div>
        <div className="quantity">
          <h3>Sipariş Adedini Seçiniz</h3>

          <label>
            {" "}
            <input type="number" name="quantity" min="1" max="5" />
          </label>
          {error.quantity && <p>{error.quantity}</p>}
        </div>
        <div className="contact">
          <h3>İletişim Bilgilerinizi Giriniz</h3>
          <label>
            İsim Soyisim:
            <input
              type="text"
              name="name_surname"
              value={form.name_surname}
              onChange={handleChange}
            />
          </label>
          {error.name_surname && <p>{error.name_surname}</p>}

          <label>
            Adres:
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
            />
          </label>
          {error.address && <p>{error.address}</p>}

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </label>
          {error.email && <p>{error.email}</p>}
        </div>
        <div className="order_note">
          <h3>Sipariş Notunuzu Giriniz</h3>
          <label>
            <input
              type="text"
              name="order_note"
              value={form.order_note}
              onChange={handleChange}
            />
          </label>
        </div>
        <Link to="/ordersubmit" id="order-submit">
          <input
            type="submit"
            name="button"
            disabled={buttonDisabledMı}
            value="siparişi gönder"
          />
        </Link>
      </form>
    </div>
  );
}
