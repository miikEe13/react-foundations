// Import dependencies
import { useState } from "react";

// Define List component
const List = () => {
  // Define a list of fruits
  const [data, setData] = useState(['Apple', 'Banana', 'Orange', 'Mango']);

  return (
    <div className="flex flex-col items-center justify-center p-4 gap-4">
      {/* Title */}
      <h1 className="text-2xl font-bold">Dynamic List Renderer</h1>

      {/* Render the list of fruits */}
      <ul className="list-disc pl-6">
        {data.map((fruit, index) => (
          <li key={index} className="text-lg">
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
