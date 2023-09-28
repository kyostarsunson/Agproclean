import React, { Component } from 'react'
import Socialmedia from '../Socialmedia'
import { Divider } from 'antd'
import Contact from '../Contact'
import Copyright from '../Copyright'
import "./index.css"

export default class MyFoot extends Component {
  render() {
    return (
      <div className='footer'>

        <Socialmedia></Socialmedia><hr />
        <Contact></Contact><hr />
        <Copyright></Copyright><Divider />
      </div>
    )
  }
}
