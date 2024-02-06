import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    if (numAllow) str += "0123456789";
    if (charAllow) str += "~!@#$%^&*()_+{}:<>?-=[];,./";

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numAllow, charAllow]);

  const copyToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, numAllow, charAllow]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={password}
          placeholder="password"
          ref={passwordRef}
          readOnly
        />
        <button onClick={copyToClipboard}>Copy</button>
      </div>
      <div>
        <input
          type="range"
          min={3}
          max={16}
          defaultValue={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label>length: {length}</label>
        <input type="checkbox" onChange={() => setNumAllow((prev) => !prev)} />
        <label>Number</label>
        <input type="checkbox" onChange={() => setCharAllow((prev) => !prev)} />
        <label>Character</label>
      </div>
    </div>
  );
}

export default App;
