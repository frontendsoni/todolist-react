
const TrackRecord = () => {

  return (
    <div className="track_record">
      <div className="date_track main_heading">
        <span className="day">Wednesday, 20 </span> 
        <span className="month">March, 2024 </span>
      </div>
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
    </div>
  )
}

export default TrackRecord;