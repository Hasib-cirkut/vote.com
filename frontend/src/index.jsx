import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'

/*
  The below if statement is an onetime only.
  The first time user logs in, it will register a theme key
  in the localStorage.
*/

if (!localStorage['theme']) {
  localStorage.setItem('theme', 'dark')
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
