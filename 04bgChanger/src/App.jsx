import Button from "./Components/Button";
import "./App.css";
import { useState } from "react";

function App() {
  const colors = ["Red", "Blue", "Green"];

  const [bgColor, setBgColor] = useState("black");

  const clickHandler = (newBGC) => {
    setBgColor(newBGC);
  };

  return (
    <div
      className="flex flex-row justify-center items-end pb-20 w-screen h-screen"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-row justify-center w-fit h-fit bg-white rounded-full p-2">
        {colors.map((color) => {
          return (
            <Button
              key={Math.random()}
              btnColor={color}
              clickFun={clickHandler}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
