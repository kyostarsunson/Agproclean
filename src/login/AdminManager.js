import React, {Component} from 'react'
import {Button, Layout, Menu} from 'antd';
import {Link} from 'react-router-dom';
import axios from "axios";
import {
    DashboardOutlined,
    AccountBookOutlined,
    DatabaseOutlined,
    ProfileOutlined,
    CustomerServiceOutlined,
    DollarOutlined,
    CameraOutlined,
    UnlockOutlined
} from "@ant-design/icons";


const {
    Header, Content, Footer, Sider,
} = Layout;

export default class Admin extends Component {
    state = {
        collapsed: false,
        itemId: []
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    componentWillMount() {
        // if (this.props.history)
        //     this.props.history.push('adminManager')

        const loginname = window.sessionStorage.getItem('loginname');
        console.log('in loginame=', loginname);


        //const loginname = this.props.history.location.loginname;
        //sessionStorage.setItem('loginname', loginname);
        //console.log('sessionStorage.length', sessionStorage.length, 'sessionStorage ,key0', sessionStorage.key(0))
        //console.log('in adminmanager,this=', this, ',this.props.history.location.loginnam=', loginname);

        //this.props.history.push({ pathname: '/collegeRole' });

        axios.post('http://70.75.134.37:3001/api1/getAccountByLoginName', {loginname: loginname}).then((res) => {
            if (res.data.code === '1') {
                console.log('res.data=======', res.data);
                console.log('roleid=====', res.data.data.roleid);
                this.setState(res.data.data)
            } else {
                console.log('res.data.code!=1', res.data);
            }

            //this.setState({ tableData, course, currentMenu: course[0] });
            //this.handleCourseClick(course[0])
        });


    };

    render() {
        const {itemId} = this.state;
        const roleid = window.sessionStorage.getItem('roleid');


        console.log('thisttttttttttttttttt.roleid=', roleid);
        const adminstyle = {display: (roleid === 1 ? 'block' : 'none')};
        console.log('css==', adminstyle);


        return (
            <div>
                <Layout style={{minHeight: '100vh', height: '100vh'}}>

                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <div style={{
                            height: 30,
                            width: 180,
                            background: '#3f3a40',
                            margin: '20px auto',
                            color: 'white'
                        }}>AGPRO CLEANING SYSTEM
                        </div>

                        <Menu theme="light" defaultSelectedKeys={itemId} mode="inline">
                            {(roleid === "1" || roleid === "2") &&
                                <Menu.Item key="0"><Link to='Dashboard'
                                                         onClick={() => this.setState({itemId: ['0']})}><DashboardOutlined/>Dashboard</Link></Menu.Item>}

                            {(roleid === "1" || roleid === "2") && <Menu.Item key="3"><Link to='Services'
                                                                                            onClick={() => this.setState({itemId: ['3']})}><AccountBookOutlined/>Services</Link></Menu.Item>}

                            {roleid === "1" && <Menu.Item key="1"><Link to='Accounts'
                                                                        onClick={() => this.setState({itemId: ['1']})}><DatabaseOutlined/>Accounts</Link></Menu.Item>}
                            <Menu.Item key="4"><Link to='Profile'
                                                     onClick={() => this.setState({itemId: ['4']})}><ProfileOutlined/>Profile</Link></Menu.Item>
                            <Menu.Item key="5"><Link to='Appointment'
                                                     onClick={() => this.setState({itemId: ['5']})}><CustomerServiceOutlined/>Appointment</Link></Menu.Item>
                            <Menu.Item key="6"><Link to='Quote'
                                                     onClick={() => this.setState({itemId: ['6']})}><DollarOutlined/>Quote</Link></Menu.Item>
                            {(roleid === "1" || roleid === "2") && <Menu.Item key="7"><Link to='Newsletter'
                                                                                            onClick={() => this.setState({itemId: ['6']})}><CameraOutlined/>Newsletter</Link></Menu.Item>}

                            {(roleid === "1" || roleid === "2") && <Menu.Item key="8"><Link to='Management'
                                                                                            onClick={() => this.setState({itemId: ['8']})}><UnlockOutlined/>Management</Link></Menu.Item>}

                        </Menu>
                    </Sider>


                    <Layout style={{overflow: 'hidden'}}>
                        <Header><Button><Link to='/'>Logout</Link></Button></Header>
                        <Content style={{margin: '48px 72px', overflow: 'scroll'}}>
                            {this.props.children}
                        </Content>
                        <Footer style={{textAlign: 'center'}}>
                            AGPROCLEAN COMPANY Design @2023 Created BY SONGLIE XU
                        </Footer>
                    </Layout>
                </Layout>


            </div>
        )
    }
}
