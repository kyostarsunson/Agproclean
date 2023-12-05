import React, {Component} from 'react'
import {Button} from 'antd';
import 'antd/dist/antd.min.css'
import intro5 from "./renovation.jpg";
import './index.css'

import MyMenu from "../../components/MyMenu";

export default class Afterrenovation extends Component {
    render() {

        return (
            <div className="more">
                <div className={"more_body"}>
                    <div className={"more_body_left"}>
                        <h1> After renovation</h1>
                        <p>
                            Experience the pinnacle of post-renovation cleanliness with AGPROCLEAN Renovation Cleaners.
                            Our
                            skilled team ensures a meticulous clean, removing construction dust and polishing every
                            surface. Using advanced techniques and eco-friendly products, we deliver excellence for a
                            hassle-free, refreshed space. Choose AGPROCLEAN Renovation Cleaners for unparalleled service
                            where
                            attention to detail meets exceptional results.


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
