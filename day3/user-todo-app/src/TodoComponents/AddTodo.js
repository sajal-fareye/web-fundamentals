import React, { useEffect } from 'react';
import { useState } from 'react';
import './AddTodo.css';
import axios from 'axios';

function AddTodo() {

    function handleForm(e){
        e.preventDefault();
        postDatatoServer(todo);
    }

    const [todo,setTodo] = useState({});

    function postDatatoServer(data){
        axios.post('http://localhost:8082/todos',data)
        .then((response)=>{
            console.log(response);
        },(error)=>{
            console.log(error);
        })
    }

    return (
        <div className='Add'>
            <div className='todoAdd'>
                <form onSubmit={handleForm}>

                    <h5>Todo Id</h5>
                    <input type="text" onChange={(e)=>{setTodo({...todo,todoid:e.target.value})}}/>

                    <h5> Todo Title </h5>
                    <input type="text" onChange={(e)=>{setTodo({...todo,title:e.target.value})}} value={todo.title}/>

                    <h5> Description</h5>
                    <input type="textarea" onChange={(e)=>{setTodo({...todo,body:e.target.value})}} value={todo.value}/>

                    <button type='submit' className='todoAdd_Button'>Add</button>
                </form>
            </div>
        </div>
    )
}

export default AddTodo