import React, { Component } from 'react';
import './index.css'

export default class MyMenu extends Component {

    render() {
        return (
            <div class="nav">
                <ul class="center">
                    <li><a href="#">Main</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Meet Us </a></li>
                    <li><a href="#">Tools</a></li>
                    <li><a href="#">About</a></li>

                </ul>
            </div>
        )
    }
}

