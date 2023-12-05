import React, {Component} from 'react';
import {Row, Col, Button, Table, Modal, message} from 'antd';
import axios from 'axios'
import AdminManager from './AdminManager'
import AddNews from "./AddNews";
import addAppointment from "./AddAppointment";
import AddAppointment from "./AddAppointment";
import confirm from "antd/es/modal/confirm";

export default class Appointment extends Component {

    state = {addAppointmentVisiable: false}

    componentWillMount() {

        this.getTableData();
    }

    componentDidMount() {
        // this.intervalId = setInterval(() => {
        //     this.setState({
        //         count: this.state.count + 1
        //     });
        // }, 1000);
    }

    getTableData = (data) => {


        var myloginname = sessionStorage.getItem('loginname');
        const roleid = sessionStorage.getItem('roleid');

        if (roleid === "3") {
            console.log('in  get accunt:');
            axios
                .get("http://70.75.134.37:3001/api1/queryAppointmentByLoginname", {params: {loginname: myloginname}})
                .then(
                    (response) => {
                        console.log("success", response.data.data);
                        this.setState({tableData: response.data.data});

                    },
                    (error) => {
                        // console.log(this)
                        console.log("getAppointment fail", "in appointment.jsx")
                    }
                );

        } else {
            console.log('in  get accunt:');
            axios
                .get("http://70.75.134.37:3001/api1/queryAllAppointment")
                .then(
                    (response) => {
                        console.log("success", response.data.data);
                        this.setState({tableData: response.data.data});

                    },
                    (error) => {
                        // console.log(this)
                        console.log("getAppointment fail", "in appointment.jsx")
                    }
                );
        }
    };
    deleteHandle = (record) => {
        let ts = this;

        const {tableData} = this.state;
        const that = this

        confirm({
            title: 'Are you sure to delete?',
            content: 'comfirm to del',
            onOk() {

                console.log("in deleteHandle,record=", record);
                axios.post('http://70.75.134.37:3001/api1/delAppointment', {appointmentid: record.appointmentid}).then((res) => {
                    if (res.data.code === '1') {
                        message.success(res.data.message)
                        ts.getTableData();
                    } else
                        message.error(res.data.message)
                });

            },
        });

        this.onOk();
    }
    editHandle = (e) => {
        console.log('in account edithandle', e.loginname);

        this.props.history.push({pathname: '/profile', queryloginname: e.loginname});

    }
    onOk = () => {
        // console.log('in onok, get the Selected id: ', value);
        console.log('in onok, get the  this.props.form=: ', this.props.form);
        this.getTableData();
        this.setState({addAppointmentVisiable: false});
    }

    columns = [
        {title: 'appointmentID', dataIndex: 'appointmentid',},
        {title: 'appointmentDateTime', dataIndex: 'appointmentdatetime',},
        {title: 'appointmentLocation', dataIndex: 'appointmentlocation',},
        {title: 'appointmentStatus', dataIndex: 'appointmentstatus',},
        {title: 'appointmentNote', dataIndex: 'appointmentnote',},
        {
            title: 'Action', render: (text, record) => ((
                    <span>
                        <Button onClick={() => this.deleteHandle(record)}>Delete</Button>
                        <span>   </span>
                    </span>
                )
            ),
        },
    ];

    handleSubmit = () => {
        //this.getTableData();
        this.setState({addAppointmentVisiable: true})
    };

    render() {
        const {tableData, semesterList} = this.state;
        const {addAppointmentVisiable} = this.state;
        return (
            <div>
                <AdminManager>
                    <Row>
                        <Col span={24}>
                            <Button type='primary' onClick={this.handleSubmit} size='large'>+ Add An
                                Appointment</Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <h2>Account List</h2>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Row style={{}}>
                        <Col span={24}>
                            <Table
                                columns={this.columns}
                                dataSource={tableData}
                                bordered/>
                        </Col>
                    </Row>

                    <AddAppointment visible={addAppointmentVisiable} onOk={this.onOk}
                                    onCancel={() => this.setState({addAppointmentVisiable: false})}/>

                </AdminManager>
            </div>
        )
    }
}
