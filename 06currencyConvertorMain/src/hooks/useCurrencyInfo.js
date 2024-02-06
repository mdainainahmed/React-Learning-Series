import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res.currency));
    console.log(data);
  }, [currency, url, data]);

  return data;
}

export default useCurrencyInfo;
