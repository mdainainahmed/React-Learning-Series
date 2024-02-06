import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(5);

  function incClick() {
    console.log(counter);
    // counter < 15 ? setCounter(counter + 1) : setCounter(counter);

    /* 
      Concept of React Fibre: We know Fibre send update operations( usually using setState() method )
      in batches. */
    /* 
      Here Fibre will observe that the changes are being updated on same variable again & again
      so will send the update in batches and consider all operations are same, and equals them as 1 setCounter(counter + 1),
      updating the value of counter from 5 to 6, not 10
    */
    /*
      setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)
    */
    // result: counter = 5 to 6 ( not 10 )

    /* 
      setCounter() method accepts a callback function
      setCounter( (previousCounter) => (prevCounter+1) ) 
                          ^
                          | 
                current state of counter       
    */
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    //  result : counter = 5 to 10
  }
  function decClick() {
    counter > 0 ? setCounter(counter - 1) : setCounter(counter);
  }

  return (
    <>
      <h1>Hello Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={incClick}>Increase Value</button>
      <button onClick={decClick}>Decrease Value</button>
    </>
  );
}

export default App;
