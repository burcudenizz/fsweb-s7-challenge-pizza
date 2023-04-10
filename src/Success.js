import React from "react";

export default function Success(props) {
  const { alreadyOrdered } = props;
  console.log(alreadyOrdered);
  return (
    <div className="successOrder">
      <p className="congrats">TEBRİKLER ! SİPARİŞİNİZ ALINDI</p>
    </div>
  );
}
