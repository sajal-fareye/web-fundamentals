import React, {PureComponent} from "react";
// import AddButton from "./Components/AddButton";
import UserInput from "./Components/UserInput"
import PrintList from "./Components/PrintList";
// import Counter from "./Components/Counter";

class App1 extends PureComponent{

    // constructor(){
    //     super();
    //     this.state={
    //         // counter: 0
    //         userInput:"",
    //         list:[]
    //     }
    // }

    constructor(){
        super();
        this.state={
            user:[{username:""}]
        }
    }

    handleUser=(value)=>{
        console.log(value);
        this.setState({
            user:[...this.state.user, value]
        });
    }



    // incrementCounter = () =>{
    //     let newCounter = this.state.counter+1;
    //     this.setState({counter: newCounter});
    // }


    // AddUser=()=>{
    //     let value = this.state.userInput;
    //     const list1 = this.state.list;
    //     list1.push(value);
    //     console.log(list1)
    //     this.setState({
    //             userInput:"",
    //             list:list1,
    //     });
    // }

    render(){
        return <div>

            {/* <AddButton incrementCounter={this.incrementCounter}/> */}
            {/* <Counter counter = {this.state.counter}/> */}

            <UserInput handleUser = {this.handleUser}/>
            <PrintList user = {this.state.user}/> 
            
        </div>
    }
}

export default App1;