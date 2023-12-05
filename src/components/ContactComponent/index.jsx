import React, {Component} from 'react'
import "./index.css"
import {Button, Input, message} from 'antd';

const {TextArea} = Input;
export default class ContactComponent extends Component {

    onOk = () => (

        message.success("We have record your contact information and will contact you as so as possible.")
    )

    render() {
        return (

            <div className='contactParent'>
                <div className='contact'>

                    <div>
                        <h1>Have Questions? </h1>
                        <div>
                            Please feel free to call or email us
                            or use our contact form to get in touch with us.
                            We look forward to hearing from you!
                        </div>
                        <h2>Emergency? </h2>
                        <div>Call Us: +1234567890</div>
                        <h2>Send Us Mail</h2>
                        <div><a href="mailto:AGPCLEANINGINFO@GMAIL.COM" className="mail">AGPCLEANINGINFO@GMAIL.COM</a>
                        </div>

                        <h2>Find our office</h2>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6677.759826721212!2d-115.57338806005393!3d51.17607279542116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5370cb9d2193a807%3A0xef970abbb3f4e46a!2sBear%20Street%20Outfitters!5e0!3m2!1sen!2sca!4v1701422872874!5m2!1sen!2sca"
                            width="500" height="320" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className='sendMessage'>

                        
                        <Input size="large" placeholder='Name'></Input>
                        <Input size="large" placeholder='Email Address'></Input>
                        <Input size="large" placeholder='Subject'></Input>
                        <TextArea rows={6}/>
                        <div style={{height: 10}}></div>

                        <Button type="primary" size='large' onClick={this.onOk}>Contact us</Button>

                    </div>

                </div>
            </div>
        )
    }
}

