import React, { useState, useEffect } from "react";
import DateTrack from "./datetrack";
import TaskTrack from "./tasktrack";
import TaskBox from "./taskbox";
import InputBox from "./inputbox";

const AppBoard = ()  => {

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
   setTasks(updatedTasks);
   saveTodoList(updatedTasks);
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
      const newId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0;

      const newTask = {
        id: newId + 1,
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
    <main className="main_parent">
      <div className="tdl_wrap">
        <div className="track_record">
          <DateTrack /> 
          <TaskTrack
            task={tasks}
          />
        </div>
        <div className="task_record">
          <InputBox 
            inputValue = {inputValue}
            onInputChange = {setInputValue}
            handleAddTask = {handleAddTask}
          />
          <TaskBox 
            task={tasks}
            completeTaskFunction={taskCompleted}
            deleteTaskFunction = {deleteTask}
            editedTaskFunction = {ediTask} 
          /> 
        </div>
      </div>
    </main>
  )
}; 

export default AppBoard;