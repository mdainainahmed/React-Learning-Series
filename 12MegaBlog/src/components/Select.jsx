/* eslint-disable react/prop-types */
import { forwardRef, useId } from "react";

const Select = forwardRef(function Select(
  { label, className = "", options = [], ...props },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && <label htmlFor={id} />}
      <select
        id={id}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        {...props}
        ref={ref}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;
