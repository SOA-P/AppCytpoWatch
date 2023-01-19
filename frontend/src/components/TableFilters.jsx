import React from "react";

export default function TableFilters() {
  return (
    <div className="table-filters">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input type="checkbox" name="" id="stableCoin" defaultChecked />
          <label htmlFor="stableCoin" id="">
            Avec stable coin
          </label>
        </div>
        <div className="no-list-btn">
          <p>Aucune list</p>
        </div>
        <div className="fav-list">
          <p>Fav list</p>
          <img src="../../public/assets/star-full.svg" alt="icon star" />
        </div>
      </div>
    </div>
  );
}
