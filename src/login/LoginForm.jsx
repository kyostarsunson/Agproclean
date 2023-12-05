import React, {Component} from 'react'
import {Button, Form, Input, message} from "antd";


import axios from "axios";
import {GoogleOutlined, TwitterOutlined} from "@ant-design/icons";
import './LoginForm.css'

class LoginForm extends Component {

    state = {isCreateAction: false};

    handlechange = () => {
        console.log("in handlechafgn, isCreateAction=", this.state)
        this.setState({isCreateAction: !this.state.isCreateAction})
    }
    checkLogin = () => {
        // axios.get('http://localhost:3001/api1/getAllAccount').then(
        //     response => { console.log('success', response.data); },
        //     error => { console.log('fail', 'error') })
        console.log("in check     Login account, this.props=", this.props);

        console.log("in check login")
        this.props.form.validateFields((error, values) => {
            console.log(values);
            if (error.loginname === undefined && error.password === undefined) {
                const loginData = {
                    loginname: values.loginname,
                    password: values.password
                }
                axios
                    .post("http://70.75.134.37:3001/api1/userLogin", loginData)
                    .then((res) => {
                        // alert(res.data.message);
                        if (res.data.code === '1') {
                            message.success(res.data.message)

                            sessionStorage.setItem('loginname', loginData.loginname);
                            sessionStorage.setItem('accountid', res.data.data.accountid);
                            sessionStorage.setItem('roleid', res.data.data.roleid);
                            console.log(loginData)
                            this.props.history.push({pathname: '/adminManager', loginname: loginData.loginname});
                        } else {
                            message.error(res.data.message)
                        }
                    });

            } else {
                console.log("input error")
            }
        })
    };

    createAccount = () => {
        console.log("in createAccount")


        //console.log("in createAccount, this.loginname.input.value", this.loginname.input.value)

        this.props.form.validateFields((error, values) => {
            console.log(values);
            console.log(error);

            if (!error) {
                console.log(values)


                if (values.password !== values.reenterpassword) {
                    console.log(1)
                    alert("The new password that you entered do not match!")
                } else {
                    const submitData = {
                        loginname: values.loginname,
                        password: values.password,
                        email: values.email,
                        roleid: '3'
                    }
                    axios
                        .post("http://70.75.134.37:3001/api1/userCreate", submitData)
                        .then((res) => {
                            // alert(res.data.message);
                            if (res.data.code === '1') {
                                message.success(res.data.message) //无法使用
                                //alert("two passwords are not consistence")
                                this.setState({isCreateAction: false})
                            } else {
                                message.error(res.data.message)
                            }
                        });
                }
                // console.log(submitData)
                //
                // console.log('in AddNews,data=', submitData);
                // axios
                //     .post("http://70.75.134.37:3001/api1/userCreate", submitData)
                //     .then((res) => {
                //         if (res.data.code === '1') {
                //             message.success(res.data.message)
                //         } else
                //             message.error(res.data.message)
                //     });
            }
        })
    }

