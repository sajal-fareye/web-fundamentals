import React,{useState}from 'react'
import "./Todo.css";
import axios from 'axios';
import {Link} from 'react-router-dom'
import { Button, Modal } from 'antd';
import './AddTodo.css'

function Todo({todo,modifyTodosByDelete}) {

  function deleteTodo(id){
    axios.delete(`${'/todos'}/${id}`)
    .then((response)=>{
      console.log("success deleted")
      modifyTodosByDelete(id)
    },(error)=>{
      console.log(error);
    })
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mytodo, setMytodo] = useState(todo);


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
    axios.put('/todos',mytodo)
    .then((response)=>{
        console.log("Success update");
        console.log(response);
    },(error)=>{
        console.log(error)
    })
}

  return (
    <div className="todoCard">
        
        <h2 className='todoCardTitle'>
            {todo.title}
        </h2>

        <p className='todoCardDescription'>
            {todo.body}
        </p>
       
        <Button className='todoCardUpdate' type="primary" onClick={showModal}>
        Edit
      </Button>

      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <div className='Add'>
            <div className='todoAdd'>
                <form>

                    <h5 className='todoHeading'> Todo Title </h5>
                    <input className='todoInput' type="text" defaultValue={mytodo.title}
                        onChange={(e) => { setMytodo({ ...mytodo, title: e.target.value }) }} value={mytodo.title} />

                    <h5 className='todoHeading'> Description</h5>
                    <input className='todoInput' type="textarea" defaultValue={mytodo.body}
                        onChange={(e) => { setMytodo({ ...mytodo, body: e.target.value }) }} value={mytodo.body} />

                </form>
            </div>
        </div>
      </Modal>
    
        <button className='todoCardDelete' onClick={()=>{
          deleteTodo(todo.todoid);
        }}>Delete</button>
  </div>
  )
}

export default Todo