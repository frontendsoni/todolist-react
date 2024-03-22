import { useState, useEffect } from "react";

const DateTrack = () => {

  const [currentDate, setCurrentDate] = useState({
    weekday:'',
    month:'',
    day:'',
    year:''
  });

  useEffect(()=>{
    const updateDate = () => {
      const newDate = new Date();
  
      const dayOption = {weekday:'long'};
      let weekDay = newDate.toLocaleDateString('en-us', dayOption);
  
      const monthOption = {month:'long'};
      let month = newDate.toLocaleDateString('en-us', monthOption);
  
      setCurrentDate({
        weekday:weekDay,
        month:month,
        day:newDate.getDate(),
        year:newDate.getFullYear()
      })
    }
  
  updateDate();
  },[])

  

  return (
    <div className="date_track main_heading">
        <span className="day">{currentDate.weekday}, {currentDate.day} </span> 
        <span className="month">{currentDate.month}, {currentDate.year} </span>
      </div>
  )
}

export default DateTrack;
