import React from 'react'
import Todo from './Todo'

function TodoList({ todos, handleToggleCompleted }) {
  return (
    <div className="todos-container">
       {
         todos.map(todo => {
           return(<Todo todo={todo} handleToggleCompleted={handleToggleCompleted}/>)
         })
       }
      </div>
  )
}

export default TodoList
