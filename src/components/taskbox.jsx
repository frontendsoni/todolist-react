
const TaskBox = ({task, completeTaskFunction}) => {


const handleTaskCompletion = (taskId) => {
  const completedTask = task.find(item => item.id === taskId);
  if (completedTask) {
    completeTaskFunction({ ...completedTask, completed: !completedTask.completed });
  }
}
  return (
    <div className="task_box" id="scrollable-div">
      <ul className="task_list">
        {task.map( (item, index) => {
          console.log(item) 
          const {id, text, completed, date} = item;
          return (<li key={index} id={index}>
                    <div className="todo_content">
                      <span className= {completed ? 'tick checkbox' : 'checkbox'} onClick={() => handleTaskCompletion(id)} ></span>
                      <p className={completed ? 'completed' : ''} >{text}</p>
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