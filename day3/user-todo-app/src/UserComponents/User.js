import React from 'react'
import "./User.css";
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Space, Table, Tag } from 'antd';

function User({ user, modifyUsersByDelete }) {

  function deleteUser(id) {
    axios.delete(`${'http://localhost:8082/users'}/${id}`)
      .then((response) => {
        console.log("success deleted")
        modifyUsersByDelete(id)
      }, (error) => {
        console.log(error);
      })
  };


  return (
    <div className='userContainer'>
      <div className="user">


        <div className='userName'>
          <p className='userfirstName'>
            {user.firstname}
          </p>
          <p className='userlastName'>
            {user.lastname}
          </p>
        </div>
        <p className='userEmail'>
          {user.email}
        </p>

        <div className='UserButton'>
          <Link to={"updateUser/" + user.userid}>
            <button className='userCardUpdate'>Edit</button>
          </Link>
          <button className='userCardDelete' onClick={() => {
            deleteUser(user.userid);
          }}>Delete</button>

        </div>
      </div>
    </div>
  )
}

export default User