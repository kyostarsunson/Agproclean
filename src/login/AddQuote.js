import React, {PureComponent} from 'react';
import {create, Form, Modal, Input, Switch, message, InputNumber, Select} from 'antd';
import axios from 'axios'

class AddQuote extends PureComponent {

    state = {serviceData: null}


    componentDidMount() {

        // setTimeout(() => {
        //     this.props.form.setFieldsValue({
        //         content: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>')
        //     })
        // }, 1000)

        this.getServiceData();
    }

    onOk = () => {
        let ts = this;

        this.props.form.validateFields((err, values) => {

            if (!err) {
                var myloginname = sessionStorage.getItem('loginname');
                var accountid = sessionStorage.getItem('accountid');
                if (values.estimatecost === null)
                    values.estimatecost = 0;


                let data = {...values, accountid};


                console.log('in valu---------------------------es,values=', values);
                console.log('in adquote,accountid=', accountid);


                axios.post('http://70.75.134.37:3001/api1/addQuote', {...data}).then((res) => {
                    if (res.data.code === '1') {
                        //alert(res.data.message);
                        message.success(res.data.message)
                    } else {
                        //alert(res.data.message);
                        message.error(res.data.message)
                    }
                });
                ts.props.onOk();
            } else {
                message.error("Please input the whole infomration")
            }
        })


    };

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


    render() {
        const {visible, onOk, onCancel, form} = this.props;
        const {serviceData} = this.state
        const {Option} = Select;
        var roleid = sessionStorage.getItem('roleid');

        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 17},
        }

        return (

            <Modal visible={visible} onOk={this.onOk} onCancel={onCancel} width={800}>

                <Form {...formItemLayout}
                      initialValues={{
                          city: "fffffff",
                          pets: 0,
                          bedroom: 0
                      }}>
                    <Form.Item label='address'>
                        {form.getFieldDecorator('address', {
                            rules: [{
                                required: true,
                                message: 'address！'
                            }],
                        })(
                            <Input/>)}
                    </Form.Item>
                    <Form.Item label='city'>
                        {form.getFieldDecorator('city', {
                            rules: [{
                                required: true,
                                message: 'city！'
                            }],
                        })(
                            <Input/>)}
                    </Form.Item>
                    <Form.Item label='postalcode'>
                        {form.getFieldDecorator('postalcode', {
                            rules: [{
                                required: true,
                                message: 'postalcode！'
                            }],
                        })(
                            <Input/>)}
                    </Form.Item>
                    <Form.Item label='bedrooms'>
                        {form.getFieldDecorator('bedrooms', {
                            rules: [{
                                required: true,
                                message: 'bedrooms！'
                            }],
                        })(
                            <InputNumber min={0} max={50}/>)}
                    </Form.Item>
                    <Form.Item label='bathrooms'>
                        {form.getFieldDecorator('bathrooms', {
                            rules: [{
                                required: true,
                                message: 'bedrooms！'
                            }],
                        })(
                            <InputNumber min={0} max={20}/>)}
                    </Form.Item>
                    <Form.Item label='hardsurfacefloor'>
                        {form.getFieldDecorator('hardsurfacefloor', {
                            rules: [{
                                required: true,
                                message: 'hardsurfacefloor！'
                            }],
                        })(
                            <InputNumber min={0} max={20}/>)}
                    </Form.Item>
                    <Form.Item label='nicknacks'>
                        {form.getFieldDecorator('nicknacks', {
                            rules: [{
                                required: true,
                                message: 'nicknacks！'
                            }],
                        })(
                            <InputNumber min={0} max={50}/>)}
                    </Form.Item>
                    <Form.Item label='size(square feet)' name='size'>
                        {form.getFieldDecorator('size', {
                            rules: [{
                                required: true,
                                message: 'size！'
                            }],
                        })(
                            <InputNumber min={0} max={50000}/>)}
                    </Form.Item>
                    <Form.Item label='children'>
                        {form.getFieldDecorator('children', {
                            rules: [{
                                required: true,
                                message: 'children！'
                            }],
                        })(
                            <InputNumber min={0} max={50}/>)}
                    </Form.Item>
                    <Form.Item label='levels'>
                        {form.getFieldDecorator('levels', {
                            rules: [{
                                required: true,
                                message: 'levels！'
                            }],
                        })(
                            <InputNumber min={0} max={50}/>)}
                    </Form.Item>
                    <Form.Item label='pets'>
                        {form.getFieldDecorator('pets', {
                            rules: [{
                                required: true,
                                message: 'pets！'
                            }],
                        })(
                            <InputNumber min={0} max={50}/>)}
                    </Form.Item>
                    <Form.Item label='cleaningdate(YYYYMMDD)' name='cleaningdate'>
                        {form.getFieldDecorator('cleaningdate', {
                            rules: [{
                                required: true,
                                message: 'cleaningdate！'
                            }],
                        })(
                            <Input/>)}
                    </Form.Item>
                    <Form.Item label='cleaningtime'>
                        {form.getFieldDecorator('cleaningtime', {
                            rules: [{
                                required: true,
                                message: 'cleaningtime！'
                            }],
                        })(
                            <Input/>)}
                    </Form.Item>
                    <Form.Item label='estimatecost(CA$)'>
                        {form.getFieldDecorator('estimatecost', {
                            rules: [{
                                required: false,
                                message: 'estimatecost should be a number！'
                            }],
                        })(
                            <InputNumber min={0} max={50000}/>)}
                    </Form.Item>
                    <Form.Item label='service name'>
                        {form.getFieldDecorator('serviceid', {
                            rules: [{
                                required: true,
                                message: 'serviceid！'
                            }],
                        })(
                            serviceData == null ? <div/> :
                                <Select style={{width: 160}} onChange={this.onChangeservice}>
                                    {
                                        serviceData.map(data => (
                                                <Option value={data.serviceID}>{data.serviceName}</Option>
                                            )
                                        )
                                    }


                                    {/*<Option value={"1"}>Administrator</Option>*/}
                                    {/*<Option value={"2"}>Staff</Option>*/}
                                    {/*<Option value={"3"}>Customer</Option>*/}

                                </Select>
                        )}
                    </Form.Item>


                </Form>
            </Modal>
        )
    }


}

export default Form.create()(AddQuote);