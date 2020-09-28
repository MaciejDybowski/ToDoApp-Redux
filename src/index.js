import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoApp from './ToDoApp';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'; // dostarczyciel stora do App
import { createStore } from 'redux'; // do tworzenia stora
import toDoReducer from './reducers/ToDoReducer';

const store = createStore(
  toDoReducer, // pierwszy parametr to nasze reducery
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) // drugi parametr dla wtyczki dev do chroma

ReactDOM.render(
  <Provider store={store}>
    <ToDoApp />
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
