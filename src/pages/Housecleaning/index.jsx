import React, {Component} from 'react'
import {Button} from 'antd';
import 'antd/dist/antd.min.css'
import intro5 from "./house.jpg";
import './index.css'

import MyMenu from "../../components/MyMenu";

export default class Housecleaning extends Component {
    render() {

        return (
            <div className="more">
                <div className={"more_body"}>
                    <div className={"more_body_left"}>
                        <h1> House Cleaning</h1>
                        <p>
                            Housecleaning excels in professional housecleaning services, providing meticulous care to
                            transform homes into pristine spaces. Our experienced team uses top-notch equipment and
                            eco-friendly products for thorough dusting, vacuuming, and kitchen and bathroom cleaning.
                            Punctual, reliable, and committed to customer satisfaction, AGPROCLEAN Housecleaning ensures
                            your
                            home is a fresh and hygienic haven tailored to your needs. Choose us for a spotless and
                            professional touch in housecleaning.


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
