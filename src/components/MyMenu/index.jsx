import React, { Component } from 'react';
import './index.css'
import { NavLink } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from '../../pages/Aboutus'

import { BarsOutlined } from '@ant-design/icons';

import Project from '../../pages/Project'
import Blog from '../../pages/Blog'
import Contact from '../../pages/Contact'
import Ourservices from '../../pages/Ourservices'
import Login from '../../pages/Login'



import background from './background.png'
import { Button } from 'antd';



export default class MyMenu extends Component {

    render() {
        return (
            <div>
                <div className='menu'>
                    <img className='logo' alt=''></img>
                    <ul className="nav">
                        <li>

                            < NavLink className={({ isActive }) => (isActive ? "activeButton" : "")} {...this.props} to="/home" >HOME</NavLink>
                        </li>
                        <li>
                            < NavLink className={({ isActive }) => (isActive ? "activeButton" : "")} {...this.props} to="/Aboutus" >ABOUT US</NavLink>
                        </li>
                        <li>
                            < NavLink className={({ isActive }) => (isActive ? "activeButton" : "")} {...this.props} to="/Ourservices" >OUR SERVICES</NavLink>
                        </li>
                        <li>
                            < NavLink className={({ isActive }) => (isActive ? "activeButton" : "")} {...this.props} to="/Project" >PROJECT</NavLink>
                        </li>
                        <li>
                            < NavLink className={({ isActive }) => (isActive ? "activeButton" : "")} {...this.props} to="/Blog" >BLOG</NavLink>
                        </li>
                        <li>
                            < NavLink className={({ isActive }) => (isActive ? "activeButton" : "")} {...this.props} to="/Contact" >CONTACT</NavLink>
                        </li>
                        <li>
                            <div>
                                <span><a href="login.html" target="_blank" rel="noopener noreferrer"> <BarsOutlined style={{ fontSize: '36px', color: 'white', textAlign: 'center' }} /></a></span>
                            </div>
                        </li>
                    </ul>

                </div>
                <div className='hoverword'>
                    <h3>welcom to our webstie</h3>
                    <h1>CLEANING SERVICES</h1>
                    <h2>YOUR FIRST CHOISE</h2>
                    <Button size='large'> Read More</Button>

                    <Button type="primary" size='large'>Contact us</Button>
                </div>
                <div className='bannerbox'>
                    <div className='banner'>
                        <img src={background} alt=''></img>
                    </div>
                </div>



                <Switch>
                    <Route path='/Aboutus' component={About} />
                    <Route path='/Blog' component={Blog} />
                    <Route path='/Ourservices' component={Ourservices} />
                    <Route path='/Project' component={Project} />
                    <Route path='/Blog' component={Blog} />
                    <Route path='/Contact' component={Contact} />
                    <Route path='/Login' component={Login} />

                    <Redirect to='/home' />
                </Switch>

            </div>
        )
    }
}

