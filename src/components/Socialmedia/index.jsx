import React, { Component } from 'react'
import './index.css'

export default class Socialmedia extends Component {
    render() {
        return (
            <div className='socialmedia'>
                <img className='logo' alt=''></img>
                <ul className='socialmedia-right'>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Linkln</li>
                    <li>Instagram</li>
                </ul>

            </div>
        )
    }
}
