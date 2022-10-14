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
            username:""
        }
    }

    handleuser=()=>{
        this.props.handleuser({
            username: this.state.username
        });
        this.setState({username:""});
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

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" onClick={()=>this.props.handleuser}>
                Submit
            </Button>
        </Form.Item>
        </Form>
        )
    }
}