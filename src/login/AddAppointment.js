import React, {PureComponent} from 'react';
import {create, Form, Modal, Input, Switch, message, DatePicker, Select, Option} from 'antd';
import 'braft-editor/dist/index.css'
import BraftEditor from 'braft-editor'
import moment from 'moment'
import {Button} from 'antd'
import {Dayjs} from 'dayjs'


import axios from 'axios'
import SubQuote from "./SubQuoto";
import SubAccount from "./SubAccount"
import AddQuote from "./AddQuote";


class AddAppointment extends PureComponent {
    state = {serviceData: null, addTableData: {roleid: 0}, SubQuoteVisible: false, SubAccountVisible: false}


    componentDidMount() {

        // // 异步设置编辑器内容
        // setTimeout(() => {
        //     this.props.form.setFieldsValue({
        //         content: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>')
        //     })
        // }, 1000)

        this.getServiceData();
    }

    handleChange = (editorState) => {
        const {form} = this.props;
        this.setState({editorState});
        form.setFieldsValue({content: editorState});
    }

    getServiceData = () => {
        console.log('in  addappointment getServiceData:')
        axios
            .get("http://70.75.134.37:3001/api1/queryService")
            .then(
                (response) => {
                    console.log("success", response.data.data);
                    this.setState({serviceData: response.data.data});

                },
                (error) => {
                    // console.log(this)
                    alert("queryService fail")
                }
            );
    }
    handleSubmit = (event) => {
        console.log("in handleSubmit--------------------1----------");

        this.props.form.validateFields((error, values) => {
            if (!error) {
                axios.post('http://70.75.134.37:3001/api1/saveAppointment', this.state.addTableData).then((res) => {
                    console.log("in handleSubmit,res.data.code=", res.data.code);

                    if (res.data.code === '1') {

                        message.success(res.data.message)
                        this.props.onOk();
                        alert(res.data.message)
                    } else {
                        message.error(res.data.message)
                        alert(res.data.message)
                    }
                });
            } else {
                alert("Please enter the whole form.")
                console.log("in handleSubmit-------------------2----------------------");
            }
            console.log("in handleSubmit------------------------3-----------------");
        })


    }

    onChangeTime = (value, dateString) => {
        console.log('in onChangeTime,  Selected dateString: ', dateString);
        console.log('in onChangeTime,  Selected value: ', value);

        const {addTableData} = this.state;
        const newaddTableData = {...addTableData, appointmentdatetime: dateString};
        this.setState({addTableData: newaddTableData});

        console.log('in onChangeTime,  finish set state value: ', newaddTableData);

    }
    onChangeLocation = (e) => {

        console.log("onChangeLocation , e=", e)
        const {addTableData} = this.state;
        const newaddTableData = {...addTableData, appointmentlocation: e.target.value};
        this.setState({addTableData: newaddTableData});
    }
    onChangeNote = (e) => {
        const {addTableData} = this.state;
        const newaddTableData = {...addTableData, appointmentnote: e.target.value};
        this.setState({addTableData: newaddTableData});
    }

    onChangeservice = (e) => {

        console.log("onChangeservice , e", e)
        const {addTableData} = this.state;
        const newaddTableData = {...addTableData, serviceid: e};
        this.setState({addTableData: newaddTableData});
    }

    onChangequoteID = (e) => {
        const {addTableData} = this.state;
        const newaddTableData = {...addTableData, quoteid: e.target.value};
        this.setState({addTableData: newaddTableData});
    }

    onChangeaccountID = (e) => {

        console.log("onChangeaccountID , e.target.value", e.target.value)
        const {addTableData} = this.state;
        const newaddTableData = {...addTableData, accountid: e.target.value};
        this.setState({addTableData: newaddTableData});
    }

    onOk = (value) => {
        console.log('in onok, get the Selected id: ', value);
        console.log('in onok, get the  this.props.form=: ', this.props.form);
        this.setState({SubQuoteVisible: false});
    }

    onOkaccount = (value) => {
        console.log('in onOkaccount, get the Selected id: ', value);
        console.log('in onOkaccount, get the  this.props.form=: ', this.props.form);
        this.setState({SubAccountVisible: false});
    }

