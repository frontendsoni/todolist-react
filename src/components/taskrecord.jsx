import React, { useState } from "react";
import TaskBox from "./taskbox";

const TaskRecord = () => {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  
  const handleAddTask = () => {
    if (inputValue.trim() !== '') {

      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1; 
      const year = currentDate.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;

      const newTask = {
        text:inputValue,
        completed:false,
        date:formattedDate
      }

      const updatedTask = [...tasks, newTask]
      setTasks(updatedTask);

      localStorage.setItem('tasks', JSON.stringify('updatedTasks'));
      setInputValue('');
    }
  };

  useEffect(() => {

    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);

  }, []);

  return (
    <div className="task_record">
      <div className="input_box">

        <input
          type="text"
          className="add_task"
          placeholder="Add task..."
          value={inputValue}
          onChange={(e) =>setInputValue(e.target.value)}
        />

        <div className="add_btn" onClick={handleAddTask}>
          <i className="fas fa-plus" ></i>
        </div>

      </div>
      <TaskBox task = {tasks} />
    </div>
  );
};

export default TaskRecord;
