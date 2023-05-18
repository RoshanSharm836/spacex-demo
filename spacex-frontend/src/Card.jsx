import React from "react";

function Card(el) {
  // console.table(el.data);
  return (
    <div className="card">
      <h1>{el.data.capsule_serial}</h1>
      <h1>{el.data.status}</h1>
      <h1>{el.data.landings}</h1>
      <p>{el.data.details}</p>
      <p>{el.data.type}</p>
    </div>
  );
}

export default Card;
