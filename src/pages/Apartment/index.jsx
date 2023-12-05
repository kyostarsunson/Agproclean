import React, {Component} from 'react'
import {Button} from 'antd';
import 'antd/dist/antd.min.css'
import intro5 from "./apartment.jpg";
import './index.css'

import MyMenu from "../../components/MyMenu";

export default class Apartment extends Component {
    render() {

        return (
            <div className="more">
                <div className={"more_body"}>
                    <div className={"more_body_left"}>
                        <h1> Apartment cleaning</h1>
                        <p>
                            At agproclean is your go-to for professional apartment cleaning. Our highly trained team
                            ensures spotless results using industry-leading techniques and eco-friendly products. From
                            dusting to kitchen and bathroom cleaning, we prioritize excellence, reliability, and
                            customer satisfaction. Choose ABC Cleaning Services for a pristine living space and a
                            hassle-free experience.

                        </p>

                    </div>
                    <div className={"more_body_right"}>
                        <img src={intro5}/>
                    </div>
                </div>
            </div>
        )
    }
}
