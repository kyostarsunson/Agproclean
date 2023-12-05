import React, {Component} from 'react'
import {Button} from 'antd';
import 'antd/dist/antd.min.css'
import './index.css'

export default class Home extends Component {
    onOk = () => {
        this.props.history.push('/More')
    }

    render() {

        return (
            <div className='home'>
                <div className='hoverword'>
                    <h3>Welcome to our website</h3>
                    <h1>CLEANING SERVICES</h1>
                    <h2>YOUR FIRST CHOICE</h2>
                    <Button size='large' onClick={this.onOk}> Read More</Button>
                    &nbsp;
                    <Button type="primary" size='large' onClick={() => (this.props.history.push('/Contact'))}>Contact
                        us</Button>


                </div>
                <div className='bannerbox'>
                    <div className='banner'>

                    </div>
                </div>

            </div>
        )
    }
}
