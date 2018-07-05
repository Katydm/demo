import React from 'react';
import {List,InputItem,WingBlank,WhiteSpace,Button}from'antd-mobile'
class Login extends React.Component{
    constructor(props){
        super(props);
    }
    register(){
        console.log(this.props);
        this.props.history.push('/register')
    }
    render(){
        return(
            <div>
                <p>login</p>
                <List>
                    <InputItem>用户名：</InputItem>
                    <InputItem>密码：</InputItem>
                </List>
                <WhiteSpace/>
                <WingBlank>
                    <Button type='primary'>登录</Button>
                    <WhiteSpace/>
                    <Button onClick={(e)=>{this.register(e)}} type='primary'>注册</Button>
                </WingBlank>
            </div>
        )
    }
}
export  default Login;