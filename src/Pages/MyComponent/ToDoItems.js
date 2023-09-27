import React from 'react'

const ToDoItems = ({todo,onDelete}) => {
  return (
    <div>
      <h4> {todo.title}</h4>
      <p>{todo.desc}</p>
      <p>{todo.priority}</p>
      <button className="btn btn-danger" onClick={onDelete}>DELETE</button>
    </div>
  )
}

export default ToDoItems


