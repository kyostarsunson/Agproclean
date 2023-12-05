import React, {Component} from 'react'
import {Button} from 'antd';
import 'antd/dist/antd.min.css'
import intro5 from "./carpet.jpg";
import './index.css'

import MyMenu from "../../components/MyMenu";

export default class Carpetleaning extends Component {
    render() {

        return (
            <div className="more">
                <div className={"more_body"}>
                    <div className={"more_body_left"}>
                        <h1> Carpet Cleaning</h1>
                        <p>
                            Our experienced team employs state-of-the-art equipment and specialized techniques to ensure
                            a deep and thorough clean for your carpets. We prioritize the removal of stubborn stains,
                            odors, and allergens, leaving your carpets revitalized and looking like new. With a
                            commitment to excellence and customer satisfaction, AGPROCLEANING Carpet Cleaners is the
                            choice for those seeking a professional touch in carpet cleaning. Trust us to bring life
                            back to your carpets and create a fresher, healthier living environment for you and your
                            family.


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
