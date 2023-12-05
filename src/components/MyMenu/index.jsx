import React, {Component} from 'react';
import './index.css'
import {NavLink} from 'react-router-dom';
import {Switch, Route, Redirect} from 'react-router-dom';
import Aboutus from '../../pages/Aboutus'
import More from '../../pages/More'
import Apartment from '../../pages/Apartment'
import Housecleaning from '../../pages/Housecleaning'
import Carpetcleaning from '../../pages/Carpetcleaning'
import Afterrenovation from '../../pages/Afterrenovation'
import Curtaincleaning from '../../pages/Curtaincleaning'
import Windowcleaning from '../../pages/Windowcleaning'


import {BarsOutlined} from '@ant-design/icons';

import Project from '../../pages/Project'
import Blog from '../../pages/Blog'
import ContactPage from '../../pages/ContactPage'
import Ourservices from '../../pages/Ourservices'
import Login from '../../pages/Login'
import LoginForm from '../../login/LoginForm'

import background from '../../pages/Home/background.png'
import {Button} from 'antd';
import Home from "../../pages/Home";

export default class MyMenu extends Component {

    render() {
        return (
            <div className="menuandbanner">

                <div className='menu'>
                    <img className='logo' alt=''></img>
                    <ul className="nav">
                        <li>
                            < NavLink className={({isActive}) => (isActive ? "activeButton" : "")} {...this.props}
                                      to="/home">HOME</NavLink>
                        </li>
                        <li>
                            < NavLink className={({isActive}) => (isActive ? "activeButton" : "")} {...this.props}
                                      to="/Aboutus">ABOUT US</NavLink>
                        </li>
                        <li>
                            < NavLink className={({isActive}) => (isActive ? "activeButton" : "")} {...this.props}
                                      to="/Ourservices">OUR SERVICES</NavLink>
                        </li>
                        {/*<li>*/}
                        {/*    < NavLink className={({isActive}) => (isActive ? "activeButton" : "")} {...this.props}*/}
                        {/*              to="/Project">PROJECT</NavLink>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*	< NavLink className={({isActive}) => (isActive ? "activeButton" : "")} {...this.props}*/}
                        {/*			  to="/Blog">BLOG</NavLink>*/}
                        {/*</li>*/}
                        <li>
                            < NavLink className={({isActive}) => (isActive ? "activeButton" : "")} {...this.props}
                                      to="/Contact">CONTACT</NavLink>
                        </li>
                        <li>
                            <div className='flex-end'>

                                <a href="login.html" target="_blank" rel="noopener noreferrer">
                                    <div class="user">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                             fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                            <path fill-rule="evenodd"
                                                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                        </svg>
                                    </div>
                                </a>
                            </div>

                        </li>
                    </ul>

                </div>


                <Switch>
                    <Route path='/Aboutus' component={Aboutus}/>
                    <Route path='/Blog' component={Blog}/>
                    <Route path='/Ourservices' component={Ourservices}/>
                    <Route path='/Project' component={Project}/>
                    <Route path='/Blog' component={Blog}/>
                    <Route path='/Contact' component={ContactPage}/>
                    <Route path='/Login' component={Login}/>
                    <Route path='/Home' component={Home}/>
                    <Route path='/Apartment' component={Apartment}/>
                    <Route path='/Housecleaning' component={Housecleaning}/>
                    <Route path='/Carpetcleaning' component={Carpetcleaning}/>
                    <Route path='/Afterrenovation' component={Afterrenovation}/>
                    <Route path='/Curtaincleaning' component={Curtaincleaning}/>
                    <Route path='/Windowcleaning' component={Windowcleaning}/>


                    <Route path='/More' component={More}/>


                    <Redirect to='/home'/>
                </Switch>


            </div>
        )
    }
}

