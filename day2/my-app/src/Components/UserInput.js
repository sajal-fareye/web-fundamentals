import React,{PureComponent} from "react";
import { PlusOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
    Select,
    Cascader,
    InputNumber,
    TreeSelect,
  } from 'antd';



const { TextArea } = Input;

export default class UserInput extends PureComponent{

    constructor(){
        super();
        this.state={
            username:"",
            email:""
        }
    }

    handleUser=()=>{
        this.props.handleUser({
            username: this.state.username,
            email: this.state.email
        });
        this.setState({username:"",email:""});
    }

    render(){
        return(
        <Form>
        <Form.Item
            label="Username"
            name="username"
        rules={[{ message: 'Please input your username!' }]}>
            <Input onChange={(e) => {this.setState({username: e.target.value})}}/>
        </Form.Item>

        <Form.Item
            label="Email"
            name="Email"
        rules={[{ message: 'Please input your Email!' }]}>
            <Input onChange={(e) => {this.setState({email: e.target.value})}}/>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" onClick={()=>this.handleUser()}>
                Submit
            </Button>
        </Form.Item>
        </Form>
        )
    }
}