import React, {Component} from 'react'
import {Button} from 'antd';
import 'antd/dist/antd.min.css'
import intro5 from "./window.jpg";
import './index.css'

import MyMenu from "../../components/MyMenu";

export default class Windowcleaning extends Component {
    render() {

        return (
            <div className="more">
                <div className={"more_body"}>
                    <div className={"more_body_left"}>
                        <h1> Window cleaning</h1>
                        <p>
                            Revitalize your space with AGPROCLEAN Window Cleaning. Our expert team ensures crystal-clear
                            results, removing dirt and streaks to let the sunlight in. With meticulous techniques and
                            top-tier solutions, we promise more than just clean windows—expect a clear perspective and a
                            brighter, refreshed atmosphere. Choose AGPROCLEAN for exceptional service and spotless
                            windows that
                            elevate your home or office.


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
