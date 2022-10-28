import React, { useState,useEffect } from 'react';
import User from './User';
import axios from "axios";

function Allusers() {


    const getAllUsersFromServer=()=>{
        axios.get('http://localhost:8082/users')
        .then((response)=>{
            setUsers(response.data);
        },(error)=>{
            console.log(error);
        });
    };

    useEffect(()=>{
        getAllUsersFromServer();
    },[]);

    const [users, setUsers] = useState([]);

    function modifyUsersByDelete(id){
        setUsers(users.filter((e)=>e.id!==id));
    };
    return (
        <div>
            <h1> All Users</h1>
            {
                users.length>0? users.map((item)=>(
                    <User
                    key={item.userid}
                    user={item}
                    modifyUsersByDelete={modifyUsersByDelete}
                    />
                )):"No Users right Now"
            }
        </div>
    )
}

export default Allusers