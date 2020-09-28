import React, { useState, useEffect } from 'react';
import './ToDoApp.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Aos from 'aos'
import 'aos/dist/aos.css'

const sampleTable = [
  {id: 1, checked: false, value: "Zrobić śniadanie", date: new Date()},
  {id: 2, checked: false, value: "Dodać funkcje", date: new Date()},
  {id: 3, checked: false, value: "Kupić etui", date: new Date()},
  {id: 4, checked: false, value: "Wyprowadzić psa", date: new Date()},
  {id: 5, checked: false, value: "Zarobić zakupy", date: new Date()},
  {id: 6, checked: false, value: "Przygotować prezent", date: new Date()},
  {id: 7, checked: false, value: "Urodziny Kasi", date: new Date()},
]

function ToDoApp() {
  const [tasks, setTasks] = useState(sampleTable);

  console.log(tasks);

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const deleteTask = (id) => {
    setTasks(tasks.filter(item => item.id !== id));
  }

  const updateTask = (id) => {
    let index = tasks.findIndex((task) => task.id === id);
    let newArray = [...tasks];
    newArray[index].checked = !newArray[index].checked;
    setTasks(newArray);
  }

  return (
    <div data-aos='fade-up'>
      <div className="ToDoApp">
        <h2 className='title'>ToDo List App</h2>
        <AddTask addTask={setTasks} tasks={tasks} />
        {/* {tasks.map((task) => <Task key={task.id} data={task} deleteTask={deleteTask} updateTask = {updateTask}/>)} */}
        <Tasks tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}></Tasks>
      </div>
    </div>
  );
}

export default ToDoApp;
