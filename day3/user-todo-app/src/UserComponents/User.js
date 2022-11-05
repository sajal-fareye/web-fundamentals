import React,{useState} from 'react'
import "./User.css";
import axios from 'axios';
import { Button, Modal } from 'antd';

function User({ user, modifyUsersByDelete }) {

  function deleteUser(id) {
    axios.delete(`${'/users'}/${id}`)
      .then((response) => {
        console.log("success deleted")
        modifyUsersByDelete(id)
      }, (error) => {
        console.log(error);
      })
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [myuser, setMyuser] = useState(user);


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
      putDatatoServer();
    setIsModalOpen(false);

  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function putDatatoServer(){
    axios.put('/users',myuser)
    .then((response)=>{
        console.log("Success update");
        console.log(response);
    },(error)=>{
        console.log(error)
    })
}


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
        <Button className='userCardUpdate' type="primary" onClick={showModal}>
        Edit
      </Button>

      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <div className='Add'>
            <div className='userAdd'>
                <form>

                    <h5> User FirstName </h5>
                    <input type="text" defaultValue={myuser.firstname}
                        onChange={(e) => { setMyuser({ ...myuser, firstname: e.target.value }) }} value={myuser.firstname} />

                    <h5> User LastName </h5>
                    <input type="text" defaultValue={myuser.lastname}
                        onChange={(e) => { setMyuser({ ...myuser, lastname: e.target.value }) }} value={myuser.lastname} />


                    <h5> Email</h5>
                    <input type="textarea" defaultValue={myuser.email}
                        onChange={(e) => { setMyuser({ ...myuser, email: e.target.value }) }} value={myuser.email} />

                    {/* <button type='submit' className='userAdd_Button'>Sumbit</button> */}
                </form>
            </div>
        </div>
      </Modal>

          <button className='userCardDelete' onClick={() => {
            deleteUser(user.userid);
          }}>Delete</button>

        </div>
      </div>
    </div>
  )
}

export default User