
const TaskTrack = ({task}) => {
 
  return(
    <div className="task_track">
          <div className="t-task">
            <div className="t-task-num">{task.length}</div>
            <p>Total Task</p>
          </div>
          <div className="p-task">
            <div className="p-task-num">{task.filter(item => !item.completed).length}</div>
            <p>Pending Task</p>
          </div>
          <div className="c-task">
            <div className="c-task-num">{task.filter(item => item.completed).length}</div>
            <p>Complete Task</p>
          </div>
        </div>
  )
}

export default TaskTrack;