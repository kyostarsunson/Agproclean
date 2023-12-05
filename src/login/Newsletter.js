import React, {Component, PureComponent} from 'react'
import AdminManager from './AdminManager'
import {Row, Col, Button, Table} from 'antd'
import {Form, Modal, Input, Switch, message} from 'antd';
import axios from 'axios'
import {Avatar, List} from 'antd';
import './index.css'
import AddNews from "./AddNews";
import Newsdetail from "./Newsdetail"

const FormItem = Form.Item;

class Newsletter extends PureComponent {
    state = {
        tableData: [],
        addNewsVisiable: false,
        addTableItem: {},
        newsDetailVisiable: false,
        newslettercontent: "",
        newslettersubject: ""
    };

    componentWillMount() {
        console.log('in   componentWillMount ----: ')
        this.getTableData();
    }

    getTableData = (data) => {

        this.props.form.validateFields((err, values) => {
                console.log('in  get query Newletter:this.values.keyword.value=', values.keyword)

                if (values.keyword === undefined || values.keyword === "") {
                    console.log('in  get query Newletter undefined------: ')
                    axios.get("http://70.75.134.37:3001/api1/queryNewsletter").then(
                        (res) => {
                            if (res.data.code === '1') {
                                message.success(res.data.message)
                                this.setState({tableData: res.data.data});
                            } else
                                message.error(res.data.message)
                        },
                        (error) => {
                            // console.log(this)
                            alert("queryNewletter fail")
                        }
                    );

                } else {
                    console.log('in  get query queryNewsletterbykey ------: ')
                    axios.get('http://70.75.134.37:3001/api1/queryNewsletterbykey', {params: {keyword: values.keyword}})
                        .then(
                            (res) => {
                                console.log("success----------------", res.data.data);

                                if (res.data.code === '1') {
                                    message.success(res.data.message)
                                    this.setState({tableData: res.data.data});
                                } else
                                    message.error(res.data.message)
                            },
                            (error) => {
                                // console.log(this)
                                alert("queryNewletter fail")
                            }
                        );


                }


            }
        )


    };

    onOkxx = () => {
        this.getTableData()
        this.setState({addNewsVisiable: false})
    }
    onOkDetail = () => {
        this.setState({newsDetailVisiable: false})
    };
    handleClick = (data) => {

        console.log("in handleclick=", data.newslettersubject);

        this.setState({
            newsDetailVisiable: true,
            newslettersubject: data.newslettersubject,
            newslettercontent: data.newslettercontent
        })
    }

    render() {
        const {form} = this.props;
        const {
            tableData,
            addNewsVisiable,
            newsDetailVisiable,
            addTableItem,
            newslettercontent,
            newslettersubject
        } = this.state;
        const roleid = window.sessionStorage.getItem('roleid');


        return (
            <AdminManager>

                <Form
                    className="ant-advanced-search-form"
                >
                    <Row gutter={24}>
                        <Col span={8}>
                            <FormItem disabled={true} label='Search by key words'>
                                {form.getFieldDecorator('keyword', {})(
                                    <Input/>)}
                            </FormItem>
                        </Col>
                        <Col span={4}>
                            <FormItem>
                                <Button type='primary' onClick={this.getTableData}>search</Button>
                            </FormItem>
                        </Col>
                        <Col span={4}>
                            <FormItem>
                                <Button type='primary' disabled={roleid === '3'}
                                        onClick={() => this.setState({addNewsVisiable: true})}
                                >Add a newsletter</Button>
                            </FormItem>
                        </Col>
                    </Row>

                    <Table columns={this.columns} dataSource={tableData} bordered/>
                </Form>


                <List
                    itemLayout="horizontal"
                    dataSource={tableData}
                    renderItem={(item, index) => (
                        <List.Item>
                            <List.Item.Meta

                                avatar={<Avatar
                                    src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}/>}
                                title={
                                    <Button
                                        onClick={() => {

                                            const data = {
                                                newslettersubject: item.newslettersubject,
                                                newslettercontent: item.newslettercontent
                                            }
                                            this.handleClick(data);

                                        }}
                                        type="link">{item.newslettersubject + '(' + item.newsletterdate + ')'}</Button>}

                                description={item.newslettercontent}
                            />

                        </List.Item>
                    )}
                />
                <Newsdetail visible={newsDetailVisiable} onOk={this.onOkDetail} newslettersubject={newslettersubject}
                            newslettercontent={newslettercontent}
                            onCancel={() => this.setState({newsDetailVisiable: false})}></Newsdetail>

                <AddNews visible={addNewsVisiable} onOk={this.onOkxx}
                         onCancel={() => this.setState({addNewsVisiable: false})}/>

            </AdminManager>
        );
    }

}

export default Form.create()(Newsletter);