import React, {Component} from 'react'
import {Row, Col, Button, message, Table, Modal} from 'antd'
import AdminManager from './AdminManager'
import axios from 'axios'

export default class AddService extends Component {
    onAddService = () => {
        axios.post('http://70.75.134.37:3001/api1/addService', {
            serviceName: this.serviceName.value,
            rate: this.rate.value,
            description: this.descript.value
        }).then((res) => {
            if (res.data.code === '1') {
                message.success(res.data.message)
                this.props.history.push('/Services')
            } else
                message.error(res.data.message)
        });
    }

    render() {


        return (
            <AdminManager>

                <form onSubmit={this.onAddService}>
                    <Row>
                        <Col span={24}>
                            <h1>New Service Information</h1>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4}><h2>Service Name</h2>
                            <input ref={(c) => (this.serviceName = c)}></input>
                        </Col>
                        <Col span={4}><h2>Per Hr.Rate</h2>
                            <input ref={(c) => (this.rate = c)}></input>
                        </Col>
                        <Col span={4}><h2>Descript</h2>
                            <input ref={(c) => (this.descript = c)}></input>
                        </Col>
                        <Col span={4}>
                            <Button type='primary' size='large' onClick={this.onAddService}>+Add New Service</Button>
                        </Col>
                    </Row>
                </form>
            </AdminManager>
        )
    }
}
