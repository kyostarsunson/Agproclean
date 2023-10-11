import React, { Component } from 'react'
import { Button, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const {
    Header, Content, Footer, Sider,
} = Layout;

export default class Admin extends Component {
    state = {
        collapsed: false,
        itemId: []
    };


    componentDidMount() {
        // if (this.props.history)
        //     this.props.history.push('adminManager')
    };
    render() {
        const { itemId } = this.state;
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
                            <Menu.Item key="0"><Link to='Dashboard'
                                onClick={() => this.setState({ itemId: ['0'] })}>Dashboard</Link></Menu.Item>

                            <Menu.Item key="3"><Link to='Services'
                                onClick={() => this.setState({ itemId: ['3'] })}>Services</Link></Menu.Item>
                            <Menu.Item key="1"><Link to='Accounts'
                                onClick={() => this.setState({ itemId: ['1'] })}>Accounts</Link></Menu.Item>
                            <Menu.Item key="4"><Link to='Profile'
                                onClick={() => this.setState({ itemId: ['4'] })}>Profile</Link></Menu.Item>
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
