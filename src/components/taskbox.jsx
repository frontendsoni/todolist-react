import { useState } from "react";
const TaskBox = ({task}) => {



  return (
    <div className="task_box" id="scrollable-div">
      <ul className="task_list">
        {task.map( (item, index) => {
          const {text, completed, date} = task;
          return (<li key={index} id={index}>
                    <div className="todo_content">
                      <span className="checkbox {completed ? 'completed' : ''} "></span>
                      <p className={completed ? 'completed' : ''} >{item}</p>
                    </div>
                    <div className="update_content">
                      <span className="task_date">{date}</span>
                      <i className="fa-solid fa-trash-can del_task_btn"></i>
                      <i className="fa-solid fa-pencil edit_task_btn"></i>
                    </div>
            </li>)
        })}
      </ul>
    </div>
  )
};

export default TaskBox;