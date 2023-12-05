import React, {Component, useState, useEffect} from 'react'
import {Card, Col, Row} from 'antd';
import {Column, Pie} from '@ant-design/charts';

import AdminManager from './AdminManager';
import DemoPie from "./Datadiag";

export default class Dashboard extends Component {
    render() {
        const data2 = [
            {year: '1991', value: 3},
            {year: '1992', value: 4},
            {year: '1993', value: 3.5},
            {year: '1994', value: 5},
            {year: '1995', value: 4.9},
            {year: '1996', value: 6},
            {year: '1997', value: 7},
            {year: '1998', value: 9},
            {year: '1999', value: 13},
        ];

        const data = [
            {year: '1991', value: 3},
            {year: '1992', value: 4},
            {year: '1993', value: 3.5},
            {year: '1994', value: 5},
            {year: '1995', value: 4.9},
            {year: '1996', value: 6},
            {year: '1997', value: 7},
            {year: '1998', value: 9},
            {year: '1999', value: 13},
        ];


        const config = {
            data,
            title: {
                visible: true,
                text: '带数据点的折线图',
            },
            xField: 'year',
            yField: 'value',
        };


        const config2 = {
            forceFit: true,
            title: {
                visible: true,
                text: '多色饼图',
            },
            description: {
                visible: true,
                text:
                    '指定颜色映射字段(colorField)\uFF0C饼图切片将根据该字段数据显示为不同的颜色\u3002指定颜色需要将color配置为一个数组\u3002\n当把饼图label的类型设置为inner时\uFF0C标签会显示在切片内部\u3002设置offset控制标签的偏移值\u3002',
            },
            radius: 0.8,
            data,
            angleField: 'value',
            colorField: 'type',
            label: {
                visible: true,
                type: 'inner',
            },
        };


        const data3 = [
            {
                type: '分类一',
                value: 27,
            },
            {
                type: '分类二',
                value: 25,
            },
            {
                type: '分类三',
                value: 18,
            },
            {
                type: '分类四',
                value: 15,
            },
            {
                type: '分类五',
                value: 10,
            },
            {
                type: '其它',
                value: 5,
            },
        ];
        const config3 = {
            forceFit: true,
            title: {
                visible: true,
                text: '多色饼图',
            },
            description: {
                visible: true,
                text:
                    '指定颜色映射字段(colorField)\uFF0C饼图切片将根据该字段数据显示为不同的颜色\u3002指定颜色需要将color配置为一个数组\u3002\n当把饼图label的类型设置为inner时\uFF0C标签会显示在切片内部\u3002设置offset控制标签的偏移值\u3002',
            },
            radius: 0.8,
            data3,
            angleField: 'value',
            colorField: 'type',
            label: {
                visible: true,
                type: 'inner',
            },
        };


        console.log("in dashboard----------------------")
        var myloginname = sessionStorage.getItem('loginname');
        var accountid = sessionStorage.getItem('accountid');

        return (

            <AdminManager>
                <div>
                    <div>
                        <h1 style={{fontSize: 40}}>Welcome,{myloginname}</h1>
                    </div>
                    <div style={{height: 100}}></div>
                    <div>
                        <Row gutter={16}>
                            <Col span={6}>
                                <Card title="TOTAL EARNINGS" bordered={false}>
                                    <h1> $ 559.25k</h1>
                                    <a href=''>View net earnings</a>
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="PRODUCT SALES" bordered={false}>
                                    <h1> $ 1.00k </h1>
                                    <a href=''>View total orders</a>
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="REFUNDS" bordered={false}>
                                    <h1> $ 0.00k </h1>
                                    <a href=''>View detail</a>
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="MY BALANCE" bordered={false}>
                                    <h1> $ 120.25k </h1>
                                    <a href=''>Withdraw money</a>
                                </Card>
                            </Col>
                        </Row>


                    </div>
                    <div>
                        <div style={{height: 150}}></div>

                        <Row gutter={16}>
                            <Col span={16}>
                                <Card title="Revenue" bordered={false}>
                                    <Column  {...config} />
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Card title" bordered={false}>
                                    <DemoPie></DemoPie>
                                </Card>
                            </Col>
                        </Row>

                    </div>


                </div>
            </AdminManager>
        )
    }
}
