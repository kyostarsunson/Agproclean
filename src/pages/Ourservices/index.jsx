import React, { Component } from 'react'
import { WalletOutlined } from '@ant-design/icons'
import ourservices_1 from './ourservices_1.jpg'
import ourservices_2 from './ourservices_2.jpg'
import ourservices_3 from './ourservices_3.jpg'
import ourservices_4 from './ourservices_4.jpg'
import { Button } from 'antd'
import './index.css'

export default class Ourservices extends Component {
    render() {
        return (
            <div className='ourservices-body '>
                <div className='ourservice_item_1'>
                    <h1>Cleaning Service Calgary</h1>
                    <h2>Trest yourssrersres</h2>
                    <Button type='primary' size='large'>BOOK A CLEANING</Button>

                </div>
                <div className='ourservice_item_2'><img src={ourservices_1} alt=''></img></div>
                <div className='ourservice_item_3'><img src={ourservices_2} alt=''></img></div>
                <div className='ourservice_item_4'>
                    <h1>Natural Cleaning </h1>
                    <h1>Service and Product2</h1>
                    <h2>Our green cleaners are based on Grandma's na</h2>
                </div>
                <div className='ourservice_item_5'>
                    <h1>Providing the Best Service for Our Customers</h1>
                    <div>
                        <div>
                            <h3>Office Cleaning</h3>
                            <img src={ourservices_3} alt=''></img>
                        </div>
                        <div>
                            <h3>Office Cleaning</h3>
                            <img src={ourservices_4} alt=''></img>
                        </div>
                        <div>
                            <h3>Office Cleaning</h3>
                            <img src={ourservices_4} alt=''></img>
                        </div>
                        <div>
                            <h3>Office Cleaning</h3>
                            <img src={ourservices_4} alt=''></img>
                        </div>
                        <div>
                            <h3>Office Cleaning</h3>
                            <img src={ourservices_4} alt=''></img>
                        </div>
                        <div>
                            <h3>Office Cleaning</h3>
                            <img src={ourservices_4} alt=''></img>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
