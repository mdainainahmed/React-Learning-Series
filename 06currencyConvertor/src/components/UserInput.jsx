import { useId } from "react";

/* eslint-disable react/prop-types */
const UserInput = ({
  label,
  amount,
  currency = "usd",
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  amountDisabled = false,
  currencyDisabled = false,
}) => {
  const amountInput = useId();

  return (
    <div className="flex flex-col justify-center bg-white m-1 p-2 rounded-lg font-thin">
      <div className="flex flex-row justify-between items-center text-xs">
        <label htmlFor={amountInput}>{label}</label>
        <label>Currency Type</label>
      </div>
      <div className="flex flex-row justify-center items-center bg-white">
        <input
          id={amountInput}
          type="number"
          placeholder="Amount"
          className="bg-white m-1"
          disabled={amountDisabled}
          defaultValue={amount}
          value={amount}
          min={0}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
        <select
          className="bg-gray-800 bg-opacity-10 rounded-md text-black text-xs shadow-lg p-1"
          disabled={currencyDisabled}
          defaultValue={currency}
          value={currency}
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
};

export default UserInput;
