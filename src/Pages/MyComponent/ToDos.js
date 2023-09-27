import React from 'react'
import ToDoItems from './ToDoItems'

const ToDos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>TODO LIST</h3>
      {
        props.Todos.lengths===0? "No Todos to display":
        props.Todos.map((todo)=>{
          return <ToDoItems todo={todo} onDelete={()=>{props.onDelete(todo)}}/>
        }
        )}  
      

        

    </div>
  )
}

export default ToDos
