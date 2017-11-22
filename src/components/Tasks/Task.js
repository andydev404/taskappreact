import React from 'react';

const Task = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title text-center">{props.name}</h4>
        {props.showInput &&
          <div> 
            <input type="text" className="form-control" onChange={props.handleTask} value={props.name}/>
            <br/>
            <button type="button" onClick={props.removeTask} className="btn btn-outline-danger">Remove Task</button>
          </div>
        }
      </div>
    </div>
  );
}


export default Task;