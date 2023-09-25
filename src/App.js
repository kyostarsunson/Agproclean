import React, { Component } from 'react'
import MyMenu from './components/MyMenu'
import MyAppointment from './components/MyFoot'
import MyFoot from './components/MyAppointment'
import { Divider } from 'antd';
import { Layout } from 'antd';

function App() {
  return (

    <Layout>
      <MyMenu></MyMenu> <Divider plain>Text</Divider>
      <MyAppointment></MyAppointment> <Divider plain>Text</Divider>
      <MyFoot></MyFoot>
    </Layout>

   
  );
}

export default App;
