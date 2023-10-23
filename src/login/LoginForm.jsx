import React, { Component } from 'react'
import { Button, Input, message } from "antd";
import axios from "axios";
import { GoogleOutlined, TwitterOutlined } from "@ant-design/icons";
import './LoginForm.css'

export default class LoginForm extends Component {
    checkLogin = () => {
        // axios.get('http://localhost:3001/api1/getAllAccount').then(
        //     response => { console.log('success', response.data); },
        //     error => { console.log('fail', 'error') })


        axios
            .post("http://localhost:3001/api1/userLogin", {
                loginname: this.loginname.input.value,
                password: this.password.input.value,
            })
            .then(
                (response) => {
                    if (response.data.code == "1") {
                    console.log("success", response.data);
                    console.log(this)
                    console.log(this.loginname.input.value);
                    console.log(this.password.input.value);
                        this.props.history.push({ pathname: '/adminManager', loginname: this.loginname.input.value });
                    }
                    else {
                        message.info(response.data.message)
                        this.props.history.push('/adminManager');

                    }
                },
                (error) => {
                    //this.props.history.push('/adminManager')
                    // console.log(this)
                    // console.log(this.loginname.input.value);
                    // console.log(this.password.input.value);
                    // console.log("User certificated fail", "error");
                    //message.error(error)
                    console.log(error.code);
                    message.error(error.code)
                }
            );


    };
    render() {

        return (
            <div>
                <div className="LoginForm">
                    <h1 style={{ textAlign: 'center' }}>Login</h1>
                    <h2>Login Name</h2>
                    <Input ref={(c) => (this.loginname = c)} placeholder="example@abc.com" size='large' />

                    <hr></hr>

                    <h2>Password</h2>
                    <Input.Password style={{ color: 'white' }} ref={(c) => (this.password = c)} placeholder="input password" size='large' />

                    <hr></hr>
                    <br></br>
                    <div className="loginButton">
                        <Button type="primary" size="big" onClick={this.checkLogin}>
                            Login
                        </Button>
                    </div>
                    <br></br>
                    <div className="or">
                        <h2>Or</h2>
                    </div>
                    <hr></hr>
                    <div className="icon">
                        <GoogleOutlined style={{ fontSize: "96px" }} />
                        <TwitterOutlined style={{ fontSize: "96px" }} />
                    </div>
                    <br></br>
                    <div style={{ textAlign: 'center' }}><h2> <a href='' style={{ textAlign: 'center' }}>Create And Account</a></h2></div>
                </div>
            </div>
        )
    }
}
