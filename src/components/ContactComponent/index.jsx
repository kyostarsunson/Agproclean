import React, {Component} from 'react'
import "./index.css"
import {Button, Input} from 'antd';

const {TextArea} = Input;
export default class ContactComponent extends Component {

	render() {
		return (

			<div className='contactParent'>
				<div className='contact'>

					<div>
						<h1>Have Questions? </h1>
						<div>
							Please feel free to call or email us,<br/>
							or use our contact form to get in touch with us.<br/>
							We look forward to hearing from you!<br/>
						</div>
						<h2>Emergency? </h2>
						<div>Call Us: +1234567890</div>

						<h2>Send Us Mail</h2>
						<div>info@example.com</div>

						<h2>Find the Studio</h2>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20029.057210086954!2d-114.0083727!3d51.133692849999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537166a11ef1a099%3A0x9d23a9fef939d03!2z5rip5b635aeG5Y2h5bCU5Yqg6YeM5py65Zy65rip55uW54m56YWS5bqX!5e0!3m2!1szh-CN!2sca!4v1700686192615!5m2!1szh-CN!2sca"
							width="300" height="200" allowFullScreen="" loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"></iframe>


					</div>
					<div className='sendMessage'>
						<Input size="large" placeholder='Name'></Input>
						<Input size="large" placeholder='Email Address'></Input>
						<Input size="large" placeholder='Subject'></Input>
						<TextArea rows={4}/>

						<Button type="primary" size='large'>Contact us</Button>
					</div>

				</div>
			</div>
		)
	}
}

