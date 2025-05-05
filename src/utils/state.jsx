import { useState } from "react";

const State = () => {
  const [tasks, setTasks] = useState([{ id: 1, name: "Learn" }]);

  // Add
  setTasks([...tasks, "Learn React"]);

  //remove
  setTasks(tasks.filter(task => task.id !== 1));

  //update
  setTasks(tasks.map(task => task.id === 1 ? { ...task, name: 'Master React' } : task));
};
