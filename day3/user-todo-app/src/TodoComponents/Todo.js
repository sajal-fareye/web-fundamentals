import React from 'react'
import "./Todo.css";
import axios from 'axios';
import {Link} from 'react-router-dom'

function Todo({todo,modifyTodosByDelete}) {

  function deleteTodo(id){
    axios.delete(`${'http://localhost:8082/todos'}/${id}`)
    .then((response)=>{
      console.log("success deleted")
      modifyTodosByDelete(id)
    },(error)=>{
      console.log(error);
    })
  };


  return (
    <div className="todoCard">
        
        <h2 className='todoCardTitle'>
            {todo.title}
        </h2>

        <p className='todoCardDescription'>
            {todo.body}
        </p>
        <Link to={"updateTodo/"+todo.todoid}>
        <button className='todoCardUpdate'>Edit</button>
        </Link>
        <button className='todoCardDelete' onClick={()=>{
          deleteTodo(todo.todoid);
        }}>Delete</button>
  </div>
  )
}

export default Todo