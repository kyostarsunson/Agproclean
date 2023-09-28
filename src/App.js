import React, { Component, Route } from 'react'
import MyMenu from './components/MyMenu'
import { Switch } from 'react-router-dom';

import MyFoot from './components/MyFoot'
import { Layout } from 'antd';

function App() {

  return (

    <Layout>
      <MyMenu></MyMenu>

    

      
      <MyFoot></MyFoot>
    </Layout>

   
  );
}

export default App;
