import {Row, Col, Checkbox, Button, Input, message, Switch, Select, Avatar} from 'antd'
import React, {Component} from 'react'
import AdminManager from './AdminManager'
import axios from 'axios';

export default class Profile extends Component {


    state = {tableData: {}, addTableItem: {}};

    componentDidMount() {
        // if (this.props.history)
        //     this.props.history.push('adminManager')
        this.getTableData();

    };

    getTableData = () => {
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
            } else {
                console.log(queryloginname);
                loginname = queryloginname;
            }
            ///

            if (action == null) {
                axios.post('http://70.75.134.37:3001/api1/getAccountByLoginName', {loginname: loginname}).then((res) => {
                    //console.log("res.data", res.data);
                    if (res.data.code === '1') {
                        console.log("axios in profile is", res.data)
                        this.setState({tableData: res.data.data});
                    } else {
                        console.log('res.data.code!=1', res.data);
                    }

                    //this.setState({ tableData, course, currentMenu: course[0] });
                    //this.handleCourseClick(course[0])
                });
            } else {
                console.log(action);
            }
        }
    }

    handleSubmit = (e) => {

        var action = this.props.history.location.action;

        const {tableData} = this.state;
        let ts = this;

        console.log('in handlesubmit,tabledata=', tableData);

        axios.post('http://70.75.134.37:3001/api1/saveAccount', {...tableData}).then((res) => {
            console.log("res.data", res.data);
            if (res.data.code === '1') {
                message.success(res.data.message);
                console.log(res.data.message);
                // this.requestData({collegeno});
                this.setState({addTableItem: {}})
                ts.getTableData();
            } else {
                console.log('fail to save account');
                message.error(res.data.message);
            }
        });

    };
    changeloginname = (e) => {
        const {tableData} = this.state;

        const newTableItem = {...tableData, loginname: e.target.value};
        this.setState({tableData: newTableItem});
    };
    changepassword = (e) => {
        const {tableData} = this.state;

        const newTableItem = {...tableData, password: e.target.value};
        this.setState({tableData: newTableItem});
    };
    changefacebook = (e) => {
        const {tableData} = this.state;

        const newTableItem = {...tableData, facebook: e.target.value};
        this.setState({tableData: newTableItem});
    };
    changeinstagram = (e) => {
        const {tableData} = this.state;

        const newTableItem = {...tableData, instagram: e.target.value};
        this.setState({tableData: newTableItem});
    };
    changetwitter = (e) => {
        const {tableData} = this.state;

        const newTableItem = {...tableData, twitter: e.target.value};
        this.setState({tableData: newTableItem});
    };

    changeactive = (e) => {
        const {tableData} = this.state;

        const newTableItem = {...tableData, active: e};
        this.setState({tableData: newTableItem});
    };
    changesubscribed = (e) => {
        const {tableData} = this.state;

        const newTableItem = {...tableData, subscribed: e};
        this.setState({tableData: newTableItem});
    };
    changefullname = (e) => {
        const {tableData} = this.state;

        const newTableItem = {...tableData, fullname: e.target.value};
        this.setState({tableData: newTableItem});
    };
    changeaddress1 = (e) => {
        const {tableData} = this.state;

        const newTableItem = {...tableData, address1: e.target.value};
        this.setState({tableData: newTableItem});
    };
    changeemail = (e) => {
        const {tableData} = this.state;

        const newTableItem = {...tableData, email: e.target.value};
        this.setState({tableData: newTableItem});
    };
    changephone = (e) => {
        const {tableData} = this.state;

        const newTableItem = {...tableData, phone: e.target.value};
        this.setState({tableData: newTableItem});
    };
    changerole = (e) => {
        const {tableData} = this.state;
        console.log('in change role,target.value', e)
        const newTableItem = {...tableData, roleid: e};
        this.setState({tableData: newTableItem});
    };
    changeaddress2 = (e) => {
        const {tableData} = this.state;

        const newTableItem = {...tableData, address2: e.target.value};
        this.setState({tableData: newTableItem});
    };
    changepostal = (e) => {
        const {tableData} = this.state;

        const newTableItem = {...tableData, postal: e.target.value};
        this.setState({tableData: newTableItem});
    };
    changealternatephone = (e) => {
        const {tableData} = this.state;

        const newTableItem = {...tableData, alternatephone: e.target.value};
        this.setState({tableData: newTableItem});
    };

    handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    render() {
        const {tableData, addClassTaskVisible, teacherVisible, addTableItem} = this.state;
        var roleid = sessionStorage.getItem('roleid');
        const {Option} = Select;

        console.log(tableData);
        return (

            <AdminManager>

                <Row span={24}>
                    <Col><h1>User Profile</h1></Col>
                </Row>

                <Row span={24}>
                    <Col span={4}>
                        <div>
                            <h1>My Profile</h1>

                            <Avatar size={200} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"/>
                            <h4>Only .jpg .png .jpeg allowed</h4>

                            <h2>Facebook(optional)</h2>
                            <Input value={tableData.facebook} onChange={this.changefacebook}></Input>
                            <h2>Instagram(optional)</h2>
                            <Input value={tableData.instagram} onChange={this.changeinstagram}></Input>
                            <h2>Twitter(optional)</h2>
                            <Input value={tableData.twitter} onChange={this.changetwitter}></Input>

                        </div>


                    </Col>

                    <Col span={10} offset={1}>
                        <h2>User Information</h2>
                        <Col span={10}>

                            <h2>Full Name:</h2>
                            <Input value={tableData.fullname} onChange={this.changefullname}></Input>
                            <h2>Address 1:</h2>
                            <Input value={tableData.address1} onChange={this.changeaddress1}></Input>
                            <h2>Email:</h2>
                            <Input value={tableData.email} onChange={this.changeemail} disabled></Input>
                            <h2>Phone Number:</h2>
                            <Input value={tableData.phone} onChange={this.changephone}></Input>

                            <h2>Role:</h2>


                            <Select defaultValue={roleid} style={{width: 160}} disabled={roleid !== '1'}
                                    onChange={this.changerole}>
                                <Option value={"1"}>Administrator</Option>
                                <Option value={"2"}>Staff</Option>
                                <Option value={"3"}>Customer</Option>
                            </Select>


                            <h2>Active:</h2>
                            <Switch checked={tableData.active} onChange={this.changeactive} disabled={roleid !== '1'}/>
                            <h2>Subscribed:</h2>
                            <Switch checked={tableData.subscribed} onChange={this.changesubscribed}/>

                        </Col>

                        <Col span={10} offset={1}>

                            <h2>Address 2:</h2>
                            <Input value={tableData.address2} onChange={this.changeaddress2}></Input>
                            <h2>Postal Code:</h2>
                            <Input value={tableData.postal} onChange={this.changepostal}></Input>
                            <h2>Alternate Phone Number:</h2>
                            <Input value={tableData.alternatephone}
                                   onChange={this.changealternatephone}></Input>
                        </Col>
                    </Col>
                </Row>
                <Row span={24}>
                    <Col span={10} offset={5}>
                        <hr></hr>
                        <h2>Security</h2>
                        <h2>login Name:</h2>
                        <Input value={tableData.loginname} onChange={this.changeloginname} disabled></Input>

                        <h2>Password:</h2>
                        <Input value={tableData.password} onChange={this.changepassword}></Input>
                        <Checkbox style={{visibility: "hidden"}}> Eanble Two-Factor Authentication</Checkbox>
                        <br></br>
                        <Button type="primary" size="large" onClick={this.handleSubmit}>Update Profile</Button>
                    </Col>

                </Row>

            </AdminManager>
        )
    }
}
