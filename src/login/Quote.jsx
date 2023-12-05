import React, {Component, PureComponent} from 'react'
import {Button, Row, Col, Input, Form, Modal, Table, message} from 'antd';
import axios from 'axios'
import AdminManager from "./AdminManager";
import confirm from "antd/es/modal/confirm";
import AddQuote from './AddQuote.js'
import SaveQuote from "./SaveQuote";

const FormItem = Form.Item;

class Quote extends Component {

    state = {addQuoteVisible: false, saveQuoteVisiable: false, savequoterecord: {}}
    formRef = React.createRef();
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
        {
            title: 'Action', render: (text, record) => (
                <span>
                        <Button onClick={() => this.editHandle(record)}>edit</Button>
                        <Button onClick={() => this.deleteHandle(record)}>del</Button>
                    </span>

            ),
        },
    ];

    deleteHandle(record) {

        const {tableData} = this.state;
        const that = this
        let ts = this;

        confirm({
            title: 'Are you sure to delete?',
            content: 'comfirm to del',
            onOk() {

                console.log(record);
                axios.post('http://70.75.134.37:3001/api1/delQuote', {quoteid: record.quoteid}).then((res) => {
                    if (res.data.code === '1') {
                        message.success(res.data.message)
                        // alert(res.data.message)
                        ts.getTableData();
                    } else {
                        message.error(res.data.message)
                        //alert(res.data.message)
                    }
                });

            },
        });


    }

    editHandle = (record) => {
        console.log(record)

        this.setState({savequoterecord: record})
        this.setState({saveQuoteVisiable: true});

        // confirm({
        //     title: 'Are you sure to update?',
        //     content: 'comfirm to update',
        //     onOk() {
        //
        //         console.log(record);
        //         axios.post('http://70.75.134.37:3001/api1/saveQuote', {quoteid: record.quoteid}).then((res) => {
        //             if (res.data.code === '1') {
        //                 message.success(res.data.message)
        //                 alert(res.data.message)
        //
        //             } else {
        //                 message.error(res.data.message)
        //                 alert(res.data.message)
        //             }
        //         });
        //
        //     },
        // });

    }
    submitHandle = () => {

        this.setState({addQuoteVisible: true});
    }
    onOk = () => {
        console.log("in onOk, gettabledata")
        this.getTableData();
        this.setState({addQuoteVisible: false});
    }

    onOkSave = () => {
        console.log("in onOkSave, saveQuoteVisiable")
        this.getTableData();
        this.setState({saveQuoteVisiable: false});
    }

    onSearch = () => {
        var myloginname = sessionStorage.getItem('loginname');

        const roleid = window.sessionStorage.getItem('roleid');

        console.log("onsearch, address=" + this.address.value)


        axios.get(roleid === '3' ? 'http://70.75.134.37:3001/api1/queryQuoteByloginnameandaddr' : 'http://70.75.134.37:3001/api1/queryQuoteByaddr', roleid === '3' ? {
                params: {
                    loginname: myloginname,
                    address: this.address.value
                }
            } : {params: {address: this.address.value}}
        ).then((res) => {

            if (res.data.code === '1') {
                this.setState({tableData: res.data.data});
                message.success(res.data.message)
            } else
                message.error(res.data.message)
        });


    }


    // constructor(props) {
    //     super(props);
    //     this.getTableData();
    // }

    componentWillMount() {

        this.getTableData();
    }

    getTableData = (data) => {
        console.log("on gettabledata")
        var myloginname = sessionStorage.getItem('loginname');
        console.log('myloginname=', myloginname);
        axios.get("http://70.75.134.37:3001/api1/queryQuoteByloginname", {params: {loginname: myloginname}})
            .then((res) => {

                if (res.data.code === '1') {

                    //  alert("in gettabledata,data===" + res.data.data)
                    this.setState({tableData: res.data.data});

                    //message.success(res.data.message)
                } else
                    message.error(res.data.message)
            });

    };


    addQuoteOnOk = (selectData) => {


        this.setState({addQuoteVisible: false})
    };


    render() {
        //console.log('this.tableData，this.tableData=', this.tableData);
        const {form, onCancel, visible, onOk} = this.props;

        const {tableData, addQuoteVisible, saveQuoteVisiable, savequoterecord} = this.state;
        console.log('in render,tableData=', tableData);
        const mysong = 'xxxxxxxxxxxx'
        console.log('in render xxx-------------x-xxxxxx saveQuoteVisiable=', saveQuoteVisiable)
        console.log('in render ,state savequoterecord=', savequoterecord);


        return (

            <div>
                <AdminManager visible={true} width={1900}>
                    <Form
                        className="ant-advanced-search-form">

                        <Row gutter={24}>
                            <Col span={4}>
                                <FormItem label='search by address'>
                                    <input style={{height: 30}} ref={(c) => (this.address = c)}/>
                                </FormItem>
                            </Col>
                            <Col span={4}>
                                <FormItem>
                                    <Button type='primary' onClick={this.onSearch}>search</Button>
                                </FormItem>
                            </Col>
                            <Col span={4}>
                                <Button type='primary' onClick={this.submitHandle}>+ Add Quote</Button>
                            </Col>
                        </Row>


                        <Table childrenColumnName="antdChildren"
                               columns={this.columns}
                               dataSource={tableData}
                               bordered/>
                    </Form>


                    <AddQuote visible={addQuoteVisible} onOk={this.onOk}
                              onCancel={() => this.setState({addQuoteVisible: false})}/>


                    <SaveQuote visible={saveQuoteVisiable} onOkSave={this.onOkSave}
                               savequoterecord={savequoterecord}
                               onCancel={() => this.setState({saveQuoteVisiable: false})}/>


                </AdminManager>

            </div>
        )
    }
}


export default Quote;