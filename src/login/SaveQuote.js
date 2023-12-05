import React, {PureComponent, useEffect} from 'react';
import {create, Form, Modal, Input, Switch, message, InputNumber, Select} from 'antd';
import axios from 'axios'

class SaveQuote extends PureComponent {

    state = {serviceData: null}
    formRef = React.createRef();

    componentWillMount() {
        console.log("in di mont ############", this.formRef)

        //this.formRef.current.setFieldsValue({city: 'ffffffffffffff'})
    }

    componentDidMount() {


    }


    getServiceData = () => {
        let that = this
        console.log('in  addappointment getServiceData:')
        axios
            .get("http://70.75.134.37:3001/api1/queryService")
            .then(
                (response) => {
                    console.log("success", response.data.data);
                    that.setState({serviceData: response.data.data});

                },
                (error) => {
                    // console.log(this)
                    alert("queryService fail")
                }
            );


    }


    onOk = () => {
        console.log('in adquote');

        const {savequoterecord} = this.props;
        const quoteid = savequoterecord.quoteid;
        let ts = this;

        this.props.form.validateFields((err, values) => {
            console.log('in adquote-0');
            if (!err) {
                console.log('in adquote-1');
                var myloginname = sessionStorage.getItem('loginname');
                var accountid = sessionStorage.getItem('accountid');
                let data = {...values, accountid};

                console.log('in adquote,myloginname=', myloginname);
                console.log('in adquote,accountid=', accountid);


                axios.post('http://70.75.134.37:3001/api1/updateQuote', {quoteid, ...data}).then((res) => {
                    if (res.data.code === '1') {
                        alert(res.data.message);
                        message.success(res.data.message)
                        ts.props.onOkSave();
                    } else {
                        alert(res.data.message);
                        message.error(res.data.message)
                    }
                });

            } else {


                console.log('in adquote-2');
                message.error("Please input the whole infomration")
            }
        })


    };

    getQuoteData = () => {
        console.log('in  addappointment getquoteData:')
        axios
            .get("http://70.75.134.37:3001/api1/queryQuoteByid?quoteid=1")
            .then(
                (response) => {
                    console.log("success", response.data.data);
                    this.setState({quoteData: response.data.data});

                },
                (error) => {
                    // console.log(this)
                    alert("queryService fail")
                }
            );
    }


    render() {

        const {visible, onOkSave, onCancel, form, savequoterecord} = this.props;
        const {serviceData} = this.state
        const {Option} = Select;
        if (Object.keys(savequoterecord).length === 0)
            return
        else {


        }
        // const {Option} = Select;
        var roleid = sessionStorage.getItem('roleid');

        console.log('in savequote-------------------,savequoterecordsavequoterecordsavequoterecordsavequoterecordsavequoterecord', savequoterecord);
        const formItemLayout = {
            labelCol: {span: 4},
            wrapperCol: {span: 17},
        }

        console.log('ffff,this.formRef=', this.formRef)

        //this.formRef.current.setFieldsValue({city: 'ffffffffffffff'})


        return (

            <Modal visible={visible} onOk={this.onOk} onCancel={onCancel} width={800}>

                <Form ref={this.formRef}  {...formItemLayout} initialValues={savequoterecord}>

                    <Form.Item label='address'>
                        {savequoterecord?.address}
                        {form.getFieldDecorator('address', {
                            rules: [{
                                required: true,
                                message: 'address！'
                            }],
                        })(
                            <Input/>)}
                    </Form.Item>
                    <Form.Item label='city'>
                        {savequoterecord?.city}
                        {form.getFieldDecorator('city', {
                            rules: [{
                                required: true,
                                message: 'city！'
                            }],
                        })(
                            <Input/>)}
                    </Form.Item>
                    <Form.Item label='postalcode'>
                        {savequoterecord?.postalcode}
                        {form.getFieldDecorator('postalcode', {
                            rules: [{
                                required: true,
                                message: 'postalcode！'
                            }],
                        })(
                            <Input/>)}
                    </Form.Item>
                    <Form.Item label='bedrooms'>
                        {savequoterecord?.bedrooms}
                        {form.getFieldDecorator('bedrooms', {
                            rules: [{
                                required: true,
                                message: 'bedrooms！'
                            }],
                        })(
                            <InputNumber min={0} max={50}/>)}
                    </Form.Item>
                    <Form.Item label='bathrooms'>
                        {savequoterecord?.bathrooms}
                        {form.getFieldDecorator('bathrooms', {
                            rules: [{
                                required: true,
                                message: 'bedrooms！'
                            }],
                        })(
                            <InputNumber min={0} max={20}/>)}
                    </Form.Item>
                    <Form.Item label='hardsurfacefloor'>
                        {savequoterecord?.hardsurfacefloor}
                        {form.getFieldDecorator('hardsurfacefloor', {
                            rules: [{
                                required: true,
                                message: 'hardsurfacefloor！'
                            }],
                        })(
                            <InputNumber min={0} max={20}/>)}
                    </Form.Item>
                    <Form.Item label='nicknacks'>
                        {savequoterecord?.nicknacks}
                        {form.getFieldDecorator('nicknacks', {
                            rules: [{
                                required: true,
                                message: 'nicknacks！'
                            }],
                        })(
                            <InputNumber min={0} max={50}/>)}
                    </Form.Item>
                    <Form.Item label='size(square feet)' name='size'>
                        {savequoterecord?.size}
                        {form.getFieldDecorator('size', {
                            rules: [{
                                required: true,
                                message: 'size！'
                            }],
                        })(
                            <InputNumber min={0} max={50000}/>)}
                    </Form.Item>
                    <Form.Item label='children'>
                        {savequoterecord?.children}
                        {form.getFieldDecorator('children', {
                            rules: [{
                                required: true,
                                message: 'children！'
                            }],
                        })(
                            <InputNumber min={0} max={50}/>)}
                    </Form.Item>
                    <Form.Item label='levels'>
                        {savequoterecord?.levels}
                        {form.getFieldDecorator('levels', {
                            rules: [{
                                required: true,
                                message: 'levels！'
                            }],
                        })(
                            <InputNumber min={0} max={50}/>)}
                    </Form.Item>
                    <Form.Item label='pets'>
                        {savequoterecord?.pets}
                        {form.getFieldDecorator('pets', {
                            rules: [{
                                required: true,
                                message: 'pets！'
                            }],
                        })(
                            <InputNumber min={0} max={50}/>)}
                    </Form.Item>
                    <Form.Item label='cleaningdate'>
                        {savequoterecord?.cleaningdate}
                        {form.getFieldDecorator('cleaningdate', {
                            rules: [{
                                required: true,
                                message: 'cleaningdate！'
                            }],
                        })(
                            <Input/>)}
                    </Form.Item>
                    <Form.Item label='cleaningtime'>
                        {savequoterecord?.cleaningtime}
                        {form.getFieldDecorator('cleaningtime', {
                            rules: [{
                                required: true,
                                message: 'cleaningtime！'
                            }],
                        })(
                            <Input/>)}
                    </Form.Item>
                    <Form.Item label='estimatecost(CA$)'>
                        {savequoterecord?.estimatecost}
                        {form.getFieldDecorator('estimatecost', {
                            rules: [{
                                required: true,
                                message: 'estimatecost！'
                            }],
                        })(
                            <InputNumber min={0} max={50000} disabled={roleid === '3'}/>)}
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

export default Form.create()(SaveQuote);