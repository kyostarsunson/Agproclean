import React, { Component } from 'react'
import { Card } from 'antd'
import blog1 from './blog1.jpg'

import './index.css'

export default class Blog extends Component {
    render() {
        return (
            <div>

                <div class='blog_item1'>
                    <h2>Susainable Living</h2>
                    <div className='blog_item_card'>
                        <Card hoverable style={{ width: 300 }} cover={<img alt="example" src={blog1} />}>
                            <h3>Origanic Natural Produt</h3>
                            <p>We user .....</p>
                            <a href=''>Our Product</a>
                        </Card>  <Card hoverable style={{ width: 300 }} cover={<img alt="example" src={blog1} />}>
                            <h3>Origanic Natural Produt</h3>
                            <p>We user .....</p>
                            <a href=''>Our Product</a>
                        </Card>  <Card hoverable style={{ width: 300 }} cover={<img alt="example" src={blog1} />}>
                            <h3>Origanic Natural Produt</h3>
                            <p>We user .....</p>
                            <a href=''>Our Product</a>
                        </Card>
                    </div>

                    <h2>Cleanning tips</h2>
                    <div className='blog_item_card'>
                        <Card hoverable style={{ width: 300 }} cover={<img alt="example" src={blog1} />}>
                            <h3>Origanic Natural Produt</h3>
                            <p>We user .....</p>
                            <a href=''>Our Product</a>
                        </Card>  <Card hoverable style={{ width: 300 }} cover={<img alt="example" src={blog1} />}>
                            <h3>Origanic Natural Produt</h3>
                            <p>We user .....</p>
                            <a href=''>Our Product</a>
                        </Card>  <Card hoverable style={{ width: 300 }} cover={<img alt="example" src={blog1} />}>
                            <h3>Origanic Natural Produt</h3>
                            <p>We user .....</p>
                            <a href=''>Our Product</a>
                        </Card>
                    </div>


                    <h2>Checklist &  Schedules</h2>
                    <div className='blog_item_card'>
                        <Card hoverable style={{ width: 300 }} cover={<img alt="example" src={blog1} />}>
                            <h3>Origanic Natural Produt</h3>
                            <p>We user .....</p>
                            <a href=''>Our Product</a>
                        </Card>  <Card hoverable style={{ width: 300 }} cover={<img alt="example" src={blog1} />}>
                            <h3>Origanic Natural Produt</h3>
                            <p>We user .....</p>
                            <a href=''>Our Product</a>
                        </Card>  <Card hoverable style={{ width: 300 }} cover={<img alt="example" src={blog1} />}>
                            <h3>Origanic Natural Produt</h3>
                            <p>We user .....</p>
                            <a href=''>Our Product</a>
                        </Card>
                    </div>

                    <h2>Laudry Detergent How-To's</h2>
                    <div className='blog_item_card'>
                        <Card hoverable style={{ width: 300 }} cover={<img alt="example" src={blog1} />}>
                            <h3>Origanic Natural Produt</h3>
                            <p>We user .....</p>
                            <a href=''>Our Product</a>
                        </Card>  <Card hoverable style={{ width: 300 }} cover={<img alt="example" src={blog1} />}>
                            <h3>Origanic Natural Produt</h3>
                            <p>We user .....</p>
                            <a href=''>Our Product</a>
                        </Card>  <Card hoverable style={{ width: 300 }} cover={<img alt="example" src={blog1} />}>
                            <h3>Origanic Natural Produt</h3>
                            <p>We user .....</p>
                            <a href=''>Our Product</a>
                        </Card>
                    </div>
                </div>

            </div>
        )
    }
}
