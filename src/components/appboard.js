import TaskRecord from "./taskrecord";
import TrackRecord from "./trackrecord";

const AppBoard = ()  => {

  return (
    <main className="main_parent">
      <div className="tdl_wrap">
      <TrackRecord /> 
      <TaskRecord />
      </div>
    </main>
  )
}; 

export default AppBoard;