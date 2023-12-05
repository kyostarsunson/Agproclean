import React, {Component} from 'react'
import {Button} from 'antd';
import 'antd/dist/antd.min.css'
import intro5 from "./intro5.jpg";
import './index.css'

import MyMenu from "../../components/MyMenu";

export default class More extends Component {
    render() {

        return (
            <div className="more">
                <div className={"more_body"}>
                    <div className={"more_body_left"}>
                        <h1> AGPROCLEAN Mission statement</h1>
                        <p>
                            At agproclean, we are committed to providing our clients with exceptional cleaning services
                            that meet and exceed their expectations. We pride ourselves on delivering spotless and deep
                            cleaning services while ensuring that our processes are eco-friendly and sustainable. We
                            believe in building lasting relationships with our clients based on trust, transparency, and
                            excellence.

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
