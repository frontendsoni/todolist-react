import React from "react";
const InputBox = ({inputValue, onInputChange, handleAddTask}) => {

  return (
    <div className="input_box">
            <input
              type="text"
              className="add_task"
              placeholder="Add task..."
              value={inputValue}
              onChange={(e) => onInputChange(e.target.value)}
            />
            <div className="add_btn" onClick={handleAddTask}>
              <i className="fas fa-plus"></i>
            </div>
          </div>
  )
}

export default InputBox;