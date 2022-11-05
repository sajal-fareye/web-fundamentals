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
        axios.post('/todos',data)
        .then((response)=>{
            console.log(response);
            setTodo({});
        },(error)=>{
            console.log(error);
        })
    }

    return (
        <div className='Add'>
            <div className='todoAdd'>
                <form onSubmit={handleForm}>

                    {/* <h5>Todo Id</h5>
                    <input type="text" onChange={(e)=>{setTodo({...todo,todoid:e.target.value})}} value={todo.todoid}/> */}

                    <h5 className='todoHeading'> Todo Title </h5>
                    <input className='todoInput' type="text" onChange={(e)=>{setTodo({...todo,title:e.target.value})}} value={todo.title}/>

                    <h5 className='todoHeading'> Description</h5>
                    <input className='todoInput' type="textarea" onChange={(e)=>{setTodo({...todo,body:e.target.value})}} value={todo.value}/>

                    <button type='submit reset' className='todoAdd_Button'>Add</button>
                </form>
            </div>
        </div>
    )
}

export default AddTodo