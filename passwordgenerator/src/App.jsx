import { useCallback, useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(5);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklmn";

    if (numAllowed) str += "1234567890";
    if (charAllowed) str += "@!#%";

    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPass = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  function generate() {
    passwordGenerator();
  }

  const passRef = useRef(null);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className="flex flex-col">
        <div>
          <input type="text" value={password} readOnly placeholder="password" />
          <button onClick={copyPass}>copy</button>
        </div>
        <div>
          <input
            id="length"
            type="range"
            min={4}
            max={10}
            value={length}
            ref={passRef}
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">Length {length}</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={numAllowed}
            id="num"
            onChange={() => {
              setnumAllowed((prev) => !prev);
              console.log(numAllowed);
            }}
          />
          <label htmlFor="num">Number</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={charAllowed}
            id="char"
            onChange={() => {
              setcharAllowed((prev) => !prev);
              console.log(charAllowed);
            }}
          />
          <label htmlFor="char">Character</label>
        </div>
      </div>
      <button onClick={generate}>Generate</button>
    </>
  );
}

export default App;
