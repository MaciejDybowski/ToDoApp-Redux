let idTask = 7;

export const addTaskRedux = (text) => {
    idTask++;
    return {
        type: "AddTask",
        obj: {
            id: idTask,
            checked: false,
            value: text,
            date: new Date(),
        }
    }
}

export const deleteTaskRedux = (id) => {
    return {
        type : 'DeleteTask',
        id,
    }
}

export const updateTaskRedux = (id) => {
    return {
        type : 'UpdateTask',
        id,
    }
}