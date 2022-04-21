import { useEffect, useRef, useState } from "react";

import "./App.css";
import { Forms } from "./components/Forms";

function App() {
  const [counter, setCounter] = useState(0);
  const counteref = useRef(null);
  useEffect(() => {
    startInterval();
  }, []);
  const startInterval = () => {
    counteref.current = setInterval(() => {
      setCounter((t) => {
        return t + 1;
      });
    }, 400);
  };
  return (
    <div className="App">
      <h3>Counter:{counter}</h3>
      <button
        onClick={() => {
          startInterval();
        }}
      >
        start
      </button>

      <button
        onClick={() => {
          clearInterval(counteref.current);
        }}
      >
        stop
      </button>

      <button
        onClick={() => {
          clearInterval(counteref.current);
          setCounter(0);
        }}
      >
        Reset
      </button>
      <Forms />
    </div>
  );
}

export default App;
