import React, { Component } from 'react';
import { Row, Col, Button, Table, Modal } from 'antd';
import axios from 'axios'
import AdminManager from './AdminManager'

export default class Appointment extends Component {

    state = {}
    componentWillMount() {

        this.getTableData();
    }

    getTableData = (data) => {
        console.log('in  get accunt:');
        axios
            .get("http://localhost:3001/api1/appointment")
            .then(
                (response) => {
                    console.log("success", response.data.data);
                    this.setState({ tableData: response.data.data });

                },
                (error) => {
                    // console.log(this)
                    console.log("getAppointment fail", "in appointment.jsx")
                }
            );

    };

    editHandle = (e) => {
        console.log('in account edithandle', e.loginname);

        this.props.history.push({ pathname: '/profile', queryloginname: e.loginname });

    }


    columns = [
        { title: 'appointmentID', dataIndex: 'appointmentid', },
        { title: 'appointmentDateTime', dataIndex: 'appointmentdatetime', },
        { title: 'appointmentLocation', dataIndex: 'appointmentlocation', },
        { title: 'appointmentStatus', dataIndex: 'appointmentstatus', },
        { title: 'appointmentNote', dataIndex: 'appointmentnote', },
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
                            <Button type='primary' onClick={this.handleSearch} size='large'>+ Add An Appointment</Button>
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
