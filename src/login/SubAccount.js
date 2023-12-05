import React, {PureComponent} from 'react'
import {Button, Row, Col, Input, Form, Modal, Table, Switch} from 'antd';
import axios from 'axios'
import AdminManager from "./AdminManager";
import confirm from "antd/es/modal/confirm";
import AddQuote from './AddQuote.js'

const FormItem = Form.Item;

class SubAccount extends PureComponent {
    state = {};
    selectData = {};

    columns = [
        {title: 'accountid', dataIndex: 'accountid',},
        {title: 'fullname', dataIndex: 'fullname',},
        {title: 'email', dataIndex: 'email',},
        {title: 'phone', dataIndex: 'phone',},
        {title: 'loginname', dataIndex: 'loginname',}
    ];


    onSearch = () => {
        this.getTableData();
    }


    getTableData = (data) => {
        var searchbyfullname = this.searchbyfullname.input.value;
        console.log('in get tabledata, searchbyfullname=', searchbyfullname);
        const myloginname = window.sessionStorage.getItem('loginname');
        const roleid = window.sessionStorage.getItem('roleid');


        if (roleid !== '3') {
            axios
                .get("http://70.75.134.37:3001/api1/queryAccountByfullnamelike", {params: {fullname: searchbyfullname}})
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
        } else {
            console.log("myloginname ==============", myloginname)

            axios
                .get("http://70.75.134.37:3001/api1/getAccountByLoginNameShort", {params: {loginname: myloginname}})
                .then(
                    (response) => {
                        console.log("getTableData success", response.data.data);

                        //console.log('mydata=', mydata);

                        this.setState({tableData: response.data.data});
                        this.tableData = response.data.data;
                    },
                    (error) => {
                        // console.log(this)
                        console.log("getTableData fail", "in appointment.jsx")
                    }
                );
        }

    };


    render() {
        const {form, onCancel, visible, onOkaccount} = this.props;

        const {tableData} = this.state;
        console.log('in render,tableData=', tableData);

        const rowSelectProp = {
            type: 'radio',
            onSelect: this.selectDataHandle
        };

        console.log("in sub accont render")
        return (
            <div>
                <Modal visible={visible} onCancel={onCancel} onOk={() => onOkaccount(this.selectData)}
                       width={1900}>
                    <Form
                        className="ant-advanced-search-form"
                    >

                        <Row gutter={24}>
                            <Col span={4}>
                                <FormItem label='Search by fullname'>
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


export default SubAccount;