    onQueryQuoteID = () => {
        this.setState({SubQuoteVisible: true});
    }
    onQueryAccountID = () => {
        this.setState({SubAccountVisible: true});
    }

    render() {
        const formItemLayout = {
            labelCol: {span: 4},
            wrapperCol: {span: 17},
        }

        const {visible, onOk, onCancel, form} = this.props;
        const {serviceData, SubQuoteVisible, addTableData, SubAccountVisible} = this.state


        console.log("in render------------,addTableData=", addTableData)

        const {getFieldDecorator} = this.props.form
        const controls = ['bold', 'italic', 'underline', 'text-color', 'separator', 'link', 'separator', 'media']
        const {Option} = Select;
        console.log("in render,Select=", Select)


        return (

            <Modal visible={visible} onOk={this.handleSubmit} onCancel={onCancel}>
                <div className="demo-container">
                    <Form onSubmit={this.handleSubmit} form={form}>
                        <Form.Item {...formItemLayout} label="Date">
                            {getFieldDecorator('appointmentdatetime', {
                                rules: [{
                                    required: true,
                                    message: 'Plese input the appointment date',
                                }],
                            })(
                                <DatePicker showTime placeholder="Select Time" onChange={this.onChangeTime}
                                            onOk={this.onOk}/>
                            )}
                        </Form.Item>
                        <Form.Item label='appointmentlocation'>
                            {form.getFieldDecorator('appointmentlocation', {
                                rules: [{
                                    required: true,
                                    message: 'location！'
                                }],
                            })(
                                <Input onChange={this.onChangeLocation}/>
                            )}
                        </Form.Item>
                        <Form.Item label='appointmentnote'>
                            {form.getFieldDecorator('appointmentnote', {
                                rules: [{
                                    required: true,
                                    message: 'note！'
                                }],
                            })(
                                <Input onChange={this.onChangeNote}/>)}
                        </Form.Item>
                        <Form.Item label='serviceid'>
                            {form.getFieldDecorator('serviceid', {
                                rules: [{
                                    required: true,
                                    message: 'serviceid！'
                                }],
                            })(
                                serviceData == null ? <div/> :
                                    <Select style={{width: 160}} onChange={this.onChangeservice}
                                    >
                                        {
                                            serviceData.map(data => (
                                                    <Option value={data.serviceID}>{data.serviceName}</Option>
                                                )
                                            )
                                        }

                                        {/*<Option value={"1"}>Administrator</Option>*/}
                                        {/*<Option value={"2"}>Staff</Option>*/}
                                        {/*<Option value={"3"}>Customer</Option>*/}

                                    </Select>)}
                        </Form.Item>
                        <Form.Item label='quoteid'>
                            {form.getFieldDecorator('quoteid', {
                                rules: [{
                                    required: true,
                                    message: 'quoteid！'
                                }],
                            })(<input onChange={this.onChangequoteID}/>)}
                        </Form.Item>
                        <Button onClick={this.onQueryQuoteID}>Query quote</Button>
                        <Form.Item label='accountid'>
                            {form.getFieldDecorator('accountid', {
                                rules: [{
                                    required: true,
                                    message: 'accountid！'
                                }],
                            })(
                                <Input onChange={this.onChangeaccountID}/>)}
                        </Form.Item>
                        <Button onClick={this.onQueryAccountID}>Query Account id</Button>

                        {/*<Form.Item {...formItemLayout}>*/}
                        {/*    <Button size="normal" type="primary" htmlType="submit">SUBMIT</Button>*/}
                        {/*</Form.Item>*/}


                    </Form>

                    <SubQuote visible={SubQuoteVisible} onOk={this.onOk}
                              onCancel={() => this.setState({SubQuoteVisible: false})}/>
                    <SubAccount visible={SubAccountVisible} onOkaccount={this.onOkaccount}
                                onCancel={() => this.setState({SubAccountVisible: false})}/>
                </div>
            </Modal>
        )

    }

}

export default Form.create()(AddAppointment);