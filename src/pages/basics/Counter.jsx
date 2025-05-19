// Import dependencies
import { useState } from "react";

// Define Counter component
const Counter = () => {
  // Define state to keep track of the counter value
  const [count, setCount] = useState(0);

  // Define function to increase the counter
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="p-4 flex flex-col items-center gap-4">
      {/* Title */}
      <h2 className="text-2xl font-bold">Counter</h2>

      {/* Display counter value */}
      <p className="text-4xl">{count}</p>

      {/* Button to increase the counter */}
      <button
        onClick={handleIncrement}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        +1
      </button>
      <button
        onClick={handleDecrement}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400 transition"
      >
        -1
      </button>

      <button
        onClick={handleReset}
        className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-300 transition"
      >
        reset
      </button>
    </div>
  );
};

export default Counter;
