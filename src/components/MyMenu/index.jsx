import React, { Component } from 'react';
import './index.css'
import { MenuUnfoldOutlined } from '@ant-design/icons';
import background from './background.png'


export default class MyMenu extends Component {

    render() {
        return (
            <div>
                <div className='menu'>
                    <img className='logo' alt=''></img>
                    <ul className="nav">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">ABOUT US</a></li>
                        <li><a href="#">OUR SERVICES </a></li>
                        <li><a href="#">PROJECTS</a></li>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#">CONTACT</a></li>
                        <MenuUnfoldOutlined height={5} width={4} />
                    </ul>
                </div>
                <div className='hoverword'>
                    <h3>welcom to our webstie</h3>
                    <h1>Cleaning SERVICES</h1>
                    <h2>fdsafdsaf</h2>
                    <button> read</button>
                    <button> read22</button>
                </div>
                <div className='bannerbox'>
                    <div className='banner'>
                        <img src={background} alt=''></img>
                    </div>
                </div>

            </div>
        )
    }
}

