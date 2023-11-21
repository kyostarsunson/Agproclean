import React, { Component } from "react";
import introduction1 from "./introduction1.jpg";
import introduction2 from "./introduction2.jpg";
import introduction3 from "./introduction3.jpg";
import introduction4 from "./introduction4.jpg";
import { Card, Col, Row, Button } from "antd";
import "./index.css";

export default class Ourintroduction extends Component {
    render() {
        return (
            <div className="container2">
                <div className="aboutus_item_1">
                    <img src={introduction1} alt=""></img>
                </div>
                <div className="aboutus_item_2">
                
                    <h2>Our Introduction</h2>
                    <h2>One Stop Commercial Cleaning Company</h2>
                    <h2>
                        When it comes to the health of your family, there should be no compromise.
                        AspenClean was born out of a parent's journey to find a safe and effective alternative to chemical-based cleaning products. You can trust our eco-friendly products for your family and pets, because we trust them for ours.</h2>
                   
                </div>
                <div>+1 (403) 123-1234</div>
                <div className="aboutus_item_3">
                    <h3>Best Experts in Calgary</h3>
                    <h2>Your happiness is our first priority</h2>
                    <h2>When it comes to the health of your family, there should be no compromise.
                        AspenClean was born out of a parent's journey to find a safe and effective alternative to chemical-based cleaning products. You can trust our eco-friendly products for your family and pets, because we trust them for ours.</h2>
                    <div>
                        <h2>Residential Cleaning service</h2>
                    </div>
                    <div>
                        <h2>Commercial Cleaning Services</h2>
                    </div>
                </div>

                <div className="aboutus_item_4">
                    <img src={introduction2}></img>
                </div>

                <div className="aboutus_item_5">
                    <h1>What Makes AgPro Cleaning Special</h1>




                    <Row gutter={8}>
                        <Col span={4}>
                            <Card hoverable style={{ width: 300 }} cover={<img alt="example" src={introduction3} />}>
                                <h3>Origanic Natural Produt</h3>
                                <p>We user .....</p>
                                <a href="">Our Product</a>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card hoverable style={{ width: 300 }} cover={<img alt="example" src={introduction3} />}>
                                <h3>Origanic Natural Produt</h3>
                                <p>We user .....</p>
                                <a href="">Our Product</a>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card hoverable style={{ width: 300 }} cover={<img alt="example" src={introduction3} />}>
                                <h3>Origanic Natural Produt</h3>
                                <p>We user .....</p>
                                <a href="">Our Product</a>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card hoverable style={{ width: 300 }} cover={<img alt="example" src={introduction3} />}>
                                <h3>Origanic Natural Produt</h3>
                                <p>We user .....</p>
                                <a href="">Our Product</a>
                            </Card>
                        </Col>  <Col span={4}>
                            <Card hoverable style={{ width: 300 }} cover={<img alt="example" src={introduction3} />}>
                                <h3>Origanic Natural Produt</h3>
                                <p>We user .....</p>
                                <a href="">Our Product</a>
                            </Card>
                        </Col>  <Col span={4}>
                            <Card hoverable style={{ width: 300 }} cover={<img alt="example" src={introduction3} />}>
                                <h3>Origanic Natural Produt</h3>
                                <p>We user .....</p>
                                <a href="">Our Product</a>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className="aboutus_item_6">
                    <h1>What our Client are Saying</h1>
                    <div className="aboutus_item_6_1">
                        <div></div>

                        <div></div>

                        <div></div>

                        <div></div>

                        <div></div>
                    </div>
                </div>
                <div className="aboutus_item_7">
                    <h2>We've Team Members</h2>
                    <h1>Meet Our Experienced & Professional Team</h1>
                    <div className="aboutus_item_7_1">
                        <div>
                            <Button type="primary" shape="round" size="large">
                                Khah Hoa Nguyen Office Cleaner
                            </Button>
                        </div>
                        <div>
                            <Button type="primary" shape="round" size="large">
                                Khah Hoa Nguyen Office Cleaner
                            </Button>
                        </div>
                        <div>
                            <Button type="primary" shape="round" size="large">
                                Khah Hoa Nguyen Office Cleaner
                            </Button>
                        </div>
                       
                    </div>
                </div>
            </div>
        );
    }
}
