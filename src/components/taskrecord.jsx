import React, { useState, useEffect } from "react";
import TaskBox from "./taskbox";

const TaskRecord = () => {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  const saveTodoList = (todoList) => {
    localStorage.setItem('tasks', JSON.stringify(todoList));
  }

  const taskCompleted =(completedTaskList) => {

   const updatedTasks = tasks.map(item => item.id === completedTaskList.id ? completedTaskList : item);
   setTasks(updatedTasks);
   saveTodoList(updatedTasks);
   }

  const ediTask =(editedTaskList) => {
   const updatedTasks = tasks.map(item => item.id === editedTaskList.id ? editedTaskList : item);
   console.log(updatedTasks);
  //  setTasks(updatedTasks);
  //  saveTodoList(updatedTasks);
   }

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter( item => taskId !== item.id);
    setTasks(updatedTasks);
   saveTodoList(updatedTasks);
  } 

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;

      const newTask = {
        id: tasks.length + 1,
        text: inputValue,
        completed: false,
        date: formattedDate
      };

      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);

      saveTodoList(updatedTasks);
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
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="add_btn" onClick={handleAddTask}>
          <i className="fas fa-plus"></i>
        </div>
      </div>
      <TaskBox task={tasks}
               completeTaskFunction={taskCompleted}
               deleteTaskFunction = {deleteTask}
               editedTaskFunction = {ediTask} 
      />
    </div>
  );
};

export default TaskRecord;
