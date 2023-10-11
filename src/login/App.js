import React, { Component } from "react";


import { Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import LoginForm from "./LoginForm";
import Services from "./Services"
import Accounts from './Accounts'
import Dashboard from "./Dashboard";
import AdminManager from "./AdminManager";
import AddService from './AddService';
import Profile from "./Profile";

import "/node_modules/antd/dist/reset.css";

class App extends Component {


    render() {

        return (


            <div>

                <Switch>
                    <Route path='/adminManager' component={AdminManager} />
                    <Route path='/Dashboard' component={Dashboard} />

                    <Route path='/Services' component={Services} />
                    <Route path='/Accounts' component={Accounts} />
                    <Route path='/LoginForm' component={LoginForm} />
                    <Route path='/AddService' component={AddService} />
                    <Route path='/Profile' component={Profile} />

                    <Redirect to='/LoginForm' />
                </Switch>


            </div>
        );
    }
}
export default withRouter(App)