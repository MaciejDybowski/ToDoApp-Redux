import React, { forwardRef } from 'react'
import './Task.css';
import { Checkbox } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {useDispatch} from 'react-redux';
import {deleteTaskRedux, updateTaskRedux} from '../../actions';

const Task = forwardRef(({data}, ref) => {

        const dispatch = useDispatch();

        const time = data.date;
        if (!data.checked) {
            return (
                <div ref={ref} className='task'>
                    <Checkbox className='checkbox' checked={data.checked} onClick={() => dispatch(updateTaskRedux(data.id))} />
                    <p className='text'>{data.value}</p>
                    <p className='time'>{time.getDate()}.{time.getMonth()+1}.{time.getFullYear()}, {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</p>
                    <CloseIcon className='close-icon' onClick={() => dispatch(deleteTaskRedux(data.id))} />
                </div>
            )
        } else {
            return (
                <div ref={ref} className='task'>
                    <Checkbox className='checkbox' checked={data.checked} onClick={() => dispatch(updateTaskRedux(data.id))} />
                    <p className='text done'>{data.value}</p>
                    <p className='time done'>{time.getDate()}.{time.getMonth()+1}.{time.getFullYear()}, {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</p>
                    <CloseIcon className='close-icon' onClick={() => dispatch(deleteTaskRedux(data.id))} />
                </div>
            )
        }
    }
)
export default Task
