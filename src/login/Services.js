import React, { Component } from 'react'
import AdminManager from './AdminManager'
import { Row, Col, Button, Table, Modal } from 'antd'
import axios from 'axios'
import './Services.css'
import confirm from "antd/es/modal/confirm";

export default class Services extends Component {

    state = {}
    componentWillMount() {

        this.getTableData();
    }

    getTableData = (data) => {
        console.log('in  get service:')
        axios
            .get("http://localhost:3001/api1/queryService")
            .then(
                (response) => {
                    console.log("success", response.data.data);
                    this.setState({ tableData: response.data.data });

                },
                (error) => {
                    // console.log(this)
                    alert("queryService fail")
                }
            );

    };

    columns = [
        { title: 'Service Name', dataIndex: 'serviceName', },
        { title: 'Per Hr.Rate', dataIndex: 'rate', },
        { title: 'Rating', dataIndex: 'descritpion', },
        {
            title: 'Action', render: (text, record) => (record.serviceId
                ? (<Button onClick={() => this.deleteHandle(record)}>Delete</Button>)
                : (
                    <span>
                        <Button onClick={() => this.deleteHandle(record)}>Delete</Button>
                        <span>   </span>
                        
                    </span>
                )
            ),
        },
    ];


    deleteHandle = (record) => {
        const { tableData } = this.state;
        const that = this

        console.log(record.serviceID)
        confirm({
            title: 'Are you sure to delete?',
            content: 'comfirm to del',
            onOk() {
                axios.post('http://localhost:3001/api1/deleService', { serviceID: record.serviceID }).then((res) => {
                    if (res.data.code === '1') {
                        // alert('success delete')
                        that.getTableData()
                        console.log(that)
                    }
                });
            },
        });

    }

    handleSearch = () => {
        this.props.history.push('/AddService')
    }
    render() {
        const { tableData, semesterList } = this.state;
        return (
            <div>
                <AdminManager>
                    <Row >
                        <Col span={24} >
                            <Button type='primary' onClick={this.handleSearch} size='large'>+ Add Service</Button></Col>
                    </Row>

                    <Row > <Col span={24}>
                        <h2>General Service List</h2></Col></Row>

                    <Row >
                        <Col span={24}>
                            <hr></hr>
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
