import { Row, Col, Checkbox, Button, Input } from 'antd'
import React, { Component } from 'react'
import AdminManager from './AdminManager'
import axios from 'axios';

export default class Profile extends Component {

    state = {
        profile: ''
    }


    componentDidMount() {
        // if (this.props.history)
        //     this.props.history.push('adminManager')


        if (this.props.history) {
            var myloginname = sessionStorage.getItem('loginname');
            console.log('in Profile,this=', this, ',myloginname', myloginname);
            var loginname = "";

            var queryloginname = this.props.history.location.queryloginname;
            var action = this.props.history.location.action;

            //console.log('action:', action);
            if (queryloginname == null) {
                console.log('queryloginname is null');
                loginname = myloginname;
            }
            else {
                console.log(queryloginname);
                loginname = queryloginname;
            }
            ///

            if (action == null) {
                axios.post('http://localhost:3001/api1/getAccountByLoginName', { loginname: loginname }).then((res) => {
                    if (res.data.code === '1') {
                        console.log("axios in profile is", res.data)
                        this.setState({ profile: res.data.data });
                    } else {
                        console.log('res.data.code!=1', res.data);
                    }

                    //this.setState({ tableData, course, currentMenu: course[0] });
                    //this.handleCourseClick(course[0])
                });
            }



        }



    };



    handleSubmit = (e) => {

        console.log("in handle submit");

        //console.log(this.fullname);
        console.log('state', this.state);


    };
    changefacebook = (e) => {
        var myprofile = this.state.profile;
        myprofile.facebook = e.target.value;
        this.setState({ profile: myprofile });
    };
    changeinstagram = (e) => {
        var myprofile = this.state.profile;
        myprofile.instagram = e.target.value;
        this.setState({ profile: myprofile });
    };
    changetwitter = (e) => {
        var myprofile = this.state.profile;
        myprofile.twitter = e.target.value;
        this.setState({ profile: myprofile });
    };
    changefullname = (e) => {
        var myprofile = this.state.profile;
        myprofile.fullname = e.target.value;
        this.setState({ profile: myprofile });
    };
    changeAddress = (e) => {
        var myprofile = this.state.profile;
        myprofile.Address = e.target.value;
        this.setState({ profile: myprofile });
    };
    changeemail = (e) => {
        var myprofile = this.state.profile;
        myprofile.email = e.target.value;
        this.setState({ profile: myprofile });
    };
    changephone = (e) => {
        var myprofile = this.state.profile;
        myprofile.phone = e.target.value;
        this.setState({ profile: myprofile });
    };
    changeaddress2 = (e) => {
        var myprofile = this.state.profile;
        myprofile.address2 = e.target.value;
        this.setState({ profile: myprofile });
    };
    changepostal = (e) => {
        var myprofile = this.state.profile;
        myprofile.postal = e.target.value;
        this.setState({ profile: myprofile });
    };
    changealternatephone = (e) => {
        var myprofile = this.state.profile;
        myprofile.alternatephone = e.target.value;
        this.setState({ profile: myprofile });
    };


    render() {
        return (
            <AdminManager>

                <Row span={24}>
                    <Col><h1>User Profile</h1> </Col>
                </Row>

                <Row span={24}>
                    <Col span={4}>
                        <div>
                            <h1>My Profile</h1>

                            <h4>Only .jpg .png .jpeg allowed</h4>

                            <h2>Facebook(optional)</h2>
                            <Input value={this.state.profile.facebook} onChange={this.changefacebook}></Input>
                            <h2>Instagram(optional)</h2>
                            <Input value={this.state.profile.instagram} onChange={this.changeinstagram}></Input>
                            <h2>Twitter(optional)</h2>
                            <Input value={this.state.profile.twitter} onChange={this.changetwitter}></Input>

                        </div>


                    </Col>

                    <Col span={10} offset={1}>
                        <h2>User Information</h2>
                        <Col span={10}>
                            <h2>First Name:</h2>
                            <Input value={this.state.profile.fullname} onChange={this.changefullname}></Input>
                            <h2>Address 1:</h2>
                            <Input value={this.state.profile.Address} onChange={this.changeAddress}></Input>
                            <h2>Email:</h2>
                            <Input value={this.state.profile.email} onChange={this.changeemail}></Input>
                            <h2>Phone Number:</h2>
                            <Input value={this.state.profile.phone} onChange={this.changephone}></Input>

                        </Col>

                        <Col span={10}>
                            <h2>Last Name:</h2>
                            <Input></Input>
                            <h2>Address 2:</h2>
                            <Input value={this.state.profile.address2} onChange={this.changeaddress2}></Input>
                            <h2>Postal Code:</h2>
                            <Input value={this.state.profile.postal} onChange={this.changepostal}></Input>
                            <h2>Alternate Phone Number:</h2>
                            <Input value={this.state.profile.alternatephone} onChange={this.changealternatephone}></Input>

                        </Col>

                        <Row>
                            <Col>
                                <hr></hr>
                                <h2>Security</h2>
                                User Name:
                                <Input></Input>
                                Password:
                                <Input></Input>
                                Repeat Password:
                                <Input></Input>
                                <Checkbox> Eanble Two-Factor Authentication</Checkbox>
                                <br></br>
                                <Button type="primary" size="large" onClick={this.handleSubmit}>Update Profile</Button>

                            </Col>

                        </Row>

                    </Col>



                </Row>


            </AdminManager>
        )
    }
}
