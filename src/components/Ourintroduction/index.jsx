import React, {Component} from "react";
import introduction1 from "./introduction1.jpg";
import introduction2 from "./introduction2.jpg";
import introduction3 from "./introduction3.jpg";
import introduction4 from "./introduction4.jpg";
import introduction5 from "./introduction5.jpg";
import star from "./star.jpg"

import {Card, Col, Row, Button, Avatar, List} from "antd";
import "./index.css";

const {Meta} = Card;

const tableData = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];


export default class Ourintroduction extends Component {
    render() {
        return (
            <div className='ourservices-whole'>
                <div className="container2">
                    <div className="aboutus_item_0">

                    </div>

                    <div className="aboutus_item_1">
                        <img src={introduction1} alt=""></img>
                    </div>
                    <div className="aboutus_item_2">

                        <h2>Our Introduction</h2>
                        <h3>One Stop Commercial Cleaning Company</h3>
                        <h3>
                            When it comes to the health of your family, there should be no compromise. AGProCleaning
                            was
                            born out of a parent's journey to find a safe and effective alternative to
                            chemical-based
                            cleaning products. You can trust our eco-friendly products for your family and pets
                            because
                            we trust them for ours.
                        </h3>

                    </div>

                    <div className="aboutus_item_3">
                        <h2>Best Experts in Calgary</h2>
                        <h3>Your happiness is our first priority</h3>
                        <h3>When it comes to the health of your family, there should be no compromise.
                            AspenClean was born out of a parent's journey to find a safe and effective alternative to
                            chemical-based cleaning products. You can trust our eco-friendly products for your family
                            and pets, because we trust them for ours.
                        </h3>

                        <div style={{height: 30}}></div>
                        <h2>Residential Cleaning service UP TO 10 Categories</h2>


                        <h2>Commercial Cleaning Services UP TO 5 Categories</h2>

                    </div>

                    <div className="aboutus_item_4">
                        <img src={introduction2}></img>
                    </div>


                    <div className="aboutus_item_5">
                        <h1>What Makes AgPro Cleaning Special</h1>

                        <div>
                            <Row gutter={300}>
                                <Col>
                                    <Card hoverable style={{width: 360}}
                                          cover={<img alt="example" src={introduction4}/>}>
                                        <h3>Origanic Natural Produt</h3>
                                        <p>We use only 100% natural, Ecocert certified cleaning products! Our products
                                            derived from plants, with organic essential oils that are fully vegan, and
                                            child</p>
                                        <a href="">Our Product</a>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card hoverable style={{width: 360}}
                                          cover={<img alt="example" src={introduction3}/>}>
                                        <h3>100% Client Satisfaction</h3>
                                        <p>If you're not 100% satisfied with your service, contact us within 24 hours of
                                            your service and we'll re-clean your home at no extra charge.</p>
                                        <a href="">Our Product</a>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card hoverable style={{width: 360}}
                                          cover={<img alt="example" src={introduction5}/>}>
                                        <h3>Trusted & Dependable</h3>
                                        <p>All AG Pro teams are dependable, trustworthy and professional. Every team
                                            member is carefully selected, fully trained, insured and bonded.</p>
                                        <a href="">Our Product</a>
                                    </Card>
                                </Col>

                            </Row>
                        </div>

                    </div>


                    <div className="aboutus_item_6">

                        <h1>What our Client are Saying</h1>


                        <div className="aboutus_item_6_figure">
                            <figure style={{"text-align": "left", "width": 500}}>
                                <img src={star} style={{width: 20}}/>
                                <img src={star} style={{width: 20}}/>
                                <img src={star} style={{width: 20}}/>
                                <img src={star} style={{width: 20}}/>
                                <img src={star} style={{width: 20}}/>
                                <br/>
                                <div style={{"height": 200}}>
                                    agproclean's eco-friendly cleaning is a game-changer. We love coming home to a
                                    fresh,
                                    clean space, knowing we're doing our part for the environment.
                                    We were blown away by agproclean's spotless cleaning service. Their team takes the
                                    time
                                    to understand your needs and delivers exceptional results every time.
                                </div>
                                <div style={{"height": 10}}></div>
                                <Avatar size={90}
                                        src="https://10web-site.ai/16/wp-content/uploads/sites/18/2023/08/testimonial1_divpsa0X.webp"/>
                                <figcaption><em>EMILY HUNT</em></figcaption>
                            </figure>

                            <figure style={{"text-align": "left", "width": 500}}>
                                <img src={star} style={{width: 20}}/>
                                <img src={star} style={{width: 20}}/>
                                <img src={star} style={{width: 20}}/>
                                <img src={star} style={{width: 20}}/>
                                <img src={star} style={{width: 20}}/>

                                <br/>
                                <div style={{"height": 200}}>
                                    agproclean's team is professional, reliable, and thorough. Their deep cleaning
                                    service left our office looking and feeling fresh, boosting morale and
                                    productivity..
                                </div>
                                <div style={{"height": 10}}></div>
                                <Avatar size={90}
                                        src="https://10web-site.ai/16/wp-content/uploads/sites/18/2023/08/testimonial2_divpsa0X.webp"/>
                                <figcaption><em>JULIE ROBINSON</em></figcaption>
                            </figure>
                            <figure style={{"text-align": "left", "width": 500}}>
                                <img src={star} style={{width: 20}}/>
                                <img src={star} style={{width: 20}}/>
                                <img src={star} style={{width: 20}}/>
                                <img src={star} style={{width: 20}}/>
                                <img src={star} style={{width: 20}}/>


                                <br/>
                                <div style={{"height": 200}}>
                                    agproclean's eco-friendly cleaning is a breath of fresh air. Not only do they
                                    provide spotless cleaning, but they do it in a way that's kind to the environment.
                                </div>
                                <div style={{"height": 10}}></div>
                                <Avatar size={90}
                                        src="https://10web-site.ai/16/wp-content/uploads/sites/18/2023/08/testimonial3_divpsa0X.webp"/>
                                <figcaption><em>JAMES BROOK</em></figcaption>
                            </figure>

                        </div>
                    </div>


                </div>
            </div>
        );
    }
}
