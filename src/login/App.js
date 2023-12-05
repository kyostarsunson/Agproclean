import React, {Component} from "react";


import {Switch, Route, Redirect} from 'react-router-dom';
import {withRouter} from "react-router-dom/cjs/react-router-dom.min";
import LoginForm from "./LoginForm";
import Services from "./Services"
import Accounts from './Accounts'
import Dashboard from "./Dashboard";

import AddService from './AddService';
import Profile from "./Profile";
import Appointment from "./Appointment";
import Quote from "./Quote";
import AdminManager from "./AdminManager";
import Newsletter from "./Newsletter";
import Management from "./Management";


import "/node_modules/antd/dist/antd.css";


class App extends Component {


    render() {

        return (


            <body>

            <Switch>
                <Route path='/adminManager' component={AdminManager}/>
                <Route path='/Services' component={Services}/>
                <Route path='/Accounts' component={Accounts}/>
                <Route path='/LoginForm' component={LoginForm}/>
                <Route path='/AddService' component={AddService}/>
                <Route path='/Profile' component={Profile}/>
                <Route path='/Appointment' component={Appointment}/>
                <Route path='/Quote' component={Quote}/>
                <Route path='/Dashboard' component={Dashboard}/>
                <Route path='/Newsletter' component={Newsletter}/>
                <Route path='/Management' component={Management}/>


                <Redirect to='/LoginForm'/>
            </Switch>


            </body>
        );
    }
}

export default withRouter(App)