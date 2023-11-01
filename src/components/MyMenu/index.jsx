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
            <div className="menuandbanner">
                <div>
                    <div className='menu' >
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
                                <div className='flex-end'>

                                    <a href="login.html" target="_blank" rel="noopener noreferrer">
                                        <div class="user"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                        </svg></div>
                                    </a>
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

                    </div>
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

