import React, { useState } from "react";
import CoinChart from "./CoinChart";
import PercentChange from "./PercentChange";
import Staricon from "./Staricon";

export default function TableLine({ coin, coinId }) {
  const mktCapFormater = (num) => {
    let newNum = String(num).split("").slice(0, -6);
    return Number(newNum.join(""));
  };

  const priceFormater = (num) => {
    if (Math.round(num).toString().length < 4) {
      return new Intl.NumberFormat("us-Us", {
        minimuFractionDigits: 2,
        maximumFractionDigits: 7,
      }).format(num);
    } else {
      return num;
    }
  };

  const [showChart, setShowChart] = useState(false);

  return (
    <div className="table-line">
      <div className="infos-container">
        <Staricon coinId={coinId} />
        <div className="img">
          <img src={coin.image} height="20" alt="" />
        </div>
        <div className="infos">
          <div
            className="chart-img"
            onMouseEnter={() => setShowChart(true)}
            onMouseLeave={() => setShowChart(false)}
          >
            <img src="../../public/assets/chart-icon.svg" alt="" />
            <div className="chart-container" id={coin.name}>
              {showChart && <CoinChart coinId={coin.id} coinName={coin.name} />}
            </div>
          </div>
          <h4>{coin.name}</h4>
          <span>- {coin.symbol.toUpperCase()}</span>
          <a
            target="_blank"
            href={
              "https://www.coingecko.com/fr/pi%C3%A8ces/" +
              coin.name
                .toLowerCase()
                .replace(" ", "-")
                .replace(" ", "-")
                .replace(" ", "-")
            }
          >
            <img src="../../public/assets/info-icon.svg" alt="info-icon" />
          </a>
        </div>
      </div>
      <p>{priceFormater(coin.current_price).toLocaleString()} $ </p>
      <p className="mktcap"> {mktCapFormater(coin.market_cap)}M$</p>
      <p className="volume">{coin.total_volume.toLocaleString()}$</p>
      <PercentChange percent={coin.price_change_percentage_1h_in_currency} />
      <PercentChange percent={coin.market_cap_change_percentage_24h} />
      <PercentChange percent={coin.price_change_percentage_7d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_30d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_200d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_1y_in_currency} />
      {coin.ath_change_percentage > -3 ? (
        <p>ATH ! </p>
      ) : (
        <PercentChange percent={coin.ath_change_percentage} />
      )}
    </div>
  );
}
