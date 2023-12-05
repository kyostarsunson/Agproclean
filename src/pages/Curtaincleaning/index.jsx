import React, {Component} from 'react'
import {Button} from 'antd';
import 'antd/dist/antd.min.css'
import intro5 from "./curtain.png";
import './index.css'

import MyMenu from "../../components/MyMenu";

export default class Curtaincleaning extends Component {
    render() {

        return (
            <div className="more">
                <div className={"more_body"}>
                    <div className={"more_body_left"}>
                        <h1> Curtain cleaning</h1>
                        <p>
                            Revitalize your living space with our Curtain Cleaners. Our expert team specializes in
                            meticulous curtain cleaning, removing dust, allergens, and stains to bring back their
                            original vibrancy. Using gentle yet effective methods, we ensure your curtains look and feel
                            as good as new. Choose AGPROCLEANING for a reliable and efficient service that understands
                            the nuances
                            of curtain care, providing a fresh backdrop for your home.


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
