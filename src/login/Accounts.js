import React, { Component } from 'react'
import AdminManager from './AdminManager'
import { Row, Col, Button, Table, Modal } from 'antd'
import axios from 'axios'
import './index.css'

export default class Accounts extends Component {

    state = {}
    componentWillMount() {

        this.getTableData();
    }

    getTableData = (data) => {
        console.log('in  get accunt:');
        axios
            .get("http://localhost:3001/api1/getAllAccount")
            .then(
                (response) => {
                    console.log("success", response.data.data);
                    this.setState({ tableData: response.data.data });

                },
                (error) => {
                    // console.log(this)
                    alert("getAllAccount fail")
                }
            );

    };

    editHandle = (e) => {
        console.log('in account edithandle', e.loginname);
       
        this.props.history.push({ pathname: '/profile', queryloginname: e.loginname });

    }


    columns = [
        { title: 'accountid', dataIndex: 'accountid', },
        { title: 'fullname', dataIndex: 'fullname', },
        { title: 'email', dataIndex: 'email', },
        { title: 'phone', dataIndex: 'phone', },
        { title: 'loginname', dataIndex: 'loginname', },
        { title: 'password', dataIndex: 'password', },
        { title: 'active', dataIndex: 'active', },
        { title: 'subscribed', dataIndex: 'subscribed', },
        { title: 'roleid', dataIndex: 'roleid', },
        {
            title: 'Action', render: (text, record) => (record.accountid
                ? (<Button onClick={() => this.editHandle(record)}>Edit</Button>)
                : (
                    <span>
                        <Button onClick={() => this.deleteHandle(record)}>Delete</Button>
                        <span>   </span>

                    </span>
                )
            ),
        },
    ];

    handleSearch = () => {
        //this.getTableData();
        this.props.history.push({ pathname: '/profile', action: 'adduser' });
    };

    render() {
        const { tableData, semesterList } = this.state;
        return (
            <div>
                <AdminManager>
                    <Row>
                        <Col span={24}>
                            <Button type='primary' onClick={this.handleSearch} size='large'>+ Add An Account</Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <h2>Account List</h2>
                            <hr></hr></Col>
                    </Row>
                    <Row style={{}}>
                        <Col span={24}>
                            <Table
                                columns={this.columns}
                                dataSource={tableData}
                                bordered />
                        </Col>
                    </Row>
                </AdminManager>
            </div>
        )
    }
}
