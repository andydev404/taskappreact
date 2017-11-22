import React, { Component } from 'react';
import Header from './components/header/Header';
import TasksList from './components/Tasks/TasksList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TasksList />
      </div>
    );
  }
}

export default App;
