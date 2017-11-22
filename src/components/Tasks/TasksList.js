import React, { Component } from 'react';
import Mode from './Mode';
import Task from './Task';
import FormTask from './FormTask';

class TasksList extends Component {

  state = {
    showInput: false,
    tasks: []
  }

  constructor() {
    super();
    this.handleRemoveTask = this.handleRemoveTask.bind(this);
  }

  componentDidMount() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.setState({
        tasks: JSON.parse(tasks)
      })
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.tasks.length !== this.state.tasks.length) {
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }
  }

  handleMode(e){
    const mode = e.target.innerText.toLowerCase();
    const buttons = document.querySelectorAll('.btn-group button');

    if (mode === 'editor') {
      this.setState({showInput: true});
      e.target.classList.add('active');
      buttons[0].classList.remove('active');
    } else {
      this.setState({showInput: false});
      e.target.classList.add('active');
      buttons[1].classList.remove('active');
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }
  }

  handleTaskName(e, index) {
    const task = {
      ...this.state.tasks[index]
    }
    task.name = e.target.value;

    const tasks = [...this.state.tasks];
    tasks[index] = task;

    this.setState({tasks});
    
  }

  handleForm(e){
    e.preventDefault();
    const newTask = [{name: e.target.elements.task.value.trim()}]
    this.setState({
      tasks: this.state.tasks.concat(newTask)
    });
    e.target.elements.task.value = "";
  }

  handleRemoveTask(index) {
    const tasks = [...this.state.tasks];
    tasks.splice(index,1);
    this.setState({tasks});
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  render() {
    return (
      <div className="container" style={{textAlign:'center'}}>
        <FormTask handleForm={this.handleForm.bind(this)} />
        <Mode onclick={(e) => this.handleMode(e)} />
        <br/><br/><br/>
        <div className="card-columns">
          {this.state.tasks && this.state.tasks.map((task, index) => {
            return <Task key={index} name={task.name} handleTask={e => this.handleTaskName(e,index)} removeTask={() => this.handleRemoveTask(index)} showInput={this.state.showInput} />
          })}
        </div>
      </div>
    );
  }
}

export default TasksList;