import React, { Component } from 'react'
import './index.css'

export default class Socialmedia extends Component {
    render() {
        return (
            <div className='socialmedia'>
                <img className='logo' alt=''></img>
                <ul className='socialmedia-right'>

                    <li> <a href='https://www.facebook.com/songlie.xu.3/'>Facebook</a> </li>
                    <li><a href='https://twitter.com/EnceladusMeTwitter'>Twitter</a></li>
                    <li><a href='linkedin.com/in/songlie-xu-67b106b2'>Linkln</a></li>
                    <li><a href='linkedin.com/in/songlie-xu-67b106b2'>Instagram</a></li>
                </ul>

            </div>
        )
    }
}
