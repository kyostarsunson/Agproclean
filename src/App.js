import React, {Component} from 'react'
import MyMenu from './components/MyMenu'
import {Redirect, Switch, Route} from 'react-router-dom';

import MyFoot from './components/MyFoot'
import {Layout} from 'antd';

import './App.css';

import Blog from "./pages/Blog";
import Ourservices from "./pages/Ourservices";
import Project from "./pages/Project";
import ContactPage from "./pages/ContactPage";
import Login from "./pages/Login";
import Home from "./pages/Home"
import Aboutus from "./pages/Aboutus";
import About from "./pages/Aboutus";

class App extends Component {
    // componentDidMount() {
    //   console.log(`CowshedManagement componentDidMount`);
    //   console.log(this.scrollItem);
    //   // this.scrollItem.addEventListener(‘scroll’, this.onListScroll);
    //   // this.scrollItem.addEventListener(‘scroll’, this.onListScroll, true);
    //   window.addEventListener('scroll', this.processScroll, true);
    // };
    // componentWillUnmount() {
    //   console.log(`CowshedManagement componentWillUnmount`);
    //   console.log(this.scrollItem);
    //   // this.scrollItem.removeEventListener(‘scroll’, this.onListScroll);
    //   //this.scrollItem.removeEventListener(‘scroll’, this.onListScroll, true);
    //   window.removeEventListener('scroll', this.processScroll);
    // };

    processScroll = (event) => {
        //console.log('ffffffffffffffffffffffffffffffffff');

    };

    render() {

        return (
            <div onScroll={this.processScroll} className='mydiv' id='myApp'>
                <Layout>
                    <MyMenu></MyMenu>


                    <MyFoot></MyFoot>
                </Layout>
            </div>
        );
    }
}

export default App
