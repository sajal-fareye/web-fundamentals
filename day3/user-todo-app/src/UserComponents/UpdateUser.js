// import React from 'react';
// import { withRouter } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import "./AddUser.css";

// function UpdateUser(props) {

//     const [myuser, setMyuser] = useState({});

//     useEffect(() => {
//         axios.get(`${'/users'}/${props.match.params.id}`)
//             .then((response) => {

//                 setMyuser(response.data);
//                 console.log("Data:", response.data);
//                 console.log("User:", myuser);
//             }, (error) => {
//                 console.log(error);
//             })
//     }, [])

//     function handleForm(e) {
//         e.preventDefault();
//         putDatatoServer();
//     }

//     function putDatatoServer() {
//         axios.put('/users', myuser)
//             .then((response) => {
//                 console.log("Success update");
//                 console.log(response);
//             }, (error) => {
//                 console.log(error)
//             })
//     }
//     return (
//         <div className='Add'>
//             <div className='userAdd'>
//                 <form onSubmit={handleForm}>

//                     <h5> User FirstName </h5>
//                     <input type="text" defaultValue={myuser.firstname}
//                         onChange={(e) => { setMyuser({ ...myuser, firstname: e.target.value }) }} value={myuser.firstname} />

//                     <h5> User LastName </h5>
//                     <input type="text" defaultValue={myuser.lastname}
//                         onChange={(e) => { setMyuser({ ...myuser, lastname: e.target.value }) }} value={myuser.lastname} />


//                     <h5> Email</h5>
//                     <input type="textarea" defaultValue={myuser.email}
//                         onChange={(e) => { setMyuser({ ...myuser, email: e.target.value }) }} value={myuser.email} />

//                     <button type='submit' className='userAdd_Button'>Sumbit</button>
//                 </form>
//             </div>
//         </div>

//     )
// }

// export default withRouter(UpdateUser)