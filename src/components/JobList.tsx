import React, { Component } from 'react';
import { Row, Col, Table, Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import columns from '../constants/jobListTableFields';

class JobList extends Component {
  data: [] = [];
  getJobSource = () => {
    return window.location.pathname.split('/')[2];
  };

  render() {
    return (
      <Row>
        <Col span={24}>
          <Row>
            <Col span={12}>
              <Row justify="start">
                <h1>Job Source: {this.getJobSource()}</h1>
              </Row>
            </Col>
            <Col span={12}>
              <Row justify="end">
                <NavLink to="/">
                  <Button icon={<HomeOutlined />}>Job Sources</Button>
                </NavLink>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Table columns={columns} dataSource={this.data} />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default JobList;
