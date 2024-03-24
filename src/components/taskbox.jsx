import { useState } from "react";

const TaskBox = ({task, completeTaskFunction, deleteTaskFunction, editedTaskFunction}) => {
const [isEditing, setIsEditing] = useState(false);
const [editTaskText, setEditTaskText] = useState('');
const [editTaskId, setEditTaskId] = useState(null);

const handleTaskCompletion = (taskId) => {
  const completedTask = task.find(item => item.id === taskId);
  if (completedTask) {
    completeTaskFunction({ ...completedTask, completed: !completedTask.completed });
  }
}

const handleTaskEdit = (taskId) => {
  const editedTask = task.find(item => item.id === taskId);
  if (editedTask) {
    //editedTaskFunction({ ...completedTask, completed: !completedTask.completed });
     console.log(editedTask);
    // console.log({...completedTask, completed: !completedTask.completed});
  }
}
  return (
    <div className="task_box" id="scrollable-div">
      <ul className="task_list">
        {task.map( (item) => { 
          const {id, text, completed, date} = item;
          return (<li key={id} id={id}>
                    <div className="todo_content">
                      <span className= {completed ? 'tick checkbox' : 'checkbox'} onClick = {(e) => handleTaskCompletion(id)}></span>
                      {id === editTaskId && isEditing ? (
                        <input type="text"
                               value={editTaskText}
                               className="edit_task_text"
                               onChange={(e) => setEditTaskText(e.target.value)}
                         />
                      ) : (<p className={completed ? 'completed' : ''} >{text}</p>)}
                    </div>
                    <div className="update_content">
                      <span className="task_date">{date}</span>
                      <i className="fa-solid fa-trash-can del_task_btn" onClick = {(e) => deleteTaskFunction(id)}></i>
                      {id === editTaskId && isEditing ? (
                      <i className="fa-regular fa-square-check edit_task_btn" onClick = {() => {setIsEditing(false)}}></i>) : (
                      <i className="fa-solid fa-pencil edit_task_btn" 
                         onClick = {() => {
                          setIsEditing(true);
                          setEditTaskId(id);
                          handleTaskEdit(id);
                        }}></i>
                      )}
                    </div>
            </li>)
        })}
      </ul>
    </div>
  )
};

export default TaskBox;