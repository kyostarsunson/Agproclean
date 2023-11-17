import React, { Component } from 'react'

export default class NewAppointment extends Component {

    tableData = [];
    selectData = {};

    columns = [
        { title: 'secur', dataIndex: 'id', },
        { title: '学期', dataIndex: 'semester', },
        { title: '班级', dataIndex: 'classno', render: (text, record) => (record.classname) },
        { title: '课程', dataIndex: 'courseno', render: (text, record) => (record.courseName) },
    ];


    getTableData = () => {
        const { collegeno } = this.props;

        axios.post('/queryCleanerPlan', { collegeno }).then((res) => {
            if (res.data.code === '1') {
                this.tableData = res.data.data;
            }
        });
    };


    selectDataHandle = (selectedRowKeys) => {
        this.selectData = selectedRowKeys;
    };



    render() {
        return (
            <Modal visible={visible} width={800} onOk={() => onOk(this.selectData)} onCancel={onCancel}>
                <Form
                    className="ant-advanced-search-form"
                    onSubmit={this.handleSearch}
                >
                    <Row gutter={24}>
                        <Col span={8}>
                            <FormItem label='search'>
                                {form.getFieldDecorator('password', {})(<Input />)}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem>
                                <Button type='primary'>search</Button>
                            </FormItem>
                        </Col>
                    </Row>
                    <Table
                        columns={this.columns}
                        dataSource={this.tableData}
                        rowSelection={rowSelectProp}
                        bordered />
                </Form>
            </Modal>
        )
    }
}
