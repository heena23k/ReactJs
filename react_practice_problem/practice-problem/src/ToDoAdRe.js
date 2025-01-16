// implement a simple to do list application with add and remove functionalty

import React, { useState } from 'react';

const ToDoAdRe = () => {
  const [tasks, setTasks] = useState([]); // State to store the list of tasks
  const [input, setInput] = useState(''); // State to store the user input

  // Function to add a task
  const addTask = () => {
    if (input.trim()) { // Check if input is not empty
      setTasks([...tasks, input]); // Add the new task to the list
      setInput(''); // Clear the input field
    }
  };

  // Function to remove a task by its index
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index); // Exclude the task at the given index
    setTasks(updatedTasks); // Update the tasks state
  };

  return (
    <div>
      <h1>To-Do List</h1>
      
      {/* Input field and Add button */}
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)} // Update input state as the user types
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      {/* Display the list of tasks */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoAdRe;
