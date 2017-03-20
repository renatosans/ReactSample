import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './views/todo.js';


// ponto de entrada da aplicação
var mountNode = document.getElementById('containerDiv');
ReactDOM.render(<TodoApp />, mountNode);
