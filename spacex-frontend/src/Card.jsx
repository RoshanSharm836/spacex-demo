import React from "react";

function Card(el) {
  // console.table(el.data);
  return (
    <div className="card">
      <h1>capsule_serial: {el.data.capsule_serial}</h1>
      <h1>status: {el.data.status}</h1>
      <p>landings: {el.data.landings}</p>
      <p>details: {el.data.details}</p>
      <p>type: {el.data.type}</p>
    </div>
  );
}

export default Card;
