import React, {Component} from 'react'
import AdminManager from './AdminManager'
import {Row, Col, Button, Table, Modal, Switch, message} from 'antd'
import axios from 'axios'
import './index.css'
import confirm from "antd/es/modal/confirm";

export default class Accounts extends Component {

    state = {}

    componentWillMount() {

        this.getTableData();
    }

    getTableData = (data) => {
        console.log('in get accunt:');
        axios
            .get("http://70.75.134.37:3001/api1/getAllAccount")
            .then(
                (response) => {
                    console.log("success", response.data.data);
                    this.setState({tableData: response.data.data});

                },
                (error) => {
                    // console.log(this)
                    alert("getAllAccount fail")
                }
            );

    };

    editHandle = (e) => {
        console.log('in account edithandle', e.loginname);

        this.props.history.push({pathname: '/profile', queryloginname: e.loginname});

    }
    deleteHandle = (record) => {
        console.log("in deletehande,record=", record)
        let ts = this;

        confirm({
            title: 'Are you sure to delete?',
            content: 'comfirm to del',
            onOk() {

                console.log(record);
                axios.post('http://70.75.134.37:3001/api1/delAccount', {accountid: record.accountid}).then((res) => {
                    if (res.data.code === '1') {
                        message.success(res.data.message)
                        //alert(res.data.message)
                        ts.getTableData()

                    } else {
                        message.error(res.data.message)
                        //alert(res.data.message)
                    }
                });

            },
        });
    }

    columns = [
        {title: 'accountid', dataIndex: 'accountid',},
        {title: 'fullname', dataIndex: 'fullname',},
        {title: 'email', dataIndex: 'email',},
        {title: 'phone', dataIndex: 'phone',},
        {title: 'loginname', dataIndex: 'loginname',},
        {title: 'password', dataIndex: 'password',},
        {
            title: 'active',
            dataIndex: 'active',
            render: (text, record) => (record.active === true ?
                <Switch checked={true}/> : (
                    <Switch checked={false}/>))
        },
        {
            title: 'subscribed',
            dataIndex: 'subscribed',
            render: (text, record) => (record.subscribed === true ?
                <Switch checked={true}/> : (
                    <Switch checked={false}/>))
        },
        {
            title: 'roleid', dataIndex: 'roleid',
            render: (text, record) => (record.roleid === 1 ? 'Administrator' : (record.roleid === 2 ? 'Staff' : 'Custom')
            )
        },
        {
            title: 'Action', render: (text, record) => (record.accountid
                    ? (<div>
                            <Button onClick={() => this.editHandle(record)}>Edit</Button>
                            <Button onClick={() => this.deleteHandle(record)}>Del</Button>
                        </div>

                    )
                    : (
                        <span>

                        <span>   </span>

                    </span>
                    )
            ),
        },
    ];

    handleSearch = () => {
        //this.getTableData();
        this.props.history.push({pathname: '/profile', action: 'adduser'});
    };

    render() {
        const {tableData, semesterList} = this.state;
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
                </AdminManager>
            </div>
        )
    }
}
