import React from "react";

function Filter({ newdata, setNewData, func }) {
  const handlesubmit = (e) => {
    setNewData([]);
  };
  const handlechange = (e) => {
    // console.log(e.target.name, e.target.value);
    func(e.target.name, e.target.value);
  };
  return (
    <div className="filter">
      <label htmlFor="">Capsules landings</label>
      <select name="landings" onChange={handlechange}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <label htmlFor="">Capsules status</label>
      <select name="status" onChange={handlechange}>
        <option value="active">active</option>
        <option value="destroyed">destroyed</option>
        <option value="unknown">unknown</option>
        <option value="retired">retired</option>
      </select>
      <label htmlFor="">Capsules Type</label>
      <select name="type" onChange={handlechange}>
        <option value="Dragon 1.0">Dragon 1.0</option>
        <option value="Dragon 1.1">Dragon 1.1</option>
        <option value="Dragon 2.0">Dragon 2.0</option>
      </select>
      {newdata.length > 0 ? (
        <button className="button-23" onClick={handlesubmit}>
          Clear
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Filter;
