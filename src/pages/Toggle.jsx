// Import dependencies
import { useState } from "react";

// Define Toggle component
const Toggle = () => {
  // Define state to track visibility
  const [isVisible, setIsVisible] = useState(false);

  // Handle button click to toggle visibility
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {/* Title */}
      <h2 className="text-2xl font-bold">Toggle</h2>

      {/* Toggle button */}
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        {isVisible ? "Hide message" : "Show message"}
      </button>

      {/* Conditional message */}
      {isVisible && <p className="text-xl">This is a secret message</p>}
    </div>
  );
};

export default Toggle;
