/* eslint-disable no-unused-vars */
import { useCallback, useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";
import InputBox from "./components/InputBox.jsx";
import BackgroundImage from "./assets/imgBg.jpg";
// import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  // extract all keys of our currencyInfo onject : we know Obkject{ key: value }
  // will return an array
  const options = Object.keys(currencyInfo);

  // Handle Swap Button
  const swapHandler = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  // Handling Convert Button
  const convert = () => {
    let conversionValue = currencyInfo[to];
    setConvertedAmount((amount * conversionValue).toFixed(4));
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={(newAmount) => setAmount(newAmount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                currencyOptions={options}
                selectedCurrency={from}
                amountDisabled={false}
                currencyDisabled={false}
                className={'text-black '}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swapHandler}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox 
                label="To"
                amount={convertedAmount}
                onAmountChange={(newAmount) => setConvertedAmount(newAmount)}
                onCurrencyChange={(currency) => setTo(currency)}
                currencyOptions={options}
                selectedCurrency={to}
                amountDisabled={true}
                currencyDisabled={false}
                className={'text-black'}/>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
