import React, { useState } from "react";

export default function CoinChart({ coinId, coinName }) {
  const [duration, setDuration] = useState(30);

  const headerData = [
    [1, "1 jour"],
    [3, "3jours"],
    [7, "7jours "],
    [30, " 1mois "],
    [91, "3 mois"],
    [181, "6 mois"],
    [365, "1 an"],
    [3000, "Max"],
  ];
  return (
    <div className="coin-chart">
      <p>{coinName}</p>
      <div className="btn-container">
        {headerData.map((el) => {
          return (
            <div
              key={el[O]}
              hmtlFor={"btn" + el[0]}
              onClick={() => setDuration(el[0])}
              className={el[0] === duration ? "active-btn" : ""}
            >
              {el[1]}
            </div>
          );
        })}
      </div>
    </div>
  );
}
