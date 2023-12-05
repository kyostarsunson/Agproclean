import React, {PureComponent} from 'react'
import {Button, Row, Col, Input, Form, Modal, Table} from 'antd';
import axios from 'axios'
import AdminManager from "./AdminManager";
import confirm from "antd/es/modal/confirm";
import AddQuote from './AddQuote.js'

const FormItem = Form.Item;

class SubQuote extends PureComponent {
    state = {};
    selectData = {};

    columns = [

        {title: 'quoteid', dataIndex: 'quoteid',},
        {title: 'accountid', dataIndex: 'accountid',},
        {title: 'address', dataIndex: 'address',},
        {title: 'city', dataIndex: 'city',},
        {title: 'postalcode', dataIndex: 'postalcode',},
        {title: 'bedrooms', dataIndex: 'bedrooms',},
        {title: 'bathrooms', dataIndex: 'bathrooms',},
        {title: 'hardsurfacefloor', dataIndex: 'hardsurfacefloor',},
        {title: 'nicknacks', dataIndex: 'nicknacks',},
        {title: 'size', dataIndex: 'size',},
        {title: 'children', dataIndex: 'children',},
        {title: 'levels', dataIndex: 'levels',},
        {title: 'pets', dataIndex: 'pets',},
        {title: 'cleaningdata', dataIndex: 'cleaningdata',},
        {title: 'cleaningtime', dataIndex: 'cleaningtime',},
        {title: 'estimatecost', dataIndex: 'estimatecost',},
        {title: 'serviceid', dataIndex: 'serviceid',},
    ];


    //
    // constructor(props) {
    //     super(props);
    //     this.getTableData();
    // }


    selectDataHandle = (selectedRowKeys) => {
        this.selectData = selectedRowKeys;
    };

    onSearch = () => {
        this.getTableData();
    }


    getTableData = (data) => {
        var searchbyfullname = this.searchbyfullname.input.value;
        console.log('in get tabledata, searchbyfullname=', searchbyfullname);
        const myloginname = window.sessionStorage.getItem('loginname');
        const roleid = window.sessionStorage.getItem('roleid');

        axios
            .get(roleid === '3' ? "http://70.75.134.37:3001/api1/queryQuoteByloginname" : "http://70.75.134.37:3001/api1/queryQuoteByfullnamelike", {params: roleid === '3' ? {loginname: myloginname} : {searchbyfullname: searchbyfullname}})
            .then(
                (response) => {
                    console.log("getTableData success", response.data.data);

                    //console.log('mydata=', mydata);

                    this.setState({tableData: response.data.data});
                    //this.tableData = response.data.data;
                },
                (error) => {
                    // console.log(this)
                    console.log("getTableData fail", "in appointment.jsx")
                }
            );

    };


    render() {
        //console.log('this.tableData，this.tableData=', this.tableData);
        const {form, onCancel, visible, onOk} = this.props;

        const {tableData} = this.state;
        console.log('in render,tableData=', tableData);

        const rowSelectProp = {
            type: 'radio',
            onSelect: this.selectDataHandle
        };

        return (

            <div>
                <Modal visible={visible} onCancel={onCancel} onOk={() => onOk(this.selectData)} width={1900}>
                    <Form
                        className="ant-advanced-search-form"
                    >

                        <Row gutter={24}>
                            <Col span={4}>
                                <FormItem label='Search by fullname:'>
                                    <Input ref={(c) => (this.searchbyfullname = c)}
                                    />
                                </FormItem>
                            </Col>
                            <Col span={4}>
                                <FormItem>
                                    <Button type='primary' onClick={this.onSearch}>search</Button>
                                </FormItem>
                            </Col>
                        </Row>


                        <Table childrenColumnName="antdChildren"
                               columns={this.columns}
                               dataSource={tableData}
                               rowSelection={rowSelectProp}
                               bordered/>
                    </Form>


                </Modal>

            </div>
        )
    }
}


export default SubQuote;