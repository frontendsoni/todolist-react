
const TaskTrack = () => {
 
  return(
    <div className="task_track">
          <div className="t-task">
            <div className="t-task-num">1</div>
            <p>Total Task</p>
          </div>
          <div className="p-task">
            <div className="p-task-num">1</div>
            <p>Pending Task</p>
          </div>
          <div className="c-task">
            <div className="c-task-num">0</div>
            <p>Complete Task</p>
          </div>
        </div>
  )
}

export default TaskTrack;