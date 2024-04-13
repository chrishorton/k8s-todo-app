import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const DATA = [
    { id: 'todo-0', name: 'Eat', completed: false},
    { id: 'todo-1', name: 'Sleep', completed: false },
    { id: 'todo-2', name: 'Repeat', completed: false }
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks={DATA} subject="Chris" greeting="Good Morning" />
  </React.StrictMode>,
)
