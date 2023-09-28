import React, { Component } from 'react'
import { Card } from 'antd'
import officecleaning from './officecleaning.jpg'
import './index.css'

export default class Blog extends Component {
    render() {
        return (
            <div>
                <div className='blog_container'>

                    <Card hoverable style={{ width: 300 }} cover={<img alt="example" src={officecleaning} />}>
                        <h3>Origanic Natural Produt</h3>
                        <p>We user .....</p>
                        <a href=''>Our Product</a>
                    </Card> <Card hoverable style={{ width: 300 }} cover={<img alt="example" src={officecleaning} />}>
                        <h3>Origanic Natural Produt</h3>
                        <p>We user .....</p>
                        <a href=''>Our Product</a>
                    </Card>
                    <Card hoverable style={{ width: 300 }} cover={<img alt="example" src={officecleaning} />}>
                        <h3>Origanic Natural Produt</h3>
                        <p>We user .....</p>
                        <a href=''>Our Product</a>
                    </Card>
                    <Card hoverable style={{ width: 300 }} cover={<img alt="example" src={officecleaning} />}>
                        <h3>Origanic Natural Produt</h3>
                        <p>We user .....</p>
                        <a href=''>Our Product</a>
                    </Card> 

                </div>

            </div>
        )
    }
}
