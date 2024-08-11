import React from "react";

function Card({ data, setActive, setId }) {
  return (
    <div
      className="card"
      onClick={() => {
        // console.log("key", data);
        setActive(true);
        setId(data);
      }}
    >
      <h1>capsule_serial: {data?.capsule_serial}</h1>
      <h1>status: {data?.status}</h1>
      <p>landings: {data?.landings}</p>
      <p>details: {data?.details}</p>
      <p>type: {data?.type}</p>
    </div>
  );
}

export default Card;
