import React, {PureComponent} from 'react';
import {create, Form, Modal, Input, Switch, message} from 'antd';
import 'braft-editor/dist/index.css'
import BraftEditor from 'braft-editor'
import moment from 'moment'
import {Button} from 'antd'


import axios from 'axios'

class AddNews extends PureComponent {

    componentDidMount() {

        // 异步设置编辑器内容
        setTimeout(() => {
            this.props.form.setFieldsValue({
                content: BraftEditor.createEditorState('<h4>Wellcome to AGPROClean Company.</h4>')
            })
        }, 1000)

    }

    //
    // onOk = () => {
    //     this.props.form.validateFields((err, values) => {
    //         var myloginname = sessionStorage.getItem('loginname');
    //         var accountid = sessionStorage.getItem('accountid');
    //         let data = {...values, accountid};
    //
    //         console.log('in AddNews,data=', data);
    //
    //
    //         // axios.post('http://localhost:3001/api1/addQuote', {...data}).then((res) => {
    //         //     if (res.data.code === '1') {
    //         //         message.success(res.data.message)
    //         //
    //         //     }
    //         // });
    //     })
    // };

    handleChange = (editorState) => {
        const {form} = this.props;
        this.setState({editorState});
        form.setFieldsValue({content: editorState});
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const currentData = moment().format('YYYY-MM-DD');
        this.props.form.validateFields((error, values) => {
            if (!error) {
                const submitData = {
                    title: values.title,
                    content: values.content.toHTML() // or values.content.toHTML()
                }
                console.log(submitData)
                let data = {
                    newslettersubject: submitData.title,
                    newslettercontent: submitData.content,
                    newsletterdate: currentData
                };
                console.log('in AddNews,data=', data);

                axios.post('http://70.75.134.37:3001/api1/addNews', {
                    newslettersubject: submitData.title,
                    newslettercontent: submitData.content,
                    newsletterdate: currentData
                }).then((res) => {
                    if (res.data.code === '1') {
                        message.success(res.data.message)
                        this.props.onOk()
                    } else
                        message.error(res.data.message)
                });
            }
        })

    }

    render() {
        const formItemLayout = {
            labelCol: {span: 4},
            wrapperCol: {span: 17},
        }

        const {visible, onOk, onCancel, form} = this.props;

        const {getFieldDecorator} = this.props.form
        const controls = ['bold', 'italic', 'underline', 'text-color', 'separator', 'link', 'separator', 'media']

        return (

            <Modal visible={visible} onOk={this.handleSubmit} onCancel={onCancel} okButtonProps={{disabled: true}}
                   cancelButtonProps={{disabled: true}}>
                <div className="demo-container">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item {...formItemLayout} label="Title">
                            {getFieldDecorator('title', {
                                rules: [{
                                    required: true,
                                    message: 'Please input the title',
                                }],
                            })(
                                <Input size="large" placeholder="Please input title"/>
                            )}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="Content">
                            {getFieldDecorator('content', {
                                validateTrigger: 'onBlur',
                                rules: [{
                                    required: true,
                                    validator: (_, value, callback) => {
                                        if (value.isEmpty()) {
                                            callback('Please input the content')
                                        } else {
                                            callback()
                                        }
                                    }
                                }],
                            })(
                                <BraftEditor
                                    className="my-editor"
                                    controls={controls}
                                    placeholder="Please input the content of the newsletter."
                                    onChange={this.handleChange}
                                />
                            )}
                        </Form.Item>
                        <Form.Item {...formItemLayout}>
                            <Button size="large" type="primary" htmlType="submit">SUBMIT</Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        )

    }

}

export default Form.create()(AddNews);