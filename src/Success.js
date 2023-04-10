import React from "react";

export default function Success(props) {
  const { alreadyOrdered } = props;
  console.log(alreadyOrdered);
  return (
    <>
      <div className="successOrder">
        <div className="heading">
          <h1 className="mainHeadingFirst">
            <img
              src="https://seeklogo.com/images/P/pizza-logo-42816D88BE-seeklogo.com.png"
              style={{ width: "100px" }}
            />
            PİZZA DÜNYASI
          </h1>
        </div>
        <p className="congrats">TEBRİKLER ! SİPARİŞİNİZ YOLA ÇIKTI :)</p>
        <img
          src="https://static.wixstatic.com/media/b08816_028a1254cf0e4e8282c6edcc4d98e916~mv2.gif"
          className="gif"
          alt="courier"
        />
      </div>
    </>
  );
}
