import React, { useState } from 'react'
import './AddTask.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { addTaskRedux } from '../../actions';


function AddTask() {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");

    const handleInput = (e) => {
        setInputValue(e);
    }

    const handleButton = () => {
        if (inputValue === "") {
            alert("Podaj treść zadania");
        } else {
            setInputValue("");
            dispatch(addTaskRedux(inputValue))
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
