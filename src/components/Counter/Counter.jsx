"use client";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  console.log(counter);
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </div>
  );
};

export default Counter;
