import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState({});
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(()=>{
    const temp = localStorage.getItem("todos");
    const myTodos=JSON.parse(temp);
    if(myTodos.length!==0){
      setTodos(myTodos);
    }
  },[])


  // useEffect(()=>{
  //   if(todos.length!==0){
  //     const temp = JSON.stringify(todos);
  //     localStorage.setItem("todos",temp);
  //   }
  // },[todos])



  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: editingText,
      text: editingText,
    }
    // if(newTodo.text.length!==0){
    // setTodos([...todos].concat(newTodo));
    // }
    let value = todos;
    value[editingText]=newTodo;
    setTodos(value)
    setTodo("");
    setEditingText("")
  }

  function deleteTodo(id) {
    console.log(id);
    const updateTodos = todos;
    delete updateTodos[id];
    setTodos(updateTodos);
    setTodo("");
    setEditingText("")
  }

  function editTodo(id) {
    console.log(id);
    const updateTodos = todos;
    updateTodos[id].text=editingText;
    setTodos(updateTodos);
    setTodoEditing(null);
    setEditingText("");
  }

  return (
    <div className="App">
      <h1>Todo Application</h1>
      <div>
        <input type="text" onChange={(e) => setEditingText(e.target.value)} value={editingText} />
        <button type='submit' onClick={handleSubmit}>Add Todo</button>
      </div>
      <hr/>
      <div>
        {Object.entries(todos).map(([key,todo]) =>
          <div key={todo.id}>

            {todoEditing === todo.id ?
              (<input type="text" onChange={(e) => setEditingText(e.target.value)} value={editingText} />)
              : (<div>{todo.text}</div>)}

            <button type='button' onClick={() => deleteTodo(key)}>Delete</button>

            {todoEditing === todo.id ?
              (<button onClick={() => editTodo(key)}>Submit</button>)
              : (<button type='button' 
              onClick={() => {
                setTodoEditing(todo.id);
                setEditingText(todo.text);
                }}>Edit</button>)}

          </div>)}
      </div>
    </div>

  );
}

export default App;
