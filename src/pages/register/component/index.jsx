import React from 'react';
import {List,InputItem,WingBlank,WhiteSpace,Button}from'antd-mobile'
class Register extends React.Component{
    constructor(props){
        super(props)
        //this.register=this.register.bind(this);
    }
    register(){
        console.log(this.props);
        this.props.history.push('/');
    }
    render(){


        return(
            <div>
                <p>注册</p>
                <List>
                    <InputItem>用户名：</InputItem>
                    <InputItem>密码：</InputItem>
                    <InputItem>确认密码：</InputItem>
                </List>
                <WhiteSpace/>
                <WingBlank>
                    <Button type='primary' onClick={(e)=>this.register(e)}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}
export  default Register;