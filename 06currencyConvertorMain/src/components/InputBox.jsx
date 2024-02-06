/* eslint-disable react/prop-types */

import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  // taking default value is always a good practice
  currencyOptions = [],
  selectedCurrency = "usd",
  // production grade optimization : checking if user has disabled input fields or not
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {

  // Note: never use useId() hook for loop to create unique key id
  const amountID = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountID} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountID}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          // check is the input field is dislabeled or not
          disabled={amountDisabled}
          value={amount}
          min={0}
          /* if onAmountChange() didn't existed or passed as a props property
            our app would have crashed so checked, 
            this is a simple checker method using &&

          onChange={(e) => onAmountChange(e.target.value)}
          */
          /* used Number() to convert our input value to number data type 
            because sometimes js takes it as a string
          */
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          disabled={currencyDisabled}
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
