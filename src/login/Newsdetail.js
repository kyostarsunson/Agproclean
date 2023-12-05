import {Row, Col, Checkbox, Button, Input, message, Switch, Select, Avatar, Form, Table, List, Modal} from 'antd'
import React, {Component} from 'react'
import AdminManager from './AdminManager'
import axios from 'axios';
import AddNews from "./AddNews";

export default class Newsdetail extends Component {


    render() {
        const {onOk, visible, onCancel, data, newslettersubject, newslettercontent} = this.props;
        console.log("in data-------------------------newslettersubject=", newslettersubject)
        console.log("in data-------------------------newslettercontent=", newslettercontent)
        return (
            //   <Modal visible={visible} onCancel={onCancel} onOk={() => onOk(this.selectData)} width={1900}>

            <Modal visible={visible} onCancel={onCancel} title={newslettersubject} onOk={onOk}>
                <div>

                    {newslettercontent}
                </div>
            </Modal>
        );
    }

}