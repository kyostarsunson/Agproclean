import React, {Component} from 'react'
import Socialmedia from '../Socialmedia'
import {Divider} from 'antd'
import Copyright from '../Copyright'
import "./index.css"

export default class MyFoot extends Component {
	render() {
		return (<div className='footer'>

			{/* <Socialmedia></Socialmedia><hr />
        <Contact></Contact><hr />
        <Copyright></Copyright><Divider /> */}


			<footer>
				<div class="top">

					<div class="flex">
						<li><a href="" class="socialmedia">Facebook</a></li>
						<li><a href="" className="socialmedia">Linkedin</a></li>
						<li><a href="" className="socialmedia">Instagram</a></li>
						<li><a href="" className="socialmedia">Twitter</a></li>
					</div>
				</div>
				<div>
					<div class="footer-columns">
						<div class="contacts">
							<h3>Contact Us</h3><p>123 ABC AVE NE, CALGARY, ALBERTA, T2A 5E2</p>
							<div class="flex">
								<img src="" alt="" class="phone"/>
								<a href="" class="tel">+1 [403] 123-1234</a>
							</div>
							<a href="" class="mail">AGPCLEANING@GMAIL.COM</a>
						</div>
						<div>
							<h3>Our Links</h3>
							<ul>
								<li>
									About Us
								</li>
								<li>
									Meet our team
								</li>
								<li>
									What we do
								</li>
								<li>
									News
								</li>
								<li>
									Contact us
								</li>
							</ul>
						</div>
						<div>
							<h3>Our Services</h3>
							<ul>
								<li>
									Apartment cleaning
								</li>
								<li>
									House cleaning
								</li>
								<li>
									Carpet cleaning
								</li>
								<li>
									After renovation
								</li>
								<li>
									Curtain cleaning
								</li>
								<li>
									Window cleaning
								</li>
							</ul>
						</div>
						<div>
							<h3>Newsletter

							</h3>
							<p>Subscribe to our newsletter to get our latest update & news!</p>
							<form action=""><input type="email"/>
								<button type="submit">SUBSCRIBE</button>
							</form>
						</div>
					</div>
				</div>
			</footer>


		</div>)
	}
}
