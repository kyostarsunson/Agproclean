import React, {Component} from 'react'
import Socialmedia from '../Socialmedia'
import {Divider, Button, Input, Form, message} from 'antd'
import Copyright from '../Copyright'
import "./index.css"
import axios from "axios";

export default class MyFoot extends Component {

    handlesubmit = (e) => {

        if (this.subscriptemail.value.includes("@") <= 0) {
            message.error("Not an email address")
            return;
        }

        console.log('in handlesubmit,subscriptemail=', this.subscriptemail.value);
        axios.post('http://70.75.134.37:3001/api1/addSubs', {email: this.subscriptemail.value}).then((res) => {
            if (res.data.code === '1') {
                message.success(res.data.message)
            } else
                message.error(res.data.message)
        });

    }

    onChange = (editorState) => {
        const {form} = this.props;
        this.setState({editorState});
        form.setFieldsValue({content: editorState});
    }

    render() {
        return (<div className='footer'>

            {/* <Socialmedia></Socialmedia><hr />
        <Contact></Contact><hr />
        <Copyright></Copyright><Divider /> */}


            <footer>
                <div class="top">

                    <div class="flex">

                        <li><a href='https://www.facebook.com/songlie.xu.3/'>Facebook</a></li>
                        <li><a href='https://twitter.com/EnceladusMeTwitter'>Twitter</a></li>
                        <li><a href='https://linkedin.com/in/songlie-xu-67b106b2'>Linkln</a></li>
                        <li><a href='https://linkedin.com/in/songlie-xu-67b106b2'>Instagram</a></li>
                    </div>
                </div>
                <div>
                    <div class="footer-columns">
                        <div class="contacts">
                            <h3>Contact Us</h3><p>123 ABC AVE NE, CALGARY, ALBERTA, T2A 5E2</p>
                            <a href="" className="tel">+1 [403] 123-1234</a>
                            <div class={{"height": 10}}>
                                <img src="" alt="" className="phone"/>

                            </div>
                            <a href="mailto:AGPCLEANINGINFO@GMAIL.COM" class="mail">AGPCLEANINGINFO@GMAIL.COM</a>
                        </div>
                        <div>
                            <h3>Our Links</h3>
                            <ul>
                                <li>
                                    <a href="./Aboutus" className="socialmedia">About Us</a>
                                </li>
                                <li style={{display: "none"}}>
                                    Meet our team
                                </li>
                                <li style={{display: "none"}}>
                                    What we do
                                </li>
                                <li style={{display: "none"}}>
                                    News
                                </li>
                                <li>
                                    <a href="./Contact" className="Contact">Contact us</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>Our Services</h3>
                            <ul>
                                <li>
                                    <a href="./Apartment" className="Apartment">Apartment cleaning</a>
                                </li>
                                <li>
                                    <a href="./Housecleaning" className="Housecleaning">House cleaning</a>
                                </li>
                                <li>
                                    <a href="./Carpetcleaning" className="Carpetcleaning">Carpet cleaning</a>

                                </li>
                                <li>
                                    <a href="./Afterrenovation" className="Afterrenovation">After renovation</a>
                                </li>
                                <li>
                                    <a href="./Curtaincleaning" className="Curtaincleaning">Curtain cleaning</a>
                                </li>
                                <li>
                                    <a href="./Windowcleaning" className="Windowcleaning">Window cleaning</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>Newsletter
                            </h3>
                            <p>Subscribe to our newsletter to get our latest update & news!</p>

                            <input placeholder={" E.g agpcleaning@gmail.com "}
                                   style={{height: 40, width: 250}}
                                   ref={(c) => (this.subscriptemail = c)}></input>
                            <div style={{height: 20}}></div>
                            <Button type='primary' size='large' onClick={this.handlesubmit}>SUBSCRIBE</Button>

                        </div>
                    </div>
                </div>
            </footer>


        </div>)
    }
}
