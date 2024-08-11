import React from "react";

export default function Popup({ setActive, id }) {
  function togglePopup() {
    setActive(false);
  }
  return (
    <div className="popup">
      <div className="popup-container">
        <div className="popup-content">
          <h1>capsule_serial: {id?.capsule_serial}</h1>
          <h1>capsule_id: {id?.capsule_id}</h1>
          <h1>status: {id?.status}</h1>
          <p>landings: {id?.landings}</p>
          <p>type: {id?.type}</p>
          <p>original_launch: {id?.original_launch}</p>
          <p>details: {id?.details}</p>
          <button className="button-23" onClick={togglePopup}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
