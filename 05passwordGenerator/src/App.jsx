/* eslint-disable no-unused-vars */
// import "./App.css";
import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);
  // console.log(passwordRef.current);

  const passwordGenerator = useCallback(() => {

    // console.log("Executed useCallback");

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_+-/{}:<>?[]";

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      let ch = str.charAt(index);
      pass += ch;
    }

    setPassword(pass);
  }, [
    length,
    numberAllowed,
    charAllowed,
    setPassword /* using setPassword not password because if we use password it will render everytime hence loop */,
  ]);

  const copyPasswordToClipboard = useCallback(() => {
    // higlight our reference
    passwordRef.current?.select();

    // highlight range
    // passwordRef.current?.setSelectionRange(0, 4);

    // copy to clipboard in react we have window object
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    // console.log("Executed useEffect");
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <div className="flex flex-col bg-gray-800 p-2 rounded-lg font-serif">
      <div className=" text-center p-1">Password Generator</div>
      <div className="flex flex-row justify-center items-center p-1">
        <input
          type="text"
          className="rounded-lg rounded-e-none w-full h-100 pl-1 bg-white text-black"
          value={password}
          placeholder="password"
          ref={passwordRef}
          readOnly
        />
        <button
          className="rounded-lg rounded-s-none w-fit p-0 bg-blue-700 pl-1 pr-1"
          onClick={copyPasswordToClipboard}
        >
          copy
        </button>
      </div>
      <div className="flex flex-row justify-center items-center text-red-700 font-bold">
        <input
          type="range"
          id="length"
          className="m-1"
          min={3}
          max={16}
          value={length}
          onChange={(event) => {
            setLength(event.target.value);
          }}
        />
        <label htmlFor="length" className="m-1">
          length: {length}
        </label>
        <input
          type="checkbox"
          name="number"
          id="number"
          defaultChecked={numberAllowed}
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
        />
        <label htmlFor="number" className="m-1">
          Number
        </label>
        <input
          type="checkbox"
          name="character"
          id="character"
          defaultChecked={charAllowed}
          onChange={() => {
            setCharAllowed((prev) => !prev);
          }}
        />
        <label htmlFor="character" className="m-1">
          Character
        </label>
      </div>
    </div>
  );
}

export default App;
