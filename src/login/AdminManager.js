import React, { Component } from 'react'
import { Button, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import axios from "axios";


const {
    Header, Content, Footer, Sider,
} = Layout;

export default class Admin extends Component {
    state = {
        collapsed: false,
        itemId: []
    };


    componentWillMount() {
        // if (this.props.history)
        //     this.props.history.push('adminManager')

        if (this.props.history) {
            const loginname = this.props.history.location.loginname;
            sessionStorage.setItem('loginname', loginname);
            console.log('sessionStorage.length', sessionStorage.length, 'sessionStorage ,key0', sessionStorage.key(0))
            console.log('in adminmanager,this=', this, ',this.props.history.location.loginnam=', loginname);

            //this.props.history.push({ pathname: '/collegeRole' });
            axios.post('http://localhost:3001/api1/getAccountByLoginName', { loginname: loginname }).then((res) => {
                if (res.data.code === '1') {
                    //console.log('res.data=======', res.data);
                    //console.log('roleid=====', res.data.data.roleid);
                    this.setState(res.data.data)
                } else {
                    console.log('res.data.code!=1', res.data);
                }

                //this.setState({ tableData, course, currentMenu: course[0] });
                //this.handleCourseClick(course[0])
            });
        }



    };
    render() {
        const { itemId } = this.state;
        const { roleid } = this.state;

        console.log('this.roleid=', roleid);
        const adminstyle = { display: (roleid === 1 ? 'block' : 'none') };
        console.log('css==', adminstyle);


        return (
            <div>
                <Layout style={{ minHeight: '100vh', height: '100vh' }}>

                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <div style={{ height: 30, width: 150, background: '#3f3a40', margin: '20px auto', color: 'white' }}></div>

                        <Menu theme="dark" defaultSelectedKeys={itemId} mode="inline">
                            <Menu.Item key="0" ><Link to='Dashboard'
                                onClick={() => this.setState({ itemId: ['0'] })}>Dashboard</Link></Menu.Item>

                            <Menu.Item key="3" style={adminstyle}><Link to='Services'
                                onClick={() => this.setState({ itemId: ['3'] })}>Services</Link></Menu.Item>
                            <Menu.Item key="1" style={adminstyle}><Link to='Accounts'
                                onClick={() => this.setState({ itemId: ['1'] })}>Accounts</Link></Menu.Item>
                            <Menu.Item key="4"><Link to='Profile'
                                onClick={() => this.setState({ itemId: ['4'] })}>Profile</Link></Menu.Item>
                            <Menu.Item key="5"><Link to='Appointment'
                                onClick={() => this.setState({ itemId: ['5'] })}>Appointment</Link></Menu.Item>
                            <Menu.Item key="6" style={adminstyle}><Link to='Quote'
                                onClick={() => this.setState({ itemId: ['6'] })}>Quote</Link></Menu.Item>


                        </Menu>
                    </Sider>


                    <Layout style={{ overflow: 'hidden' }}>
                        <Header><Button><Link to='/'>Logout</Link></Button></Header>
                        <Content style={{ margin: '48px 72px', overflow: 'scroll' }}>
                            {this.props.children}
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            AGPROCLEAN COMPANY Design @2023 Created BY SONGLIE XU
                        </Footer>
                    </Layout>
                </Layout>


            </div>
        )
    }
}
