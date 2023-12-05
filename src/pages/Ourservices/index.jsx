import React, {Component} from 'react'
import {WalletOutlined} from '@ant-design/icons'

import ourservices_00 from './service00.jpg'
import ourservices_01 from './service01.jpg'
import ourservices_1 from './service1.jpg'
import ourservices_2 from './service2.jpg'
import ourservices_3 from './service3.jpg'
import ourservices_4 from './service4.jpg'
import {Button, Row, Col} from 'antd'
import './index.css'

export default class Ourservices extends Component {

    onOk = () => {


        window.location.href = 'http://70.75.134.37:3001/login.html'
    }

    render() {
        return (

            <div className='ourservices-whole'>
                <div className='ourservices-body '>
                    <div className='ourservice_item_1'>
                        <h1>Cleaning Service Calgary</h1>

                        <h3> Treat yourself and your home to a top-quality cleaning services in Calgary. Born out of a
                            vision
                            to create toxin-free residential cleaning services, AG Pro Cleaning delivers a
                            professional-grade house cleaning in the Calgary areas without bringing any harmful
                            chemicals
                            into your home. Our trained teams use AG Pro Cleaning natural cleaning products and
                            microfiber
                            cloths exclusively, giving your house an all-natural shine that you can trust. Learn more
                            why
                            you should use AG Pro Cleaning services.</h3>
                        <div style={{height: 10}}></div>
                        <Button type='primary' size='large' onClick={this.onOk}>BOOK A CLEANING</Button>

                    </div>
                    <div className='ourservice_item_2'><img src={ourservices_00} alt=''></img></div>
                    <div className='ourservice_item_3'><img src={ourservices_01} alt=''></img></div>
                    <div className='ourservice_item_4'>
                        <h1>Natural Cleaning </h1>
                        <h3>
                            Service and Products Our green cleaners are based on natural home cleaning methods and are
                            formulated using cosmetic-grade natural ingredients like baking soda, organic essential
                            oils, and simple soaps. Plus, we added a high-tech twist with our range of microfiber
                            cloths, which are effective in picking up dirt and grime that cleaners with harsh chemicals
                            are simply not necessary.
                        </h3>
                    </div>
                    <div className='ourservice_item_5'>
                        <h1>Providing the Best Service for Our Customers</h1>
                        <div>
                            <div>
                                <h3>Office Cleaning</h3>
                                <img src={ourservices_1} alt=''></img>
                                <h4>Our deep cleaning services provide a comprehensive and detailed cleaning of your
                                    space, tackling even the toughest cleaning challenges.</h4>
                            </div>
                            <div>
                                <h3>Deep Cleaning</h3>
                                <img src={ourservices_2} alt=''></img>
                                <h4>Our expert cleaners provide a thorough cleaning of your space, using the best
                                    cleaning products and equipment to ensure it is spotless and tidy.</h4>
                            </div>
                            <div>
                                <h3>Spotless Cleaning</h3>
                                <img src={ourservices_3} alt=''></img>
                                <h4>Our eco-friendly cleaning services use only non-toxic and biodegradable cleaning
                                    products to provide a thorough and safe cleaning of your space, while protecting the
                                    environment.</h4>
                            </div>
                            <div>
                                <h3>Eco-Friendly Cleaning</h3>
                                <img src={ourservices_4} alt=''></img>
                                <h4>Our eco-friendly cleaning services use only non-toxic and biodegradable cleaning
                                    products to provide a thorough and safe cleaning of your space, while protecting the
                                    environment.</h4>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        )
    }
}
