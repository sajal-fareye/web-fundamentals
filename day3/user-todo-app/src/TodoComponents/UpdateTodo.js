import React from 'react';
import { withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./AddTodo.css";

function UpdateTodo(props) {

    const [mytodo, setMytodo] = useState({});

    useEffect(() => {
        axios.get(`${'http://localhost:8082/todos'}/${props.match.params.id}`)
            .then((response) => {

                setMytodo(response.data);
                console.log("Data:", response.data);
                console.log("Todo:", mytodo);
            }, (error) => {
                console.log(error);
            })
    }, [])

    function handleForm(e){
        e.preventDefault();
        putDatatoServer();
    }

    function putDatatoServer(){
        axios.put('http://localhost:8082/todos',mytodo)
        .then((response)=>{
            console.log("Success update");
            console.log(response);
        },(error)=>{
            console.log(error)
        })
    }
    return (
        <div className='Add'>
            <div className='todoAdd'>
                <form  onSubmit={handleForm}>

                <h3 className='TodoID'>
                  ID=  {mytodo.todoid}
                    </h3>

                    <h5> Todo Title </h5>
                    <input type="text" defaultValue={mytodo.title}
                        onChange={(e) => { setMytodo({ ...mytodo, title: e.target.value }) }} value={mytodo.title} />

                    <h5> Description</h5>
                    <input type="textarea" defaultValue={mytodo.body}
                        onChange={(e) => { setMytodo({ ...mytodo, body: e.target.value }) }} value={mytodo.body} />

                    <button type='submit' className='todoAdd_Button'>Sumbit</button>
                </form>
            </div>
        </div>

    )
}

export default withRouter(UpdateTodo)