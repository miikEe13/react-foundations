import { useState } from "react";

const CharCounter = () => {
  const [post, setPost] = useState("");
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    const { value } = e.target;
    setPost(value);
    setCount(value.length);
  };

  return (
    <div className="p-6 max-w-md mx-auto flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center">Character Counter</h2>
      <input
        type="text"
        placeholder="Type something..."
        name="post"
        className={`border rounded px-3 py-2 ${
          count > 280 ? "border-red-800 bg-red-300" : "border-gray-300"
        }`}
        value={post || ""}
        // value, onChange van aquí
        onChange={handleChange}
      />
      <p
        className={`text-sm ${count > 280 ? "text-red-600 " : "text-gray-600"}`}
      >
        Characters: {count}
      </p>
    </div>
  );
};

export default CharCounter;
