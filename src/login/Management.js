import React, {Component} from 'react'
import AdminManager from './AdminManager'
import {Row, Col, Button, Table, Modal, message} from 'antd'
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
            .get("http://70.75.134.37:3001/api1/querysubscribe")
            .then(
                (response) => {
                    console.log("success", response.data.data);
                    this.setState({tableData: response.data.data});

                },
                (error) => {
                    // console.log(this)
                    alert("queryService fail")
                }
            );

        axios
            .get("http://70.75.134.37:3001/api1/querysendlog")
            .then(
                (response) => {
                    console.log("success", response.data.data);
                    this.setState({tableData2: response.data.data});

                },
                (error) => {
                    // console.log(this)
                    alert("queryService fail")
                }
            );


    };

    columns = [
        {title: 'email',},

    ];
    columns2 = [
        {title: 'send_date',},

    ];

    deleteHandle = (record) => {
        const {tableData} = this.state;
        const that = this

        console.log(record.serviceID)
        confirm({
            title: 'Are you sure to delete?',
            content: 'comfirm to del',
            onOk() {
                axios.post('http://70.75.134.37:3001/api1/deleService', {serviceID: record.serviceID}).then((res) => {
                    if (res.data.code === '1') {
                        message.success(res.data.message)
                        that.getTableData()
                    } else
                        message.error(res.data.message)

                });
            },
        });

    }

    handleSearch = () => {
        this.props.history.push('/AddService')
    }

    onsubscrib = (data) => {
        console.log('in  get service:')
        axios
            .get("http://70.75.134.37:3001/api1/insertsubscribe")
            .then(
                (response) => {
                    if (response.data.code == 1) {
                        console.log("success", response.data.data);
                        message.success(response.data.message)
                        alert("insertsubscribe success")
                        this.getTableData();
                        
                    } else {
                        message.error(response.data.message)
                    }

                },
                (error) => {
                    // console.log(this)
                    alert("insertsubscribe fail")
                    message.error("insertsubscribe fail")
                }
            );

    };

    render() {
        const {tableData, tableData2} = this.state;
        return (
            <div>
                <AdminManager>


                    <Row> <Col span={18}>
                        <h2>Subscribed List</h2></Col>
                    </Row>
                    <Row>
                        <Col span={19}>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>

                            <Table
                                columns={this.columns}
                                dataSource={tableData}
                                bordered/>
                        </Col>
                        <Col span={1}>


                        </Col>
                        <Col span={7}>
                            <Table
                                columns={this.columns2}
                                dataSource={tableData2}
                                bordered/>

                        </Col>
                        <Col span={1}>


                        </Col>

                        <Col span={6}>

                            <Button onClick={this.onsubscrib} type={"primary"}>Send newsletter to subscribed
                                letter</Button>
                        </Col>
                    </Row>
                </AdminManager>
            </div>
        )
    }
}
