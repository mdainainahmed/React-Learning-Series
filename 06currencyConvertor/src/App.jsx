import UserInput from "./components/UserInput";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    let conversionValue = currencyInfo[to];
    setConvertedAmount(Number(amount * conversionValue).toFixed(4));
  };

  const swapHandler = () => {
    setTo(from);
    setFrom(to);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <>
      <h1 className=" font-bold m-3 font-serif">Currency Convertor</h1>
      <div className="bg-gray-500 bg-opacity-40 border-white border p-3 text-black rounded-lg h-fit">
        <form className="flex flex-col justify-center items-center"
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <UserInput
            label="From"
            amount={amount}
            currency={from}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(currency) => setFrom(currency)}
            currencyOptions={options}
          />

          <button className="p-1 text-white bg-blue-700" onClick={swapHandler}>
            swap
          </button>

          <UserInput
            label="To"
            amount={convertedAmount}
            currency={to}
            onAmountChange={(amount) => setConvertedAmount(amount)}
            onCurrencyChange={(currency) => setTo(currency)}
            currencyOptions={options}
            amountDisabled={true}
          />

          <button
            className="text-white bg-blue-700 p-1 m-1 w-full"
            type="submit"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
