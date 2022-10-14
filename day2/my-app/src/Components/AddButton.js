import { Button } from "antd";
import React, {PureComponent} from "react";



class AddButton extends PureComponent{
    render(){
        // return <Button danger onClick={()=> this.props.incrementCounter()}>AddButton</Button>
        return <Button danger onClick={()=> this.props.AddUser()}>AddButton</Button>
    }
}

export default AddButton;