import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Form,Input} from 'antd';


function App() {

  const [userName,setUserName] = useState("");
  const [email,setEmail] = useState("");
  const[mobile,setMobile] = useState("");
  const [users, setUsers] = useState([]);

  // const [todoEditing, setTodoEditing] = useState(null);
  // const [editingText, setEditingText] = useState("");

  // useEffect(()=>{
  //   const temp = localStorage.getItem("todos");
  //   const myTodos=JSON.parse(temp);
  //   if(myTodos.length!==0){
  //     setTodos(myTodos);
  //   }
  // },[])

  // useEffect(()=>{
  //   if(todos.length!==0){
  //     const temp = JSON.stringify(todos);
  //     localStorage.setItem("todos",temp);
  //   }
  // },[todos])


  function handleSubmit(e) {
    e.preventDefault();

    const newUser = {
      id: new Date().getTime(),
      userName:userName,
      email:email,
      mobile:mobile,
    }
    setUsers([...users].concat(newUser));
    setEmail("");
    setUserName("");
    setMobile("");
  }

  function deleteUser(id) {
    const updateUsers = [...users].filter((user) => user.id !== id);
    setUsers(updateUsers);
  }

  // function editTodo(id) {
  //   const updateTodos = [...todos].map((todo) => {
  //     if (todo.id === id && editingText.length>0) {
  //       todo.text = editingText;
  //     }
  //     return todo;
  //   })
  //   setTodos(updateTodos);
  //   setTodoEditing(null);
  //   setEditingText("");
  // }

  return (
    <div className="App">
      <form>
      <Form.Item
            label="Username">
            <Input type="text" name="userName" onChange={(e)=>{setUserName(e.target.value)}} value={userName}/>
        </Form.Item>
        <Form.Item
            label="Email">
            <Input type="text" name="email" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
        </Form.Item>
        <Form.Item
            label="mobile">
            <Input type="text" name="mobile" onChange={(e)=>{setMobile(e.target.value)}} value={mobile}/>
        </Form.Item>
         <button type='submit' onClick={handleSubmit}>Add User</button>
      </form>


       <div>
        {users.map((user) =>
          <div key={user.id}>

            {/* {todoEditing === todo.id ?
              (<input type="text" onChange={(e) => setEditingText(e.target.value)} value={editingText} />)
              : (<div>{todo.text}</div>)} */}

            <div>
             <ul>
              <li>{user.userName}</li>
                <li>{user.email}</li>
                <li>{user.mobile}</li>
             </ul> 
            </div>

             <button type='button' onClick={() => deleteUser(user.id)}>Delete</button>

            {/* {todoEditing === todo.id ?
              (<button onClick={() => editTodo(todo.id)}>Submit</button>)
              : (<button type='button' onClick={() => setTodoEditing(todo.id)}>Edit</button>)} */}

          </div>)}
      </div>
    </div>

  );
}

export default App;
