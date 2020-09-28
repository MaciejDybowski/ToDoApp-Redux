import React, { useEffect } from 'react';
import './ToDoApp.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Aos from 'aos'
import 'aos/dist/aos.css'


function ToDoApp() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div data-aos='fade-up'>
      <div className="ToDoApp">
        <h2 className='title'>ToDo List App</h2>
        <AddTask/>
        <Tasks></Tasks>
      </div>
    </div>
  );
}

export default ToDoApp;
