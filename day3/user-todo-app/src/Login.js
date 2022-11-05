import React, { useEffect } from 'react';
import { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { Navigate } from "react-router-dom";

function Login() {

    const [user1,setUser1] = useState(false);

    function handleForm(e) {
        e.preventDefault();
        // console.log("is it working or not");
        var bodyFormData = new FormData();
        // console.log("User:",user);
        // console.log("Body:",bodyFormData);
        bodyFormData.append('username', user.username);
        bodyFormData.append('password', user.password);
        var myHeader = new Headers();
        myHeader.append("Content-Type", "multipart/form-data");

        postDatatoServer(bodyFormData, myHeader);
    }

    const [user, setUser] = useState({});

    function postDatatoServer(bodyFormData, myHeader) {

        console.log("Data:", bodyFormData);
        console.log("Header:", myHeader);

        // console.log("Body:",bodyFormData);
        axios.post('/login', bodyFormData, myHeader)
            .then((response) => {
                //handle success
                console.log("Is it working!!!")
                console.log(response);
                if(response.status===200){
                    setUser1(true);
                }
            })
            .catch((error) => {
                // console.log("Is is working or not??")
                //handle error
                console.log(error);
            });
        // axios.post('/login',data)
        // .then((response)=>{
        //     console.log(response);
        //     console.log("USer=  :",data);

        // },(error)=>{
        //     console.log("Error: ",data);
        //     console.log(error);
        // })
    }

    return (
        <div className='Add'>
            <div className='userAdd'>

                

                <form onSubmit={handleForm}>

                    <h5> UserName </h5>
                    <input type="text" onChange={(e) => { setUser({ ...user, username: e.target.value }) }} value={user.username} />

                    <h5> Password</h5>
                    <input type="password" onChange={(e) => { setUser({ ...user, password: e.target.value }) }} value={user.password} />

                    <button type='submit' className='userAdd_Button'>Sign In</button>
                </form>

                {/* {error1 && <p>{error.message}</p>} */}
                {user1 && (
                    <Navigate to="/user" replace={true} />
                )}
            </div>
        </div>
    )
}

export default Login;