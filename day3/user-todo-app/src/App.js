
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoHeader from './TodoComponents/TodoHeader';
import Header from './Header';
import Alltodos from './TodoComponents/Alltodos';
import AddTodo from './TodoComponents/AddTodo';
import UpdateTodo from './TodoComponents/UpdateTodo'
import UserHeader from './UserComponents/UserHeader';
import Allusers from './UserComponents/Allusers';
import AddUser from './UserComponents/AddUser';
import UpdateUser from './UserComponents/UpdateUser'

function App() {
  return (
    <Router>

      <div className='App'>
        <Switch>

          <Route path="/todo/add">
            <TodoHeader />
            <AddTodo />
          </Route>

          <Route path="/todo">
            <TodoHeader />
            <Alltodos />
          </Route>

          <Route path="/updateTodo/:id">
            <TodoHeader/>
            <UpdateTodo/>
          </Route>



          <Route path="/user/add">
            <UserHeader />
            <AddUser />
          </Route>

          <Route path="/user">
            <UserHeader />
            <Allusers />
          </Route>

          <Route path="/updateUser/:id">
            <UserHeader/>
            <UpdateUser/>
          </Route>





          <Route path="/">
            <Header />
            <h1>This is Home Page</h1>
          </Route>

        </Switch>
      </div>

    </Router>
  );
}

export default App;
