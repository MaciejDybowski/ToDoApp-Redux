import React from 'react'
import Task from '../Task';
import './Tasks.css';
import FlipMove from 'react-flip-move'


function Tasks({ tasks, deleteTask, updateTask }) {
  
    return (
        <div className='tasks'>
            <FlipMove>
                {tasks.map((task) => <Task key={task.id} data={task} deleteTask={deleteTask} updateTask={updateTask} />)}
            </FlipMove>

        </div>
    )
}

export default Tasks
