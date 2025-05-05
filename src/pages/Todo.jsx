import { useState } from "react";

const Todo = () => {
  // State for input value
  // State for task list
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  // Function to handle input change
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  // Function to add task
  const handleClick = () => {
    if (task.trim() === "") return; // Avoid adding empty tasks
    console.log(task);
    setTodoList([...todoList, task]);
    setTask(""); // Clear input
  };

  const handleRemove = (task) => {
    setTodoList(todoList.filter((item) => item !== task));
  };

  // Function to delete task by index or id
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-4">
      <h2>To do List</h2>
      <div className="flex">
        {/* Input and button */}
        <input
          type="text"
          placeholder="Add your task"
          className="bg-gray-100 border-2 border-black p-2 rounded"
          onChange={handleChange}
          value={task || ""}
        />
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>
      <div>
        {/* Task list with delete buttons */}
        <ul className="">
          {todoList.map((task, index) => (
            <li key={index} className="flex justify-between">
              {task}{" "}
              <button
                onClick={() => handleRemove(task)}
                className="bg-red-700 text-whitepx-4 py-2 rounded hover:bg-red-400 transition"
              >
                remove task
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
