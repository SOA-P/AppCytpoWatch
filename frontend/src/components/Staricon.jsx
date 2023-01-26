import { useEffect, useState } from "react";

export default function Staricon({ coinId }) {
  const [like, setLike] = useState(false);

  useEffect(() => {
    if (window.localStorage.coinList) {
      let favList = window.localStorage.coinList.split(",");
      if (favList.includes(coinId)) {
        setLike(true);
      }
    }
  }, []);

  const idChecker = (id) => {
    let favList = null;
    if (window.localStorage.coinList) {
      favList = window.localStorage.coinList.split(",");
    }

    if (favList) {
      if (favList.includes(id)) {
        window.localStorage.coinList = favList.filter((coin) => coin !== id);
        setLike(false);
      } else {
        window.localStorage.coinList = [...favList, coinId];
        setLike(true);
      }
    } else {
      window.localStorage.coinList = coinId;
      setLike(true);
    }
  };

  return (
    <img
      onClick={() => idChecker(coinId)}
      src={
        like
          ? "../../public/assets/star-full.svg"
          : "../../public/assets/star-empty.svg"
      }
      alt="icon-star"
    />
  );
}
