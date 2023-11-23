import React, {Component} from 'react'
import {Button} from "antd";
import './index.css'

export default class Home extends Component {
	render() {

		return (
			<div className='home'>
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
		)
	}
}
