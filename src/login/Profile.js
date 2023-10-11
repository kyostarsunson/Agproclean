import { Row, Col, Checkbox, Button, Input } from 'antd'
import React, { Component } from 'react'
import AdminManager from './AdminManager'

export default class Profile extends Component {
    render() {
        return (
            <AdminManager>

                <Row span={24}>
                    <Col><h1>User Profile</h1> </Col>
                </Row>

                <Row span={24}>
                    <Col span={4}>
                        <div>
                            <h1>My Profile</h1>

                            <h4>Only .jpg .png .jpeg allowed</h4>

                            <h2>Facebook(optional)</h2>
                            <Input></Input>
                            <h2>Instagram(optional)</h2>
                            <Input></Input>
                            <h2>Twitter(optional)</h2>
                            <Input></Input>

                        </div>


                    </Col>

                    <Col span={10} offset={1}>
                        <h2>User Information</h2>
                        <Col span={10}>
                            <h2>First Name:</h2>
                            <Input></Input>
                            <h2>Address 1:</h2>
                            <Input></Input>
                            <h2>Email:</h2>
                            <Input></Input>
                            <h2>Phone Number:</h2>
                            <Input></Input>

                        </Col>

                        <Col span={10}>
                            <h2>Last Name:</h2>
                            <Input></Input>
                            <h2>Address 2:</h2>
                            <Input></Input>
                            <h2>Postal Code:</h2>
                            <Input></Input>
                            <h2>Alternate Phone Number:</h2>
                            <Input></Input>

                        </Col>

                        <Row>
                            <Col>
                                <hr></hr>
                                <h2>Security</h2>
                                User Name:
                                <Input></Input>
                                Password:
                                <Input></Input>
                                Repeat Password:
                                <Input></Input>
                                <Checkbox> Eanble Two-Factor Authentication</Checkbox>
                                <Button type="primary" size="large">Update Profile</Button>

                            </Col>

                        </Row>

                    </Col>



                </Row>


            </AdminManager>
        )
    }
}
