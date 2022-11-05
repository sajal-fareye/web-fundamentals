
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoHeader from './TodoComponents/TodoHeader';
import Header from './Header';
import Alltodos from './TodoComponents/Alltodos';
import AddTodo from './TodoComponents/AddTodo';
import UserHeader from './UserComponents/UserHeader';
import Allusers from './UserComponents/Allusers';
import AddUser from './UserComponents/AddUser';
import Login from './Login';

function App() {
  return (
    <Router>

      <div className='App'>
        <Routes>

          <Route path="/todo/add" element={<div><TodoHeader/> <AddTodo/></div>}/>

          <Route path="/todo"element={<div><TodoHeader/> <Alltodos/></div>}/>
           

          {/* <Route path="/updateTodo/:id" element={<div><TodoHeader/> <UpdateTodo/></div>}/> */}


          <Route path="/user/add" element={<div><UserHeader/> <AddUser/></div>}/>

          <Route path="/user" element={<div><UserHeader/> <Allusers/></div>}/>

          {/* <Route path="/updateUser/:id" element={<div><UserHeader/> <UpdateUser/></div>}/> */}


          <Route path="/login" element={<div><Header/><Login/></div>}/>




          <Route path="/" element={<div><Header/><h1>This is Home Page</h1></div>}/>

        </Routes>
      </div>

    </Router>
  );
}

export default App;
