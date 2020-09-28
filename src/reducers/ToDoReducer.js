const initState = [
    {id: 1, checked: false, value: "Zrobić śniadanie", date: new Date()},
    {id: 2, checked: false, value: "Dodać funkcje", date: new Date()},
    {id: 3, checked: false, value: "Kupić etui", date: new Date()},
    {id: 4, checked: false, value: "Wyprowadzić psa", date: new Date()},
    {id: 5, checked: false, value: "Zarobić zakupy", date: new Date()},
    {id: 6, checked: false, value: "Przygotować prezent", date: new Date()},
    {id: 7, checked: false, value: "Urodziny Kasi", date: new Date()},
  ]

let newArray;
const ToDoReducer = (state = initState , action ) => {
    switch(action.type){
        case "AddTask":
            newArray = [...state];
            newArray.push(action.obj);
            state = newArray;
            return state;

        case "DeleteTask":
            newArray = state.filter(item => item.id !== action.id);
            state = newArray;
            return state;
        default:
            return state;

        case "UpdateTask":
            let index = state.findIndex((task) => task.id === action.id)
            newArray = [...state];
            newArray[index].checked = !newArray[index].checked;
            state = newArray
            return state;
    }
}

export default ToDoReducer;