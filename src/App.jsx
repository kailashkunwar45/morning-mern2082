
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  };

  console.log("re-render");

  return (
    <div >
      <h1>
        {count} - {count % 2 === 0 ? "even" : "odd"}
      </h1>
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}



