import React, { useEffect } from 'react';
import { useState } from 'react';
import './AddUser.css';
import axios from 'axios';

function AddUser() {

    function handleForm(e){
        e.preventDefault();
        postDatatoServer(user);
    }

    const [user,setUser] = useState({});

    function postDatatoServer(data){
        axios.post('/users',data)
        .then((response)=>{
            console.log(response);
        },(error)=>{
            console.log(error);
        })
    }

    return (
        <div className='Add'>
            <div className='userAdd'>
                <form onSubmit={handleForm}>

                    <h5> User FirstName </h5>
                    <input type="text" onChange={(e)=>{setUser({...user,firstname:e.target.value})}} value={user.firstname}/>

                    <h5> User LastName </h5>
                    <input type="text" onChange={(e)=>{setUser({...user,lastname:e.target.value})}} value={user.lastname}/>

                    <h5> email</h5>
                    <input type="text" onChange={(e)=>{setUser({...user,email:e.target.value})}} value={user.email}/>

                    <h5> Password</h5>
                    <input type="text" onChange={(e)=>{setUser({...user,password:e.target.value})}} value={user.password}/>

                    <button type='submit reset' className='userAdd_Button'>Add</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser