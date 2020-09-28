import React from 'react'
import Task from '../Task';
import './Tasks.css';
import FlipMove from 'react-flip-move'
import {useSelector} from 'react-redux'


function Tasks() {
    const tasks = useSelector(state => state);
    return (
        <div className='tasks'>
            <FlipMove>
                {tasks.map((task) => <Task key={task.id} data={task}/>)}
            </FlipMove>

        </div>
    )
}

export default Tasks
