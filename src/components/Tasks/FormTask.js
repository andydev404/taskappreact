import React from 'react';

const FormTask = (props) => {
  const style = {
    input: {
      maxWidth: '300px',
      margin: '0 auto',
      display: 'inline-block'
    },
    button: {
      cursor: 'pointer'
    }
  }
  return (
    <div>
      <h3>Add a New Task</h3>
      <form onSubmit={props.handleForm}>
        <input type="text" className="form-control mr-4 mt-2 mb-4" name="task" placeholder="Task name" style={style.input} />
        <button className="btn btn-outline-dark" style={style.button}>Add Task</button>
      </form>
    </div>
  );
}

export default FormTask;