    render() {
        const {isCreateAction} = this.state;
        const {getFieldDecorator} = this.props.form


        const patterns = {
            //     "loginname": "^[a-zA-Z_][0-9a-zA-Z_]{0,}$",
            "password": "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
            "loginname": "^[a-zA-Z_][0-9a-zA-Z_]{0,}$",
            // "password": "^[a-zA-Z_][0-9a-zA-Z_]{0,}$"
        }

        const patternMsg = {
            "loginname": "Please start with alphabetic character, _ or number ahead and include number, Character and underline.",
            "password": "Password should include no less than 7 character with one alphabetic and one number "
        }

        const pattern = (name, para = 'g') => {
            return {
                pattern: new RegExp(patterns[name], para),
                message: patternMsg[name]
            }
        }

        console.log("in render,isCreateAction=", isCreateAction)
        return (
            <div>
                <div className="LoginForm">
                    <div style={{display: (isCreateAction ? "none" : "")}}>
                        <h1 style={{textAlign: 'center', color: 'white'}}>Login</h1>

                        <Form style={{color: "black"}} onSubmit={this.checkLogin}>

                            <Form.Item label="loginname" name="loginname2">
                                {getFieldDecorator('loginname', {
                                    rules: [{
                                        required: true,
                                        message: 'Please input the loginname',
                                    }, pattern('loginname')],
                                })(
                                    <Input size="large" placeholder="Please input your username!"/>
                                    // <Input ref={(c) => (this.loginname = c)} placeholder="example@abc.com"
                                    //        size='large'/>
                                )}

                            </Form.Item>


                            <Form.Item label="password" name="password2">
                                {getFieldDecorator('password', {
                                    rules: [{
                                        required: true,
                                        message: 'Please input the password',
                                    }, pattern('password')],
                                })(
                                    <Input.Password size="large" placeholder="Please input password"/>
                                    //<Input ref={(c) => (this.loginname = c)} placeholder="example@abc.com" size='large'/>
                                )}
                                {/*<Input.Password style={{color: 'white'}} ref={(c) => (this.password = c)}*/}
                                {/*                placeholder="input password" size='large'/>*/}
                            </Form.Item>

                            <div style={{height: 20}}></div>
                            <div className="loginButton">
                                <Button type="primary" size="big" onClick={this.checkLogin}>
                                    <div style={{color: "black"}}> Login</div>
                                </Button>
                            </div>
                            <div style={{height: 20}}></div>
                            <hr/>
                            <div style={{height: 20}}></div>
                            <div className="or">
                                <h2>Or</h2>
                            </div>
                            <div style={{height: 20}}></div>

                            <div className="icon">
                                <a href="https://www.google.com"> <GoogleOutlined style={{fontSize: "50px"}}/> </a>
                                <div style={{width: 50}}></div>

                                <a href="https://www.twitter.com"> <TwitterOutlined style={{fontSize: "50px"}}/></a>
                            </div>

                        </Form>
                        <div style={{height: 20}}></div>

                        <div style={{textAlign: 'center'}}>
                            <Button type="link" block onClick={this.handlechange}>
                                Create An Account
                            </Button>

                        </div>
                    </div>


                    <div style={{display: (!isCreateAction ? "none" : "")}}>
                        <Form onSubmit={this.createAccount}>
                            <h1 style={{textAlign: 'center'}}>Login</h1>

                            <Form.Item label="loginname" name="loginname">
                                {getFieldDecorator('loginname', {
                                    rules: [{
                                        required: true,
                                        message: 'Please input the loginname',
                                    }, pattern('loginname')],
                                })(
                                    <Input size="large" placeholder="Please input your username!"/>
                                    // <Input ref={(c) => (this.loginname = c)} placeholder="example@abc.com"
                                    //        size='large'/>
                                )}

                            </Form.Item>


                            <Form.Item label="password" name="password">
                                {getFieldDecorator('password', {
                                    rules: [{
                                        required: true,
                                        message: 'Please input the password',
                                    }, pattern('password')],
                                })(
                                    <Input.Password size="large" placeholder="Please input password"/>
                                    //<Input ref={(c) => (this.loginname = c)} placeholder="example@abc.com" size='large'/>
                                )}
                                {/*<Input.Password style={{color: 'white'}} ref={(c) => (this.password = c)}*/}
                                {/*                placeholder="input password" size='large'/>*/}
                            </Form.Item>


                            <Form.Item label="Confirm password" name="reenterpassword">
                                {getFieldDecorator('reenterpassword', {
                                    rules: [{
                                        required: true,
                                        message: 'Please Confirm your password!'
                                    }, pattern('password')],
                                })(
                                    <Input.Password size="large" placeholder="Please Confirm your password!"/>
                                    // <Input ref={(c) => (this.loginname = c)} placeholder="example@abc.com"  size='large'/>
                                )}
                                {/*<Input.Password style={{color: 'white'}} ref={(c) => (this.password = c)}*/}
                                {/*                placeholder="input password" size='large'/>*/}
                            </Form.Item>


                            <Form.Item label="email" name="email">
                                {getFieldDecorator('email', {
                                    rules: [{
                                        type: 'email',
                                        required: true,
                                        message: 'Your email is not a valid email!',
                                    }],
                                })(
                                    <Input size="large" placeholder="Please input email"/>
                                    // <Input ref={(c) => (this.loginname = c)} placeholder="example@abc.com"  size='large'/>
                                )}
                                {/*<Input.Password style={{color: 'white'}} ref={(c) => (this.password = c)}*/}
                                {/*                placeholder="input password" size='large'/>*/}
                            </Form.Item>

                            {/*<Input ref={(c) => (this.email = c)} placeholder="input email" size='large'/>*/}
                            <div style={{height: 10}}></div>
                            <div className="loginButton">
                                <Button type="primary" size="big" onClick={this.createAccount}>
                                    Create
                                </Button>

                            </div>
                            <div style={{height: 10}}></div>

                            <div style={{textAlign: 'center'}}>

                                <Button type="link" block onClick={this.handlechange}>
                                    I already have an account
                                </Button>
                            </div>
                        </Form>
                    </div>


                </div>
            </div>
        )
    }
}

export default Form.create()(LoginForm);