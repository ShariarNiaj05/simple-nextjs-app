"use client"
import { useState } from "react";

const HomePage = () => {
  const [counter, setCounter] = useState(0)
  console.log(counter);
  return (
    <div>
      <h2 className="text-4xl font-bold" >Home and {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </div>
  );
};

export default HomePage;