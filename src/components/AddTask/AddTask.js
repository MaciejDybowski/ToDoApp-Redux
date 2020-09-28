import React, { useState } from 'react'
import './AddTask.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


let idTask = 8;

function AddTask({ tasks, addTask }) {
    const [inputValue, setInputValue] = useState("");

    const handleInput = (e) => {
        setInputValue(e);
    }

    const handleButton = () => {
        if (inputValue === "") {
            alert("Podaj treść zadania");
        } else {
            let obj = {
                id: idTask,
                checked: false,
                value: inputValue,
                date: new Date(),
            }
            addTask([...tasks, obj])
            setInputValue("");
            idTask++;
        }
    }

    return (
        <div className='addTask'>
            <TextField value={inputValue} onChange={(e) => handleInput(e.currentTarget.value)} id="standard-basic" label="Yours task" />
            <Button onClick={handleButton} variant="contained">Add task</Button>
        </div>
    )
}

export default AddTask
