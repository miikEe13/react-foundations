// Import dependencies
import { useState } from "react";

// Define MirrorInput component
const MirrorInput = () => {
  // Define state to store the input value
  const [name, setName] = useState('');

  // Handle changes in the input
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="p-4 flex flex-col items-center gap-4">
      {/* Title */}
      <h2 className="text-2xl font-bold">On Change Mirror</h2>

      {/* Input field */}
      <input
        type="text"
        placeholder="Type your name..."
        className="bg-gray-100 border-2 border-black p-2 rounded"
        onChange={handleChange}
      />

      {/* Display the mirrored input */}
      <p className="text-xl">{name}</p>
    </div>
  );
};

export default MirrorInput;
