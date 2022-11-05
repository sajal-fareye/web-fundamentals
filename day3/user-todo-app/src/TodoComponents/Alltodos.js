import React, { useState,useEffect } from 'react';
import Todo from './Todo';
import axios from "axios";

function Alltodos() {


    const getAllTodosFromServer=()=>{
        axios.get('/todos')
        .then((response)=>{
            setTodos(response.data);
        },(error)=>{
            console.log(error);
        });
    };

    useEffect(()=>{
        getAllTodosFromServer();
    },[]);

    const [todos, setTodos] = useState([]);

    function modifyTodosByDelete(id){
        setTodos(todos.filter((e)=>e.id!==id));
    };
    return (
        <div>
            <h1> All Todos</h1>
            {
                todos.length>0? todos.map((item)=>(
                    <Todo
                    key={item.todoid}
                    todo={item}
                    modifyTodosByDelete={modifyTodosByDelete}
                    />
                )):"No Todos right Now"
            }
        </div>
    )
}

export default Alltodos